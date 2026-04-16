'use client'

import React, { useEffect, useRef, useState } from 'react'
import './ubicacion.css'
import { businessConfig, contactConfig } from '@/app/lib/siteConfig'

/*
  ============================================================
  📝 INSTRUCCIONES PARA CONFIGURAR EL MAPA:

  1. Ve a Google Maps y busca tu negocio
  2. Haz clic en "Compartir" → "Insertar un mapa"
  3. Copia el código <iframe> que te da Google
  4. Pega SOLO la URL del src="..." en la variable GOOGLE_MAPS_EMBED_URL
  
  Ejemplo:
  const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=...'

  ============================================================
*/

// URL del iframe de Google Maps - Óptica GYD
const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832!2d-70.6464002!3d-33.4402113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c52a23cd87ff%3A0xb46d113a8282413c!2sOptica%20GYD!5e0!3m2!1ses!2scl!4v1'

export default function Ubicacion() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const currentRef = sectionRef.current
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`ubicacion-section ${isVisible ? 'visible' : ''}`}
      id="ubicacion"
    >
      <div className="ubicacion-container">
        {/* Header */}
        <div className="ubicacion-header">
          <div className="ubicacion-badge">
            <svg className="ubicacion-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Encuéntranos</span>
          </div>
          <h2 className="ubicacion-title">
            Visítanos en nuestra <span className="ubicacion-accent">tienda.</span>
          </h2>
          <p className="ubicacion-subtexto">
            Ven a conocernos y prueba tus lentes antes de comprar.<br /> Te atendemos con la mejor disposición.
          </p>
        </div>

        {/* Contenido: Mapa + Info */}
        <div className="ubicacion-content">
          {/* Mapa */}
          <div className="ubicacion-mapa">
            {GOOGLE_MAPS_EMBED_URL ? (
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Óptica GYD"
              />
            ) : (
              <div className="ubicacion-mapa-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Mapa de Google Maps (pendiente)</span>
              </div>
            )}
          </div>

          {/* Info lateral */}
          <div className="ubicacion-info">
            {/* Dirección */}
            <div className="ubicacion-info-item">
              <div className="ubicacion-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ubicacion-info-text">
                <h4>Dirección</h4>
                <p>{businessConfig.address}</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="ubicacion-info-item">
              <div className="ubicacion-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="ubicacion-info-text">
                <h4>Horario de atención</h4>
                <p>{businessConfig.openingHours.weekdays}</p>
                <p>{businessConfig.openingHours.saturday}</p>
              </div>
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="ubicacion-info-item">
              <div className="ubicacion-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="ubicacion-info-text">
                <h4>Contáctanos</h4>
                <p>Atencion al cliente: {contactConfig.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
