'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import './resenas.css'

/*
  ============================================================
  📝 INSTRUCCIONES PARA EDITAR LAS RESEÑAS:
  
  Cada reseña tiene estos campos que debes modificar:
  
  - foto: Ruta a la foto de perfil del cliente (coloca las fotos en /public/images/resenas/)
         Si no tienes foto, deja null y se mostrará la inicial del nombre.
  - nombre: Nombre real del cliente
  - estrellas: Calificación de 1 a 5
  - texto: Texto de la reseña copiado de Google
  - fecha: Fecha aproximada de la reseña
  
  ============================================================
*/

const resenas = [
  // ========== RESEÑA 1 - MODIFICAR AQUÍ ==========
  {
    foto: null,                        // Cambiar a: '/images/resenas/cliente1.jpg' si tienes foto
    nombre: 'Claudio Cortés',          // ← Cambiar nombre del cliente
    color: '#7c3aed',                  // ← Color morado para el avatar
    estrellas: 5,                      // ← Cambiar calificación (1-5)
    texto: 'Excelente servicio, muy amables en la atención, y sobre el producto excelente calidad y muy lindo, el envío a regiones muy rápido y lo envían súper bien protegida, y lo principal los precios, muy económicos los recomiendo 1000%',
    fecha: 'Hace 2 meses',
    enlace: 'https://maps.app.goo.gl/Ua1uKQwhz61mh4tB6',  // ← Link a la reseña en Google Maps
  },
  // ========== RESEÑA 2 - MODIFICAR AQUÍ ==========
  {
    foto: '/images/resenas/D.png',                        // Cambiar a: '/images/resenas/cliente2.jpg' si tienes foto
    nombre: 'Daniela C Marín Latorre',
    color: '',
    estrellas: 5,
    texto: 'RECOMENDADISIMOS! Vayan a la segura, servicio 5 estrellas, la calidad de los lentes buenisima. Me los tuvieron el mismo día fuí y eso que era sábado. Tienen excelentes precios, el mejor lugar para sacar lentes. Te atienden muy bien:) si quieren lentes buenos, bonitos y baratos, este es el lugar!',
    fecha: 'Hace 3 meses',
    enlace: 'https://maps.app.goo.gl/1scaeyYviNRZ1aaL7',  // ← Pegar aquí el link a la reseña en Google Maps
  },
  // ========== RESEÑA 3 - MODIFICAR AQUÍ ==========
  {
    foto: '/images/resenas/1.png',                        // Cambiar a: '/images/resenas/cliente3.jpg' si tienes foto
    nombre: 'Javiera Soto',
    color: '',
    estrellas: 5,
    texto: 'Segunda vez que compro en la misma óptica con envío a región Muy confiable y seguro Llegaron super bien los lentes',
    fecha: 'Hace 4 meses',
    enlace: 'https://maps.app.goo.gl/vwZBfZfZywP1bHwo8',  // ← Pegar aquí el link a la reseña en Google Maps
  },
  // ========== RESEÑA 4 - MODIFICAR AQUÍ ==========
  {
    foto: '/images/resenas/2.png',                        // Cambiar a: '/images/resenas/cliente4.jpg' si tienes foto
    nombre: 'Tatiana Arce Muñoz',
    color: '',
    estrellas: 5,
    texto: 'Excelente atención y precio, fue rápida la entrega. Puedes llevar tu marco de lente favorito y te cobraran solo por los cristales, a diferencia de otros lugares de mac iver donde te cobraran el valor completo (marco y cristal), aunque lleves los tuyos y te advertiran que si tu marco se rompe deberás pagar por otro marco, extra al valor incial. Así que punto extra por el buen trato, precio justo y honestidad con el cliente 👏🏻🫰🏻',
    fecha: 'Hace 9 meses',
    enlace: 'https://maps.app.goo.gl/u18p4BYrqWRL512b9',  // ← Pegar aquí el link a la reseña en Google Maps
  },
  // ========== RESEÑA 5 - MODIFICAR AQUÍ ==========
  {
    foto: '/images/resenas/3.png',                      // Cambiar a: '/images/resenas/cliente5.jpg' si tienes foto
    nombre: 'Mattias Vilches',
    color: '',
    estrellas: 5,
    texto: 'Soy alguien de región, y el servicio que ofrece la óptica GyD es espectacular, tienen gran variedad de modelos, el pedido que hace uno, con la receta que uno necesita y al mejor precio. Los envíos son bastante rápidos y llegan en perfectas condiciones y la venta en linea es buena, buen trato y muy buen servicio.',
    fecha: 'Hace 6 meses',
    enlace: 'https://maps.app.goo.gl/13ehtd2iPQ771YFeA',  // ← Pegar aquí el link a la reseña en Google Maps
  },
  // ========== RESEÑA 6 - MODIFICAR AQUÍ ==========
  {
    foto: '/images/resenas/4.png',                      // Cambiar a: '/images/resenas/cliente6.jpg' si tienes foto
    nombre: 'isabella heredia',
    color: '',
    estrellas: 5,
    texto: 'Súper, los pedí con envío a Puerto Montt y llegaron en 4 días aprox, la atención superó mis expectativas, son rápidos y muy amables, 100% recomendados.',
    fecha: 'Hace 3 meses',
    enlace: 'https://maps.app.goo.gl/KQ17HDDUyPDNAWSo8',  // ← Pegar aquí el link a la reseña en Google Maps
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="resenas-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`resenas-star ${star <= count ? 'filled' : ''}`}
          viewBox="0 0 20 20"
          fill={star <= count ? '#facc15' : 'none'}
          stroke={star <= count ? '#facc15' : '#d1d5db'}
          strokeWidth="1.5"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function AvatarInicial({ nombre, color }: { nombre: string; color?: string }) {
  const inicial = nombre.charAt(0).toUpperCase()
  return (
    <div
      className="resenas-avatar-inicial"
      style={color ? { background: color } : undefined}
    >
      {inicial}
    </div>
  )
}

export default function Resenas() {
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
      className={`resenas-section ${isVisible ? 'visible' : ''}`}
      id="resenas"
    >
      <div className="resenas-container">
        {/* Header */}
        <div className="resenas-header">
          <div className="resenas-google-badge">
            <svg className="resenas-google-icon" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Reseñas de Google</span>
          </div>
          <h2 className="resenas-title">
            Lo que dicen nuestros <span className="resenas-accent">clientes.</span>
          </h2>
        </div>

        {/* Resumen de calificación Google */}
        <div className="resenas-resumen">
          <div className="resenas-resumen-barras">
            {[
              { estrellas: 5, porcentaje: 95 },
              { estrellas: 4, porcentaje: 3 },
              { estrellas: 3, porcentaje: 1 },
              { estrellas: 2, porcentaje: 0.5 },
              { estrellas: 1, porcentaje: 0.5 },
            ].map((item) => (
              <div className="resenas-resumen-fila" key={item.estrellas}>
                <span className="resenas-resumen-num">{item.estrellas}</span>
                <div className="resenas-resumen-barra-bg">
                  <div
                    className="resenas-resumen-barra-fill"
                    style={{ width: `${item.porcentaje}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="resenas-resumen-nota">
            <span className="resenas-resumen-numero">5,0</span>
            <div className="resenas-resumen-stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} viewBox="0 0 20 20" width="18" height="18" fill="#facc15">
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </div>
            <span className="resenas-resumen-count">239 reseñas</span>
          </div>
        </div>

        {/* Reseñas */}
        <div className="resenas-grid">
          {resenas.map((resena, index) => (
            <article className="resenas-card" key={`${resena.nombre}-${index}`}>
              <div className="resenas-card-header">
                <div className="resenas-avatar">
                  {resena.foto ? (
                    <Image
                      src={resena.foto}
                      alt={resena.nombre}
                      width={44}
                      height={44}
                      className="resenas-avatar-img"
                    />
                  ) : (
                    <AvatarInicial nombre={resena.nombre} color={resena.color || undefined} />
                  )}
                </div>
                <div className="resenas-card-info">
                  <h4 className="resenas-card-nombre">{resena.nombre}</h4>
                  <span className="resenas-card-fecha">{resena.fecha}</span>
                </div>
                {/* Icono Google pequeño */}
                <svg className="resenas-card-google" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <StarRating count={resena.estrellas} />
              <p className="resenas-card-texto">{resena.texto}</p>
              <a
                href={resena.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="resenas-ver-google"
              >
                Ver en Google
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
