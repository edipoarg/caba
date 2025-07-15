

const ReportesList = ({ reportes }) => {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      {reportes.map((reporte) => (
        <article
          key={reporte.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            marginBottom: 40,
            padding: 20,
            boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
          }}
        >
          <h2 style={{ marginBottom: 5 }}>{reporte.titulo}</h2>
          <p style={{ fontStyle: "italic", color: "#555" }}>{reporte.fecha}</p>
          {reporte.cantidadCasosRelevados !== null && (
            <p>
              Casos relevados: <strong>{reporte.cantidadCasosRelevados}</strong>
            </p>
          )}

          {/* Casos singulares */}
          {reporte.casosSingulares.length > 0 && (
            <section style={{ marginTop: 20 }}>
              <h3>Casos singulares</h3>
              {reporte.casosSingulares.map((caso, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 15,
                    paddingLeft: 10,
                    borderLeft: "3px solid #d33",
                  }}
                >
                  <h4 style={{ marginBottom: 5 }}>{caso.titulo}</h4>
                  <p style={{ whiteSpace: "pre-line" }}>{caso.descripcion}</p>
                </div>
              ))}
            </section>
          )}

          {/* Caso sistemático */}
          {reporte.casoSistematico && (
            <section style={{ marginTop: 30 }}>
              <h3>{reporte.casoSistematico.titulo}</h3>
              {reporte.casoSistematico.bajada && (
                <p style={{ fontWeight: "600", marginTop: 10 }}>
                  {reporte.casoSistematico.bajada}
                </p>
              )}
              {reporte.casoSistematico.aclaraciones && (
                <p style={{ fontStyle: "italic", marginTop: 10 }}>
                  {reporte.casoSistematico.aclaraciones}
                </p>
              )}
              {reporte.casoSistematico.cuerpo && (
                <p style={{ marginTop: 10, whiteSpace: "pre-line" }}>
                  {reporte.casoSistematico.cuerpo}
                </p>
              )}
              {reporte.casoSistematico.resaltado && (
                <blockquote
                  style={{
                    background: "#f9f0f0",
                    borderLeft: "5px solid #d33",
                    padding: 10,
                    marginTop: 15,
                    whiteSpace: "pre-line",
                    fontWeight: "600",
                  }}
                >
                  {reporte.casoSistematico.resaltado}
                </blockquote>
              )}
              {reporte.casoSistematico.notas && (
                <p style={{ fontSize: 14, color: "#666", marginTop: 15 }}>
                  {reporte.casoSistematico.notas}
                </p>
              )}
            </section>
          )}

          {/* Caso político */}
          {reporte.casoPolitico && (
            <section style={{ marginTop: 30, borderTop: "1px solid #ccc", paddingTop: 20 }}>
              <h3>{reporte.casoPolitico.titulo}</h3>
              {reporte.casoPolitico.bajada && (
                <p style={{ fontWeight: "600", marginTop: 10 }}>
                  {reporte.casoPolitico.bajada}
                </p>
              )}
              {reporte.casoPolitico.aclaraciones && (
                <p style={{ fontStyle: "italic", marginTop: 10 }}>
                  {reporte.casoPolitico.aclaraciones}
                </p>
              )}
              {reporte.casoPolitico.cuerpo && (
                <p style={{ marginTop: 10, whiteSpace: "pre-line" }}>
                  {reporte.casoPolitico.cuerpo}
                </p>
              )}
              {reporte.casoPolitico.resaltado && (
                <blockquote
                  style={{
                    background: "#f0f7f9",
                    borderLeft: "5px solid #337",
                    padding: 10,
                    marginTop: 15,
                    whiteSpace: "pre-line",
                    fontWeight: "600",
                    color: "#004466",
                  }}
                >
                  {reporte.casoPolitico.resaltado}
                </blockquote>
              )}
              {reporte.casoPolitico.notas && (
                <p style={{ fontSize: 14, color: "#444", marginTop: 15 }}>
                  {reporte.casoPolitico.notas}
                </p>
              )}
            </section>
          )}
        </article>
      ))}
    </div>
  );
};

export default ReportesList;
