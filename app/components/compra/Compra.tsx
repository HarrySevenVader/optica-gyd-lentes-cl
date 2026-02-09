'use client'

import React, { useEffect, useRef, useState } from 'react'
import './compra.css'

const pasos = [
  {
    numero: 1,
    titulo: 'Elige tus lentes',
    descripcion: 'Visita nuestra tienda en Santiago o explora nuestro catálogo online si estás en regiones. Encuentra el modelo perfecto para ti.',
    detalle_presencial: 'En tienda',
    detalle_online: 'Vía online',
    icon: (
      <svg className="compra-step-icon" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
        <path d="M18 24h20M18 30h14M18 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="38" y="28" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M40 32h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="24" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="30" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="36" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    numero: 2,
    titulo: '¿Lentes con receta?',
    descripcion: 'Si necesitas cristales graduados, te realizamos un examen de vista en nuestra tienda para asegurar la medida perfecta. Para compras online, solo envíanos tu receta.',
    detalle_presencial: 'Examen en tienda',
    detalle_online: 'Envía tu receta',
    icon: (
      <svg className="compra-step-icon" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
        <circle cx="28" cy="26" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="28" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="26" r="1.5" fill="currentColor" />
        <path d="M12 26c4-10 16-14 20-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <path d="M44 26c-4 10-16 14-20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <rect x="20" y="40" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 43h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    numero: 3,
    titulo: 'Confirma y paga',
    descripcion: 'Con tu modelo elegido, confirma tu pedido. Paga en tienda o de forma segura online con Webpay (tarjeta de débito o crédito).',
    detalle_presencial: 'Pago en tienda',
    detalle_online: 'Webpay online',
    icon: (
      <svg className="compra-step-icon" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
        <rect x="12" y="18" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 25h32" stroke="currentColor" strokeWidth="2" />
        <rect x="16" y="30" width="10" height="4" rx="1" fill="currentColor" opacity="0.15" />
        <circle cx="38" cy="35" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="33" cy="35" r="2" fill="currentColor" opacity="0.2" />
        <path d="M26 14l2-4 2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M28 10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    numero: 4,
    titulo: 'Recibe tus lentes',
    descripcion: 'Te avisamos cuando tu pedido esté listo. Retíralo en nuestra tienda en Santiago o recíbelo con despacho directo a tu puerta si estás en regiones.',
    detalle_presencial: 'Retiro en tienda',
    detalle_online: 'Envío a domicilio',
    icon: (
      <svg className="compra-step-icon" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
        <rect x="10" y="22" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M32 28h8a4 4 0 014 4v6H32V28z" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="40" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="38" cy="40" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M36 28l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 28h14" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <path d="M14 31h10" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        <path d="M21 16l-2 6M25 14l-1 8M29 16l0 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </svg>
    ),
  },
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
            Tu camino a unos lentes nuevos, <span className="compra-accent">en 4 simples pasos.</span>
          </h2>
          <p className="compra-subtitle">
            Ya sea que nos visites en Santiago o nos escribas desde cualquier rincón de Chile, el proceso es fácil, transparente y sin complicaciones.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="compra-steps">
          {pasos.map((paso, index) => (
            <div
              key={paso.numero}
              className="compra-step"
            >
              {/* Línea conectora */}
              {index < pasos.length - 1 && (
                <div className="compra-step-connector" aria-hidden="true" />
              )}

              {/* Número del paso */}
              <div className="compra-step-number">
                <span>{paso.numero}</span>
              </div>

              {/* Icono */}
              <div className="compra-step-icon-wrapper">
                {paso.icon}
              </div>

              {/* Contenido */}
              <h3 className="compra-step-titulo">{paso.titulo}</h3>
              <p className="compra-step-desc">{paso.descripcion}</p>
            </div>
          ))}
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
