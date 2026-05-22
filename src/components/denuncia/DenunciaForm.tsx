import type { FormEventHandler } from "react";
import { useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import type { FieldValue } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../services/firebase.js";
import styles from "./DenunciaForm.module.css";

type ReportFormData = {
  fecha: string;
  hora: string;
  lugar: string;
  descripcion: string;
  agresor: string | null;
  identificacion: string | null;
  patente: string | null;
  nombre: string;
  telefono: string;
  email: string;
  visibilizar: boolean;
  denunciarLegalmente: boolean;
};

const DenunciaForm = () => {
  const [fecha, setFecha] = useState<string>("");
  const [hora, setHora] = useState<string>("");
  const [lugar, setLugar] = useState<string>("");
  const [descripcion, setDescripcion] = useState("");
  const [agresor, setAgresor] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [patente, setPatente] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [visibilizar, setVisibilizar] = useState(false);
  const [denunciarLegalmente, setDenunciarLegalmente] = useState(false);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [archivos, setArchivos] = useState<FileList | null>(null);
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const requiredFields = {
      fecha,
      hora,
      lugar,
      descripcion,
      nombre,
      telefono,
      email,
    };
    const emptyFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setError(
        `Por favor completa los campos obligatorios: ${emptyFields.join(", ")}`,
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      return false;
    }

    if (!aceptoTerminos) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      return false;
    }

    return true;
  };

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      // Validar campos requeridos
      if (
        !fecha ||
        !hora ||
        !lugar ||
        !descripcion ||
        !nombre ||
        !telefono ||
        !email
      ) {
        throw new Error("Por favor completa todos los campos requeridos");
      }

      const data: ReportFormData & {
        fechaCreacion: FieldValue;
        estado: "nuevo";
        tieneArchivos: boolean;
      } = {
        fecha: fecha,
        hora: hora,
        lugar: lugar,
        descripcion: descripcion,
        agresor: agresor || null,
        identificacion: identificacion || null,
        patente: patente || null,
        nombre: nombre,
        telefono: telefono,
        email: email,
        visibilizar: visibilizar,
        denunciarLegalmente: denunciarLegalmente,
        fechaCreacion: serverTimestamp(),
        estado: "nuevo",
        tieneArchivos: (archivos?.length ?? 0) > 0,
      };

      // 1. Primero creamos la denuncia para obtener su ID
      const denunciaRef = await addDoc(collection(db, "denuncias"), data);

      // 2. Subir archivos si los hay
      if (archivos && archivos.length > 0) {
        for (let i = 0; i < archivos.length; i++) {
          const archivo = archivos[i];
          if (archivo) {
            const storage = getStorage();
            const filePath = `${denunciaRef.id}/${Date.now()}_${archivo.name}`;
            const storageRef = ref(storage, `archivos/${filePath}`);

            // Subir el archivo
            await uploadBytes(storageRef, archivo);
            // No necesitamos la URL ya que podemos construirla más tarde
          }
        }
      }

      setSuccess(true);

      // Resetear formulario
      setFecha("");
      setHora("");
      setLugar("");
      setDescripcion("");
      setAgresor("");
      setIdentificacion("");
      setPatente("");
      setArchivos(null);
      setNombre("");
      setTelefono("");
      setEmail("");
      setVisibilizar(false);
      setDenunciarLegalmente(false);
      setAceptoTerminos(false);
    } catch (err) {
      console.error("Error al enviar la denuncia:", err);
      setError(
        "Ocurrió un error al enviar la denuncia. Por favor intenta nuevamente.",
      );
    } finally {
      setIsSending(false);
    }
  };

  if (success) {
    return (
      <div className={styles["denuncia-success"]}>
        <h2>¡Gracias por tu denuncia!</h2>
        <p>
          Hemos recibido tu mensaje y nos pondremos en contacto con vos si es
          necesario.
        </p>
      </div>
    );
  }

  return (
    <div className={styles["denuncia-form-container"]}>
      <div>
        <h2>Quiero Denunciar</h2>
        <h4>Un hecho de violencia policial</h4>
      </div>

      {error && <div className={styles["error-message"]}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <h3>I. LUGAR Y FECHA</h3>
        <h4>¿Cuándo fue?</h4>
        <div>
          <div className={styles["form-group"]}>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>
        </div>

        <h4>¿Dónde fue?</h4>
        <div className={styles["form-group"]}>
          <input
            type="text"
            value={lugar}
            placeholder="Especificá el lugar"
            onChange={(e) => setLugar(e.target.value)}
            required
          />
        </div>

        <h3>II. DESCRIPCIÓN DEL HECHO</h3>
        <div className={styles["form-group"]}>
          <textarea
            value={descripcion}
            placeholder="Describí el hecho"
            onChange={(e) => setDescripcion(e.target.value)}
            rows={5}
            required
          />
        </div>

        <h3>III. DATOS DEL AGRESOR</h3>
        <div className={styles["form-group"]}>
          <select value={agresor} onChange={(e) => setAgresor(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="Policía de la Ciudad">Policía de la Ciudad</option>
            <option value="(DOU) Operaciones Urbanas de Contención">
              (DOU) Operaciones Urbanas de Contención
            </option>
            <option value="Agentes de Prevención CABA">
              Agentes de Prevención CABA
            </option>
            <option value="Policía Federal">Policía Federal</option>
            <option value="Prefectura">Prefectura</option>
            <option value="Gendarmería">Gendarmería</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className={styles["form-group"]}>
          <input
            type="text"
            value={identificacion}
            placeholder="Identificación (número de placa o distintivo)"
            onChange={(e) => setIdentificacion(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <input
            type="text"
            value={patente}
            placeholder="Patente del móvil (si corresponde)"
            onChange={(e) => setPatente(e.target.value)}
          />
        </div>

        <h3>IV. TUS DATOS</h3>
        <div className={styles["form-group"]}>
          <input
            type="text"
            value={nombre}
            placeholder="Tu nombre completo"
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <input
            type="tel"
            value={telefono}
            placeholder="Tu teléfono"
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <input
            type="email"
            value={email}
            placeholder="Tu correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <h3>V. ARCHIVOS ADJUNTOS</h3>
        <div className={styles["form-group"]}>
          <input
            type="file"
            onChange={(e) => {
              setArchivos(e.target.files);
            }}
            multiple
            accept="video/*,image/*,.pdf,.doc,.docx"
          />
          <small>
            Podes subir fotos, videos o documentos (máx. 1GB en total)
          </small>
        </div>

        <h3>VI. OPCIONES</h3>
        <div>
          <input
            type="checkbox"
            id="visibilizar"
            checked={visibilizar}
            onChange={(e) => setVisibilizar(e.target.checked)}
          />
          <label htmlFor="visibilizar">
            Autorizo que mi caso sea difundido en las redes sociales de la
            organización
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="denunciarLegalmente"
            checked={denunciarLegalmente}
            onChange={(e) => setDenunciarLegalmente(e.target.checked)}
          />
          <label htmlFor="denunciarLegalmente">
            Quiero asesoramiento legal para realizar una denuncia formal
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="aceptoTerminos"
            checked={aceptoTerminos}
            onChange={(e) => setAceptoTerminos(e.target.checked)}
            required
          />
          <label htmlFor="aceptoTerminos">
            Acepto los términos y condiciones de privacidad
          </label>
        </div>

        <div className={styles["form-actions"]}>
          <button
            type="submit"
            disabled={isSending}
            className={styles["submit-button"]}
          >
            {isSending ? "Enviando..." : "Enviar denuncia"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DenunciaForm;
