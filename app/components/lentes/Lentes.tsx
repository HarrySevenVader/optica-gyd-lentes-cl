'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import './lentes.css'

const categorias = [
  {
    nombre: 'Lentes con Receta',
    descripcion: 'Monturas modernas con cristales a tu medida.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="22" width="24" height="18" rx="9" stroke="#dc2626" strokeWidth="2.5" />
        <rect x="36" y="22" width="24" height="18" rx="9" stroke="#dc2626" strokeWidth="2.5" />
        <path d="M28 31c2-3 6-3 8 0" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 31c-2-2-2-5 0-5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 31c2-2 2-5 0-5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="31" r="3" fill="#dc2626" opacity="0.2" />
        <circle cx="48" cy="31" r="3" fill="#dc2626" opacity="0.2" />
      </svg>
    ),
  },
  {
    nombre: 'Lentes de Sol',
    descripcion: 'Protección UV con estilo para cada ocasión.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="24" width="24" height="16" rx="8" stroke="#dc2626" strokeWidth="2.5" />
        <rect x="36" y="24" width="24" height="16" rx="8" stroke="#dc2626" strokeWidth="2.5" />
        <path d="M28 32c2-3 6-3 8 0" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 32c-2-2-2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 32c2-2 2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <rect x="6" y="26" width="20" height="12" rx="6" fill="#dc2626" opacity="0.15" />
        <rect x="38" y="26" width="20" height="12" rx="6" fill="#dc2626" opacity="0.15" />
        <circle cx="32" cy="10" r="3" fill="#f59e0b" />
        <path d="M32 3v3M25 6l2 2M39 6l-2 2M22 12h3M39 12h3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    nombre: 'Lentes para Niños',
    descripcion: 'Resistentes, flexibles y con diseños divertidos.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 3" opacity="0.3" />
        <rect x="10" y="26" width="18" height="14" rx="7" stroke="#dc2626" strokeWidth="2.5" />
        <rect x="36" y="26" width="18" height="14" rx="7" stroke="#dc2626" strokeWidth="2.5" />
        <path d="M28 33c2-2.5 6-2.5 8 0" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 33c-2-1.5-2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M54 33c2-1.5 2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 44c3 4 10 6 17 6s14-2 17-6" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="14" cy="21" r="2" fill="#f59e0b" />
        <circle cx="50" cy="21" r="2" fill="#3b82f6" />
        <circle cx="32" cy="18" r="1.5" fill="#10b981" />
      </svg>
    ),
  },
  {
    nombre: 'Lentes Deportivos',
    descripcion: 'Agarre seguro y visión nítida en movimiento.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28c0-6 6-10 14-10h24c8 0 14 4 14 10v4c0 8-8 14-18 14h-16C12 46 6 40 6 32v-4z" stroke="#dc2626" strokeWidth="2.5" />
        <path d="M30 18h4v28h-4" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
        <path d="M6 30c4 2 8 0 10-2" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M58 30c-4 2-8 0-10-2" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M20 13l-3-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 13l3-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 32c4-2 8-2 12 0" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
        <path d="M38 32c4-2 8-2 12 0" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </svg>
    ),
  },
  {
    nombre: 'Lentes Blue Block',
    descripcion: 'Filtro de luz azul para pantallas y trabajo.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="48" height="32" rx="4" stroke="#dc2626" strokeWidth="2.5" />
        <rect x="12" y="20" width="40" height="24" rx="2" fill="#dc2626" opacity="0.06" />
        <rect x="14" y="22" width="16" height="10" rx="1" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
        <line x1="14" y1="36" x2="30" y2="36" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        <line x1="14" y1="40" x2="24" y2="40" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />
        <rect x="34" y="22" width="14" height="18" rx="1" stroke="#dc2626" strokeWidth="1" opacity="0.2" />
        <rect x="20" y="52" width="24" height="3" rx="1.5" fill="#dc2626" opacity="0.15" />
        <path d="M42 8l-4 8M48 10l-3 6M36 10l-2 6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <rect x="4" y="28" width="8" height="12" rx="4" stroke="#dc2626" strokeWidth="2" />
        <rect x="52" y="28" width="8" height="12" rx="4" stroke="#dc2626" strokeWidth="2" />
        <rect x="5.5" y="30" width="5" height="8" rx="2.5" fill="#3b82f6" opacity="0.12" />
        <rect x="53.5" y="30" width="5" height="8" rx="2.5" fill="#3b82f6" opacity="0.12" />
      </svg>
    ),
  },
  {
    nombre: 'Lentes Bifocales',
    descripcion: 'Visión de cerca y lejos en un solo cristal.',
    icon: (
      <svg className="lentes-card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="32" r="14" stroke="#dc2626" strokeWidth="2.5" />
        <circle cx="44" cy="32" r="14" stroke="#dc2626" strokeWidth="2.5" />
        <path d="M34 32c-2-3-4-3-6 0" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M6 32c-2-2-2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M58 32c2-2 2-4 0-4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 38c0 4 3.5 8 8 8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M36 38c0 4 3.5 8 8 8" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <circle cx="20" cy="36" r="6" fill="#dc2626" opacity="0.08" />
        <circle cx="44" cy="36" r="6" fill="#dc2626" opacity="0.08" />
        <text x="17" y="30" fontSize="8" fill="#dc2626" fontWeight="700" opacity="0.5">A</text>
        <text x="41" y="38" fontSize="6" fill="#dc2626" fontWeight="700" opacity="0.4">a</text>
      </svg>
    ),
  },
]

export default function Lentes() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const updateScrollButtons = useCallback(() => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 5)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons)
      updateScrollButtons()
    }
    return () => {
      if (carousel) carousel.removeEventListener('scroll', updateScrollButtons)
    }
  }, [updateScrollButtons])

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = 320
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={sectionRef}
      className={`lentes-section ${isVisible ? 'visible' : ''}`}
      id="lentes"
    >
      {/* Onda superior */}
      <div className="lentes-wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,100 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="lentes-inner">
        <div className="lentes-header">
          <h2 className="lentes-title">Nuestros lentes</h2>
          <p className="lentes-subtitle">
            Descubre nuestra colección pensada para todos los estilos, edades y necesidades.
          </p>
        </div>

        <div className="lentes-carousel-area">
          {/* Flecha izquierda */}
          <button
            className={`lentes-arrow lentes-arrow-left ${!canScrollLeft ? 'hidden-arrow' : ''}`}
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carrusel */}
          <div className="lentes-carousel" ref={carouselRef}>
            {categorias.map((cat, i) => (
              <div className="lentes-card" key={i}>
                <div className="lentes-card-icon-wrapper">{cat.icon}</div>
                <h3 className="lentes-card-nombre">{cat.nombre}</h3>
                <p className="lentes-card-desc">{cat.descripcion}</p>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            className={`lentes-arrow lentes-arrow-right ${!canScrollRight ? 'hidden-arrow' : ''}`}
            onClick={() => scroll('right')}
            aria-label="Siguiente"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="lentes-wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,20 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
