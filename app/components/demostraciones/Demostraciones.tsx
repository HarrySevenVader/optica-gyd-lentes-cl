'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import './demostraciones.css'

import lentes1 from '@/app/images/lentes1.png'
import lentes2 from '@/app/images/lentes2.png'
import lentes3 from '@/app/images/lentes3.png'
import lentes4 from '@/app/images/lentes4.png'
import lentes5 from '@/app/images/lentes5.png'
import lentes6 from '@/app/images/lentes6.png'
import lentes7 from '@/app/images/lentes7.png'
import lentes8 from '@/app/images/lentes8.png'
import lentes9 from '@/app/images/lentes9.png'
import lentes10 from '@/app/images/lentes10.png'
import lentes11 from '@/app/images/lentes11.png'
import lentes12 from '@/app/images/lentes12.png'

const fotos = [
  { src: lentes1, alt: 'Lentes modelo 1', filename: 'lentes1.png' },
  { src: lentes2, alt: 'Lentes modelo 2', filename: 'lentes2.png' },
  { src: lentes3, alt: 'Lentes modelo 3', filename: 'lentes3.png' },
  { src: lentes4, alt: 'Lentes modelo 4', filename: 'lentes4.png' },
  { src: lentes5, alt: 'Lentes modelo 5', filename: 'lentes5.png' },
  { src: lentes6, alt: 'Lentes modelo 6', filename: 'lentes6.png' },
  { src: lentes7, alt: 'Lentes modelo 7', filename: 'lentes7.png' },
  { src: lentes8, alt: 'Lentes modelo 8', filename: 'lentes8.png' },
  { src: lentes9, alt: 'Lentes modelo 9', filename: 'lentes9.png' },
  { src: lentes10, alt: 'Lentes modelo 10', filename: 'lentes10.png' },
  { src: lentes11, alt: 'Lentes modelo 11', filename: 'lentes11.png' },
  { src: lentes12, alt: 'Lentes modelo 12', filename: 'lentes12.png' },
]

const catalogos = [
  { label: 'Catálogo Dama', href: 'https://www.canva.com/design/DAFxt4JFjmY/C2WOGSStJr9l0w1xMVdbsw/view?utm_content=DAFxt4JFjmY&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
  { label: 'Catálogo Varón', href: 'https://www.canva.com/design/DAFx0Evy1hE/Uc082m-azmNJp2FLI-1Uvw/view?utm_content=DAFx0Evy1hE&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
  { label: 'Catálogo Clip On', href: 'https://www.canva.com/design/DAFxKM4XE0Y/eweCq5ouqs7dW9LEZavgQA/view?utm_content=DAFxKM4XE0Y&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
]

export default function Demostraciones() {
  const [isVisible, setIsVisible] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Bloquear scroll del body cuando el lightbox está abierto
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  // Navegación con teclado
  useEffect(() => {
    if (lightbox === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox((prev) => prev !== null ? (prev - 1 + fotos.length) % fotos.length : null)
      if (e.key === 'ArrowRight') setLightbox((prev) => prev !== null ? (prev + 1) % fotos.length : null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox])

  const handleDownload = useCallback(async () => {
    if (lightbox === null) return
    const foto = fotos[lightbox]
    const imgSrc = typeof foto.src === 'string' ? foto.src : foto.src.src
    const res = await fetch(imgSrc)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = foto.filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [lightbox])

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
      className={`demo-section ${isVisible ? 'visible' : ''}`}
      id="demostraciones"
    >
      <div className="demo-container">
        {/* Header */}
        <div className="demo-header">
          <span className="demo-badge">Nuestros modelos</span>
          <h2 className="demo-title">
            Encuentra el estilo <span className="demo-accent">perfecto para ti</span>
          </h2>
          <p className="demo-subtitle">
            Explora algunos de nuestros modelos más populares y revisa nuestros catálogos completos.
          </p>
        </div>

        {/* Carrusel infinito - 2 filas */}
        <div className="demo-carousel-wrapper">
          {[0, 1].map((row) => {
            const rowFotos = row === 0 ? fotos.slice(0, 6) : fotos.slice(6)
            return (
              <div key={row} className={`demo-carousel-track ${row === 1 ? 'demo-carousel-track--reverse' : ''}`}>
                {[...rowFotos, ...rowFotos, ...rowFotos].map((foto, i) => {
                  const realIndex = fotos.indexOf(foto)
                  return (
                    <div
                      key={`${row}-${i}`}
                      className="demo-carousel-item"
                      onClick={() => setLightbox(realIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setLightbox(realIndex)}
                    >
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        fill
                        sizes="(max-width: 640px) 70vw, 280px"
                        className="demo-gallery-img"
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        {/* Lightbox - Portal al body */}
        {lightbox !== null && createPortal(
          <div
            className="demo-lightbox"
            onClick={() => setLightbox(null)}
          >
            {/* Toolbar superior */}
            <div className="demo-lightbox-toolbar" onClick={(e) => e.stopPropagation()}>
              <span className="demo-lightbox-counter">{lightbox + 1} / {fotos.length}</span>
              <div className="demo-lightbox-actions">
                <button
                  className="demo-lightbox-btn"
                  onClick={handleDownload}
                  aria-label="Descargar imagen"
                  title="Descargar imagen"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
                <button
                  className="demo-lightbox-btn"
                  onClick={() => setLightbox(null)}
                  aria-label="Cerrar"
                  title="Cerrar"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Flechas de navegación */}
            <button
              className="demo-lightbox-arrow demo-lightbox-arrow--prev"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + fotos.length) % fotos.length) }}
              aria-label="Anterior"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="demo-lightbox-arrow demo-lightbox-arrow--next"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % fotos.length) }}
              aria-label="Siguiente"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="demo-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <Image
                src={fotos[lightbox].src}
                alt={fotos[lightbox].alt}
                width={1200}
                height={1200}
                className="demo-lightbox-img"
                priority
              />
            </div>
          </div>,
          document.body
        )}

        {/* Botones de catálogos */}
        <div className="demo-catalogos">
          {catalogos.map((cat, i) => (
            <a
              key={i}
              href={cat.href}
              className="demo-catalogo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
              </svg>
              {cat.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
