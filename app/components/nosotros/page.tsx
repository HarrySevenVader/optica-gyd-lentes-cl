'use client'

import React, { useEffect, useRef, useState } from 'react'
import './nosotros.css'

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`nosotros-section ${isVisible ? 'visible' : ''}`} id="nosotros">
      <div className="nosotros-container">
        <div className="nosotros-layout">
          {/* Columna Izquierda: Imagen Placeholder (Futuro Carrusel) */}
          <div className="nosotros-image-col">
            <div className="nosotros-image-placeholder-container">
              <div className="nosotros-image-placeholder">
                <svg 
                  className="nosotros-placeholder-icon" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="nosotros-placeholder-text">Próximamente: Galería de Nuestros Lentes y Equipo</span>
              </div>
              {/* Elementos decorativos */}
              <div className="nosotros-deco-circle"></div>
              <div className="nosotros-deco-dots"></div>
            </div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="nosotros-content-col">
            <h2 className="nosotros-heading">
              En <span className="nosotros-accent">Óptica GYD</span>, creemos que ver bien es <span className="nosotros-accent">vivir mejor.</span>
            </h2>
            
            <p className="nosotros-lead">
              Con años de trayectoria en el rubro óptico, nuestro compromiso es ayudarte a encontrar los lentes perfectos: 
              que corrijan tu visión, reflejen tu personalidad y te hagan sentir increíble cada día.
            </p>

            <div className="nosotros-features-grid">
              {/* Feature 1 */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Visión perfecta, estilo único.</h4>
                  <p className="nosotros-feature-desc">
                    Combinamos salud visual con diseño para que te veas y te sientas increíble.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Entrega rápida y atención personalizada.</h4>
                  <p className="nosotros-feature-desc">
                    Te acompañamos en cada paso y llevamos tus lentes hasta tu puerta.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Tecnología óptica de última generación.</h4>
                  <p className="nosotros-feature-desc">
                    Cristales con tratamientos avanzados para una visión clara y confortable.
                  </p>
                </div>
              </div>

               {/* Feature 4 */}
               <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Garantía total de satisfacción.</h4>
                  <p className="nosotros-feature-desc">
                    Tu comodidad es nuestra prioridad. Calidad asegurada en cada armazón y cristal.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

