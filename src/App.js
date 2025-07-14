import React from 'react';
import WordPressApiDiscoverer from './WordPressApiDiscoverer';

function App() {
  const wordpressSite = 'https://www.bvslab.com/';

  return (
    <div style={{ background: '#f3f5f8', minHeight: '100vh' }}>
      {/* Barra superior */}
      <nav style={{ background: '#0080e9', color: 'white', padding: '18px 0 12px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 'bold', fontSize: '2rem', marginLeft: 20 }}>MediTech Mecanizados</span>
        <div style={{ marginRight: 30 }}>
          <a href="#servicios" style={{ color: 'white', textDecoration: 'none', marginRight: 30, fontSize: '1.2rem' }}>Servicios</a>
          <a href="#experiencia" style={{ color: 'white', textDecoration: 'none', marginRight: 30, fontSize: '1.2rem' }}>Experiencia</a>
          <a href="#contacto" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Contacto</a>
        </div>
      </nav>
      {/* Hero principal */}
      <section style={{ textAlign: 'center', padding: '60px 10px 60px 10px', background: '#f3f5f8' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: 0, color: '#3a4653' }}>
          Especialistas en Reparación de <br />
          <span style={{ color: '#0080e9' }}>Equipos Médicos</span>
        </h1>
        <p style={{ color: '#7a8593', fontSize: '1.5rem', margin: '30px 0 40px 0' }}>
          Más de 15 años reparando y manteniendo maquinaria hospitalaria con precisión<br />
          técnica y compromiso total con la salud
        </p>
        <button style={{ background: '#0080e9', color: 'white', fontWeight: 600, fontSize: '1.5rem', border: 'none', borderRadius: 12, padding: '18px 40px', cursor: 'pointer', marginBottom: 30 }}>
          Solicitar Presupuesto
        </button>
      </section>
      {/* Sección de servicios */}
      <section id="servicios" style={{ background: 'white', borderRadius: 30, margin: '0 auto', maxWidth: 1200, marginTop: -40, boxShadow: '0 4px 24px #0001', padding: '60px 0 60px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#3a4653', marginBottom: 40 }}>Nuestros Servicios</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div style={{ background: '#f3f5f8', borderRadius: 18, padding: 30, minWidth: 260, maxWidth: 320, boxShadow: '0 2px 8px #0001' }}>
            <h3 style={{ color: '#0080e9', fontWeight: 700, fontSize: '1.3rem' }}>Mantenimiento Preventivo</h3>
            <p style={{ color: '#3a4653' }}>Revisión y ajuste periódico de equipos médicos para evitar fallos inesperados.</p>
          </div>
          <div style={{ background: '#f3f5f8', borderRadius: 18, padding: 30, minWidth: 260, maxWidth: 320, boxShadow: '0 2px 8px #0001' }}>
            <h3 style={{ color: '#0080e9', fontWeight: 700, fontSize: '1.3rem' }}>Reparación Especializada</h3>
            <p style={{ color: '#3a4653' }}>Solución de averías y restauración de equipos hospitalarios con repuestos originales.</p>
          </div>
          <div style={{ background: '#f3f5f8', borderRadius: 18, padding: 30, minWidth: 260, maxWidth: 320, boxShadow: '0 2px 8px #0001' }}>
            <h3 style={{ color: '#0080e9', fontWeight: 700, fontSize: '1.3rem' }}>Asesoría Técnica</h3>
            <p style={{ color: '#3a4653' }}>Orientación profesional para la adquisición, uso y cuidado de equipos médicos.</p>
          </div>
        </div>
      </section>
      {/* Sección de API (puedes ocultarla si no la quieres visible) */}
      <div style={{ maxWidth: 600, margin: '60px auto 0 auto' }}>
        <WordPressApiDiscoverer siteUrl={wordpressSite} />
      </div>
    </div>
  );
}

export default App;