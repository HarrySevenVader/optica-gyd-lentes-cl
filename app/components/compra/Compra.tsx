'use client'

import React, { useEffect, useRef, useState } from 'react'
import './compra.css'

const pasosOnline = [
  {
    numero: 1,
    texto: 'Elige el modelo que más te guste desde el catálogo.',
  },
  {
    numero: 2,
    texto: 'Envíanos una foto del lente junto con tu receta óptica actualizada (ideal que tenga menos de un año).',
  },
  {
    numero: 3,
    texto: 'Te confirmamos el total, método de pago y plazos.',
  },
  {
    numero: 4,
    texto: 'Elige si prefieres envío a domicilio o retiro presencial.',
  },
  {
    numero: 5,
    texto: 'Tiempo de entrega online: 24 horas hábiles para despacho o retiro.',
  },
]

const beneficiosPresencial = [
  'Puedes probar los marcos en persona',
  'Chequeo visual disponible (consulta por convenio)',
  'Entrega en solo 1 hora si tenemos stock y receta compatible',
]

export default function Compra() {
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
      className={`compra-section ${isVisible ? 'visible' : ''}`}
      id="compra"
    >
      <div className="compra-container">
        {/* Header */}
        <div className="compra-header">
          <span className="compra-badge">¿Cómo comprar?</span>
          <h2 className="compra-title">
            Haz tu compra de forma <span className="compra-accent">fácil y rápida</span>
          </h2>
          <p className="compra-subtitle">
            Elige la modalidad que más te acomode: compra online desde cualquier lugar de Chile o visítanos presencialmente en Santiago Centro.
          </p>
        </div>

        {/* Dos columnas: Online y Presencial */}
        <div className="compra-grid">

          {/* ── ONLINE ── */}
          <div className="compra-card compra-card--online">
            <div className="compra-card-header">
              <div className="compra-card-icon-circle compra-card-icon-circle--online">
                {/* Smartphone icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div>
                <h3 className="compra-card-title">Online</h3>
                <p className="compra-card-via">WhatsApp, Instagram y Facebook</p>
              </div>
            </div>

            <ol className="compra-pasos-list">
              {pasosOnline.map((paso) => (
                <li key={paso.numero} className="compra-paso-item">
                  <span className="compra-paso-num">{paso.numero}</span>
                  <span className="compra-paso-text">{paso.texto}</span>
                </li>
              ))}
            </ol>

            {/* Contacto */}
            <div className="compra-contacto">
              <a
                href={`https://wa.me/56973980408?text=${encodeURIComponent('Hola, quiero hacer una compra online de lentes 👓 ¿Me pueden ayudar?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="compra-contacto-btn compra-contacto-btn--whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +56 9 7398 0408
              </a>
              <a
                href="https://www.instagram.com/opticagyd_cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="compra-contacto-btn compra-contacto-btn--instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @opticagyd_cl
              </a>
            </div>
          </div>

          {/* ── PRESENCIAL ── */}
          <div className="compra-card compra-card--presencial">
            <div className="compra-card-header">
              <div className="compra-card-icon-circle compra-card-icon-circle--presencial">
                {/* Map pin icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="compra-card-title">Presencial</h3>
                <p className="compra-card-via">Santiago Centro</p>
              </div>
            </div>

            <p className="compra-presencial-intro">
              Ven directamente a nuestra óptica con tu receta o realiza el examen visual con nosotros.
            </p>

            <div className="compra-presencial-info">
              <div className="compra-info-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Agustinas 681, oficina 1205, piso 12, Santiago Centro</span>
              </div>
              <div className="compra-info-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Lunes a viernes, 10:30 a 16:30 hrs</span>
              </div>
              <div className="compra-info-row compra-info-row--cita">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Debes agendar tu cita previamente</span>
              </div>
            </div>

            <ul className="compra-beneficios">
              {beneficiosPresencial.map((b, i) => (
                <li key={i} className="compra-beneficio-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Mapa embed */}
            <div className="compra-mapa">
              <iframe
                title="Ubicación Óptica GYD"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831.6!2d-70.6506!3d-33.4395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c59f4a2b8b0d%3A0x0!2sAgustinas%20681%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="compra-pago">
          <p className="compra-pago-label">Métodos de pago aceptados</p>
          <div className="compra-pago-methods">
            <div className="compra-pago-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              <span>Tarjeta de débito</span>
            </div>
            <div className="compra-pago-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round">
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
                <circle cx="18" cy="16" r="1.5" fill="#1f2937" opacity="0.3" />
                <circle cx="15" cy="16" r="1.5" fill="#1f2937" opacity="0.2" />
              </svg>
              <span>Tarjeta de crédito</span>
            </div>
            <div className="compra-pago-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4M14 10v4M16 10v4" />
                <circle cx="12" cy="12" r="1" fill="#1f2937" />
              </svg>
              <span>Webpay</span>
            </div>
            <div className="compra-pago-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Pago en tienda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
