'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import './nosotros.css'

import foto1 from '../../images/foto1.jpeg'
import foto2 from '../../images/foto2.jpeg'
import foto3 from '../../images/foto3.jpeg'
import foto4 from '../../images/foto4.jpeg'
import foto5 from '../../images/foto5.jpeg'
import foto6 from '../../images/foto6.jpeg'
import foto7 from '../../images/foto7.jpeg'
import foto8 from '../../images/foto8.jpeg'

const carouselImages = [
  { src: foto1, alt: 'Óptica GYD - Nuestros lentes y equipo 1' },
  { src: foto2, alt: 'Óptica GYD - Nuestros lentes y equipo 2' },
  { src: foto3, alt: 'Óptica GYD - Nuestros lentes y equipo 3' },
  { src: foto4, alt: 'Óptica GYD - Nuestros lentes y equipo 4' },
  { src: foto5, alt: 'Óptica GYD - Nuestros lentes y equipo 5' },
  { src: foto6, alt: 'Óptica GYD - Nuestros lentes y equipo 6' },
  { src: foto7, alt: 'Óptica GYD - Nuestros lentes y equipo 7' },
  { src: foto8, alt: 'Óptica GYD - Nuestros lentes y equipo 8' },
]

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Intersection Observer para animar entrada de sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Avance automático del carrusel - bucle infinito
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
        setIsTransitioning(false)
      }, 500) // Duración del fade-out antes de cambiar
    }, 4000) // Tiempo entre cada slide
  }, [])

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startAutoPlay])

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 400)
    // Reiniciar autoplay al interactuar
    startAutoPlay()
  }, [currentIndex, startAutoPlay])

  return (
    <section ref={sectionRef} className={`nosotros-section ${isVisible ? 'visible' : ''}`} id="nosotros">
      <div className="nosotros-container">
        <div className="nosotros-layout">
          {/* Columna Izquierda: Carrusel de Fotos */}
          <div className="nosotros-image-col">
            <div className="nosotros-carousel-wrapper">
              <div className="nosotros-carousel">
                {/* Imagen de fondo difuminada para rellenar espacios */}
                <div className="nosotros-carousel-bg">
                  <Image
                    src={carouselImages[currentIndex].src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 500px, 42vw"
                    style={{ objectFit: 'cover', filter: 'blur(25px) brightness(0.4)', transform: 'scale(1.2)' }}
                    priority={false}
                    aria-hidden="true"
                  />
                </div>
                {/* Imagen principal visible completa */}
                <div className={`nosotros-carousel-slide ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                  <Image
                    src={carouselImages[currentIndex].src}
                    alt={carouselImages[currentIndex].alt}
                    fill
                    sizes="(max-width: 1024px) 500px, 42vw"
                    style={{ objectFit: 'contain' }}
                    priority={currentIndex === 0}
                    quality={90}
                  />
                </div>
              </div>
              {/* Indicadores / Dots */}
              <div className="nosotros-carousel-dots">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    className={`nosotros-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir a foto ${index + 1}`}
                  />
                ))}
              </div>
              {/* Elementos decorativos */}
              <div className="nosotros-deco-circle"></div>
              <div className="nosotros-deco-dots"></div>
            </div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="nosotros-content-col">
            <h2 className="nosotros-heading">
              Desde <span className="nosotros-accent">2020</span>, llevamos Chile más cerca de una <span className="nosotros-accent">mejor visión.</span>
            </h2>
            
            <p className="nosotros-lead">
              Nacimos como un emprendimiento con una idea simple: que nadie tenga que elegir entre ver bien y pagar justo. 
              Hoy, miles de clientes en todo Chile confían en nosotros para encontrar sus lentes ideales, 
              con la tranquilidad de una compra protegida y sin letra chica.
            </p>

            <div className="nosotros-features-grid">
              {/* Feature 1 - Precios justos */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    <circle cx="12" cy="12" r="9.5" strokeWidth={2} stroke="currentColor" fill="none" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Precios justos + promos reales.</h4>
                  <p className="nosotros-feature-desc">
                    Lentes de calidad a precios accesibles, con descuentos y promociones frecuentes. Aquí tu bolsillo también importa.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Envíos a todo Chile */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Envíos a todo Chile.</h4>
                  <p className="nosotros-feature-desc">
                    De Arica a Punta Arenas. Despachos rápidos y seguros directo a tu puerta, estés donde estés.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Garantía y reembolso */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Garantía real + reembolso.</h4>
                  <p className="nosotros-feature-desc">
                    Si algo no te convence, lo solucionamos. Garantía en todos nuestros productos y política de reembolso sin vueltas.
                  </p>
                </div>
              </div>

              {/* Feature 4 - Atención personalizada */}
              <div className="nosotros-feature-item">
                <div className="nosotros-feature-icon-wrapper">
                  <svg className="nosotros-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="nosotros-feature-content">
                  <h4 className="nosotros-feature-title">Atención real, no un bot.</h4>
                  <p className="nosotros-feature-desc">
                    Te asesoramos personalmente para que elijas los lentes perfectos. Escríbenos y te respondemos de verdad.
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

