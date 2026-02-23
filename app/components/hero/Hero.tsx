'use client'

import { useState, useEffect, useRef } from 'react'
import './hero.css'

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
]

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Controlar reproducción: solo el video activo se reproduce
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.playbackRate = 0.90
        if (index === currentVideoIndex) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    })
  }, [currentVideoIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        // Si llegamos al final, volver al inicio (video 1)
        return nextIndex >= videos.length ? 0 : nextIndex
      })
    }, 10000) // Cambiar video cada 10 segundos

    return () => clearInterval(timer)
  }, [])

  const handleIndicatorClick = (index: number) => {
    setCurrentVideoIndex(index)
  }

  return (
    <section className="hero-container" id="hero">
      {/* Video de fondo */}
      <div className="hero-video-container">
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => {
              videoRefs.current[index] = el
            }}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            preload={index === 0 ? 'auto' : 'none'}
            className={`hero-video ${index === currentVideoIndex ? 'active' : ''}`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="hero-overlay"></div>

      {/* Contenido del Hero */}
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Visión Clara,
            <span className="hero-title-accent"> Estilo Perfecto</span>
          </h1>
          <p className="hero-subtitle">
            Descubre la colección más exclusiva de lentes ópticos y de sol.
            Tecnología de vanguardia y diseños únicos para tu estilo de vida.
          </p>

          {/* Características destacadas */}
          <div className="hero-features">
            <div className="hero-feature">
              <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <span>Envío a Todo Chile</span>
            </div>
            <div className="hero-feature">
              <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Ventas Online y Presencial</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon-badge">100</div>
              <span>Garantía y Reembolso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de video */}
      <div className="hero-indicators">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentVideoIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Video ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel"></div>
        </div>
        <span className="hero-scroll-text">Desliza para explorar</span>
      </div>
    </section>
  )
}
