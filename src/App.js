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
          {/* Card 1: Reparación Especializada */}
          <div style={{ background: '#fff', borderRadius: 18, padding: 30, minWidth: 320, maxWidth: 350, boxShadow: '0 2px 12px #0001', border: '1px solid #e3e7ef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#0080e9', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              {/* Llave inglesa SVG */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2l-7 7"/><path d="M14 2l8 8"/><circle cx="7" cy="17" r="3"/><path d="M7 14v1m0 4v1m3-3h1m-4 0H3"/></svg>
            </div>
            <h3 style={{ color: '#2d3748', fontWeight: 700, fontSize: '1.6rem', marginBottom: 12 }}>Reparación Especializada</h3>
            <p style={{ color: '#5a6270', fontSize: '1.15rem', margin: 0 }}>Diagnóstico y reparación de equipos médicos con componentes certificados y garantía completa</p>
          </div>
          {/* Card 2: Mantenimiento Preventivo */}
          <div style={{ background: '#fff', borderRadius: 18, padding: 30, minWidth: 320, maxWidth: 350, boxShadow: '0 2px 12px #0001', border: '1px solid #e3e7ef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#00c3f7', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              {/* Engranaje SVG */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <h3 style={{ color: '#2d3748', fontWeight: 700, fontSize: '1.6rem', marginBottom: 12 }}>Mantenimiento Preventivo</h3>
            <p style={{ color: '#5a6270', fontSize: '1.15rem', margin: 0 }}>Programas de mantenimiento para garantizar el funcionamiento óptimo de su maquinaria</p>
          </div>
          {/* Card 3: Consultoría Técnica */}
          <div style={{ background: '#fff', borderRadius: 18, padding: 30, minWidth: 320, maxWidth: 350, boxShadow: '0 2px 12px #0001', border: '1px solid #e3e7ef', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#00c3f7', borderRadius: '50%', width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              {/* Hoja/Documento SVG */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h2"/></svg>
            </div>
            <h3 style={{ color: '#2d3748', fontWeight: 700, fontSize: '1.6rem', marginBottom: 12 }}>Consultoría Técnica</h3>
            <p style={{ color: '#5a6270', fontSize: '1.15rem', margin: 0 }}>Asesoramiento especializado para optimización y actualización de equipamiento médico</p>
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