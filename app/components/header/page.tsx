"use client"

import React from "react"
import Image from "next/image"

export default function Header() {
	return (
		<header className="header relative overflow-hidden bg-white h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px]">
			{/* Partículas izquierdas - ocultas en móvil */}
			<div className="hidden sm:block absolute left-8 md:left-12 top-4 md:top-6 w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/40 pointer-events-none" aria-hidden></div>
			<div className="hidden sm:block absolute left-12 md:left-16 top-8 md:top-12 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-600/30 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute left-10 top-16 w-4 h-4 rounded-full bg-red-500/25 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute left-14 top-22 w-2.5 h-2.5 rounded-full bg-red-700/35 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute left-8 top-28 w-3.5 h-3.5 rounded-full bg-red-600/20 pointer-events-none" aria-hidden></div>
			
			{/* Partículas derechas - ocultas en móvil */}
			<div className="hidden sm:block absolute right-8 md:right-12 bottom-4 md:bottom-6 w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/40 pointer-events-none" aria-hidden></div>
			<div className="hidden sm:block absolute right-12 md:right-16 bottom-8 md:bottom-12 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-600/30 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute right-10 bottom-16 w-4 h-4 rounded-full bg-red-500/25 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute right-14 bottom-22 w-2.5 h-2.5 rounded-full bg-red-700/35 pointer-events-none" aria-hidden></div>
			<div className="hidden md:block absolute right-8 bottom-28 w-3.5 h-3.5 rounded-full bg-red-600/20 pointer-events-none" aria-hidden></div>

			<div className="left-curve absolute left-0 top-0 h-full w-24 sm:w-32 md:w-40 pointer-events-none" aria-hidden>
				<svg viewBox="0 0 400 200" preserveAspectRatio="xMinYMin meet" className="w-full h-full">
					<defs>
						<linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
							<stop offset="0%" stopColor="#ff3b3b" />
							<stop offset="100%" stopColor="#c70000" />
						</linearGradient>
					</defs>
					<path d="M0,0 C80,40 40,140 0,180 L0,0 Z" fill="url(#g1)" />
					<path d="M0,10 C60,45 35,130 0,165 L20,165 C55,120 75,60 20,15 L0,10 Z" fill="#fff" opacity="0.95" />
				</svg>
			</div>

			<div className="right-curve absolute right-0 bottom-0 h-full w-32 sm:w-40 md:w-48 pointer-events-none" aria-hidden>
				<svg viewBox="0 0 400 200" preserveAspectRatio="xMaxYMax meet" className="w-full h-full">
					<defs>
						<linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
							<stop offset="0%" stopColor="#ff3b3b" />
							<stop offset="100%" stopColor="#c70000" />
						</linearGradient>
					</defs>
					<path d="M400,200 C320,160 360,60 400,20 L400,200 Z" fill="url(#g2)" />
					<path d="M400,190 C345,155 365,80 400,35 L380,35 C345,75 325,135 380,180 L400,190 Z" fill="#fff" opacity="0.95" />
				</svg>
			</div>

			<div className="inner relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-full flex items-center justify-between gap-2 sm:gap-4">
				<div className="brand flex items-center flex-shrink-0">
					<Image 
						src="/images/logo-gyd.png" 
						alt="Óptica GYD Logo" 
						width={480}
						height={140}
						priority
						className="h-16 sm:h-20 md:h-28 lg:h-32 xl:h-36 w-auto object-contain"
					/>
				</div>

				<nav className="nav hidden lg:flex gap-4 xl:gap-8 text-sm lg:text-base text-gray-700" aria-label="Main navigation">
					<a className="link hover:text-gray-900 transition-colors" href="#">Inicio</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Productos</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Servicios</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Contacto</a>
				</nav>

				<div className="actions flex items-center gap-2">
					<button className="cta bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md hover:bg-red-700 transition-colors whitespace-nowrap">Agendar</button>
					{/* Botón de menú hamburguesa para móvil/tablet */}
					<button className="lg:hidden text-gray-700 hover:text-gray-900 p-2" aria-label="Menú">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</header>
	)
}

