'use client'

import { useEffect, useRef, useState } from 'react'
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
    <section ref={sectionRef} className={`nosotros-section ${isVisible ? 'visible' : ''}`}>
      <div className="nosotros-container">
        {/* Header */}
        <div className="nosotros-header">
          <span className="nosotros-badge">Sobre Nosotros</span>
          <h2 className="nosotros-title">
            Tu Óptica de <span className="nosotros-title-accent">Confianza</span>
          </h2>
          <p className="nosotros-description">
            En Óptica GYD llevamos años dedicados a cuidar tu salud visual con profesionalismo 
            y compromiso. Ofrecemos productos de la más alta calidad y un servicio personalizado 
            que se adapta a tus necesidades.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="nosotros-stats">
          <div className="nosotros-stat-card">
            <div className="nosotros-stat-number">15+</div>
            <div className="nosotros-stat-label">Años de Experiencia</div>
          </div>
          <div className="nosotros-stat-card">
            <div className="nosotros-stat-number">5000+</div>
            <div className="nosotros-stat-label">Clientes Satisfechos</div>
          </div>
          <div className="nosotros-stat-card">
            <div className="nosotros-stat-number">500+</div>
            <div className="nosotros-stat-label">Modelos Disponibles</div>
          </div>
          <div className="nosotros-stat-card">
            <div className="nosotros-stat-number">100%</div>
            <div className="nosotros-stat-label">Garantía de Calidad</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="nosotros-content-grid">
          {/* Card 1 */}
          <div className="nosotros-card">
            <div className="nosotros-card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="nosotros-card-title">Exámenes de la Vista</h3>
            <p className="nosotros-card-text">
              Realizamos exámenes completos de la vista con tecnología de última generación 
              para garantizar un diagnóstico preciso.
            </p>
          </div>

          {/* Card 2 */}
          <div className="nosotros-card">
            <div className="nosotros-card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="nosotros-card-title">Garantía Extendida</h3>
            <p className="nosotros-card-text">
              Todos nuestros productos cuentan con garantía extendida para tu tranquilidad 
              y seguridad en cada compra.
            </p>
          </div>

          {/* Card 3 */}
          <div className="nosotros-card">
            <div className="nosotros-card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="nosotros-card-title">Marcas Premium</h3>
            <p className="nosotros-card-text">
              Trabajamos con las mejores marcas internacionales para ofrecerte productos 
              de excelencia y estilo único.
            </p>
          </div>

          {/* Card 4 */}
          <div className="nosotros-card">
            <div className="nosotros-card-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="nosotros-card-title">Atención Personalizada</h3>
            <p className="nosotros-card-text">
              Nuestro equipo de profesionales te brinda asesoría experta y personalizada 
              en cada visita.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="nosotros-cta">
          <h3 className="nosotros-cta-title">¿Listo para cuidar tu visión?</h3>
          <p className="nosotros-cta-text">Agenda tu cita hoy y descubre la diferencia GYD</p>
          <button className="nosotros-cta-button">
            Agendar Cita Ahora
            <svg className="nosotros-cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
