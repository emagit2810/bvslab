// Componente React para descubrir la raíz de la API REST de un sitio WordPress
import React, { useState, useEffect } from 'react';

const WordPressApiDiscoverer = ({ siteUrl }) => {
  // Estado para controlar la carga, la raíz de la API y errores
  const [isLoading, setIsLoading] = useState(false);
  const [apiRoot, setApiRoot] = useState(null);
  const [error, setError] = useState(null);

  // Efecto que se ejecuta cuando cambia la URL del sitio
  useEffect(() => {
    if (!siteUrl) {
      setApiRoot(null);
      setError(null);
      return;
    }

    // Función principal para descubrir la raíz de la API REST
    const findApiRoot = async () => {
      setIsLoading(true);
      setApiRoot(null);
      setError(null);

      try {
        // Usar GET en lugar de HEAD + timeout para evitar bloqueos
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        // Solicitud al sitio para obtener los headers
        const response = await fetch(siteUrl, { 
          method: 'GET',
          signal: controller.signal,
          mode: 'cors'
        });
        
        clearTimeout(timeoutId);
        
        // Buscar el header 'Link' que suele contener la URL de la API REST
        const linkHeader = response.headers.get('Link') || response.headers.get('link');
        
        if (!linkHeader) {
          throw new Error('API REST no encontrada - sin header Link');
        }

        // Extraer la URL de la API REST usando regex
        const urlMatch = linkHeader.match(/<([^>]*wp-json[^>]*)>/);
        if (!urlMatch?.[1]) {
          throw new Error('URL de API no encontrada en header Link');
        }

        const discoveredApiRoot = urlMatch[1];
        
        // Verificar que la API encontrada responde correctamente
        const verificationResponse = await fetch(discoveredApiRoot, {
          signal: controller.signal
        });
        
        if (!verificationResponse.ok) {
          throw new Error(`API no accesible: ${verificationResponse.status}`);
        }
        
        // Comprobar que la API tiene el namespace 'wp/v2' (WordPress estándar)
        const apiInfo = await verificationResponse.json();
        
        if (apiInfo?.namespaces?.includes('wp/v2')) {
          setApiRoot(discoveredApiRoot);
        } else {
          throw new Error('API encontrada pero sin wp/v2');
        }
        
      } catch (err) {
        // Manejo de errores comunes: timeout, CORS, otros
        if (err.name === 'AbortError') {
          setError('Timeout - sitio muy lento');
        } else if (err.message.includes('CORS')) {
          setError('CORS bloqueado - prueba con proxy');
        } else {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    findApiRoot();
  }, [siteUrl]);

  // Renderizado del componente con mensajes según el estado
  return (
    <div className="border border-gray-300 p-4 rounded-lg font-sans">
      <h4 className="text-lg font-semibold mb-2">Verificador API WordPress</h4>
      <p className="mb-3">
        <strong>Sitio:</strong> {siteUrl || 'Sin URL'}
      </p>
      
      {isLoading && <p className="text-blue-600">Buscando...</p>}
      
      {error && (
        <p className="text-red-600">
          <strong>Error:</strong> {error}
        </p>
      )}
      
      {apiRoot && (
        <p className="text-green-600">
          <strong>✓ API encontrada:</strong> {apiRoot}
        </p>
      )}
    </div>
  );
};

export default WordPressApiDiscoverer;


 

