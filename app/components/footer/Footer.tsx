'use client'

import React from 'react'
import './footer.css'
import { businessConfig, contactConfig } from '@/app/lib/siteConfig'

/*
  ============================================================
  📝 INSTRUCCIONES:

  - LINKTREE_URL: Pegar aquí tu enlace de Linktree
  - Redes sociales: Modificar los enlaces en la sección de redes
  - Secciones del sitio: Se enlazan automáticamente con los IDs de cada sección

  ============================================================
*/

// ← PEGAR AQUÍ tu enlace de Linktree
const LINKTREE_URL = ''

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna 1 - Marca */}
          <div className="footer-brand">
            {/* Logo GYD en blanco */}
            <div className="footer-logo">
              <svg viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="23" fontFamily="Arial, Helvetica, sans-serif" fontSize="24" fontWeight="800" fill="#ffffff" letterSpacing="2">ÓPTICA GYD</text>
              </svg>
            </div>
            <p className="footer-desc">
              Óptica GYD — Lentes de calidad a precios justos. Emprendimiento 100% chileno desde 2020.
            </p>
            {/* Redes sociales */}
            <div className="footer-social">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/opticagyd_cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/OPTICA.GYD?mibextid=2JQ9oc"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent('Hola, vi la pagina de Optica GYD y quiero mas informacion :)')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 - Navegación */}
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#lentes">Lentes</a></li>
              <li><a href="#compra">Cómo comprar</a></li>
              <li><a href="#resenas">Reseñas</a></li>
              <li><a href="#ubicacion">Ubicación</a></li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li>
                {/*<a href="tel:+56934293740">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Gustavo: +56 9 3429 3740
                </a>*/}
              </li>
              <li>
                <a href={`tel:${contactConfig.phoneE164}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Atencion al cliente: {contactConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href="#ubicacion">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {businessConfig.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Catálogos + Linktree */}
          <div className="footer-col">
            <h4>Catálogos</h4>
            <ul className="footer-links">
              <li><a href="https://www.canva.com/design/DAFxt4JFjmY/C2WOGSStJr9l0w1xMVdbsw/view?utm_content=DAFxt4JFjmY&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">Catálogo Dama</a></li>
              <li><a href="https://canva.link/catalogovarongyd" target="_blank" rel="noopener noreferrer">Catálogo Varón</a></li>
              <li><a href="https://www.canva.com/design/DAFxKM4XE0Y/eweCq5ouqs7dW9LEZavgQA/view?utm_content=DAFxKM4XE0Y&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noopener noreferrer">Catálogo Clip On</a></li>
              <li><a href="https://canva.link/rbkfije7tenafmh" target="_blank" rel="noopener noreferrer">Catálogo Infantil</a></li>
            </ul>

            {LINKTREE_URL && (
              <a
                href={LINKTREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-linktree"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08 1.137.71 2.03 1.665 2.598a3.09 3.09 0 002.382.324 3.006 3.006 0 001.907-1.46c.32-.567.398-1.215.317-1.863-.082-.648-.404-1.216-.888-1.62l-1.503-1.297 2.475-.002.002-2.542H8.67l3.555-3.533-1.796-1.8-3.57 3.558V4.036H4.31v4.399L.737 4.893l-1.8 1.8 3.57 3.546H0v2.542h2.432L.93 14.085c-.486.405-.808.972-.888 1.62-.082.649 0 1.296.317 1.863A3.006 3.006 0 002.266 19.027a3.09 3.09 0 002.382-.324c.955-.568 1.585-1.461 1.665-2.598 0-.162 0-.323-.08-.486l1.77-1.704 1.77 1.704-.08.486c.08 1.137.71 2.03 1.665 2.598a3.09 3.09 0 002.382.324 3.006 3.006 0 001.907-1.46c.32-.567.398-1.215.317-1.863-.082-.648-.404-1.216-.888-1.62l-1.503-1.297 2.475-.002.002-2.542h-2.553l3.555-3.533-1.796-1.8-3.57 3.558V4.036h-2.55v4.399l-3.574-3.442-1.8 1.8 3.57 3.546h-2.5v2.542h2.432l-1.503 1.297z" />
                </svg>
                Ver todo en Linktree
              </a>
            )}
          </div>
        </div>

        {/* Barra inferior */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Óptica GYD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
