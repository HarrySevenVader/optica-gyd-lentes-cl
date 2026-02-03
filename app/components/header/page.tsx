"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			// Activar el estado "scrolled" cuando el usuario baja más de 50px
			setIsScrolled(window.scrollY > 50)
		}

		// Verificar el estado inicial
		handleScroll()

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header className={`header overflow-hidden bg-white transition-all duration-300 ease-in-out ${
			isScrolled 
				? "h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px] shadow-lg" 
				: "h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px]"
		}`}>
			{/* Partículas izquierdas - ocultas en móvil y cuando se hace scroll */}
			<div className={`hidden sm:block absolute left-8 md:left-12 w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/40 pointer-events-none transition-all duration-500 ${isScrolled ? 'opacity-0 scale-50 top-2' : 'opacity-100 scale-100 top-4 md:top-6'}`} aria-hidden></div>
			<div className={`hidden sm:block absolute left-12 md:left-16 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-600/30 pointer-events-none transition-all duration-500 delay-75 ${isScrolled ? 'opacity-0 scale-50 top-4' : 'opacity-100 scale-100 top-8 md:top-12'}`} aria-hidden></div>
			<div className={`hidden md:block absolute left-10 w-4 h-4 rounded-full bg-red-500/25 pointer-events-none transition-all duration-500 delay-100 ${isScrolled ? 'opacity-0 scale-50 top-8' : 'opacity-100 scale-100 top-16'}`} aria-hidden></div>
			<div className={`hidden md:block absolute left-14 w-2.5 h-2.5 rounded-full bg-red-700/35 pointer-events-none transition-all duration-500 delay-150 ${isScrolled ? 'opacity-0 scale-50 top-10' : 'opacity-100 scale-100 top-22'}`} aria-hidden></div>
			<div className={`hidden md:block absolute left-8 w-3.5 h-3.5 rounded-full bg-red-600/20 pointer-events-none transition-all duration-500 delay-200 ${isScrolled ? 'opacity-0 scale-50 top-12' : 'opacity-100 scale-100 top-28'}`} aria-hidden></div>
			
			{/* Partículas derechas - ocultas en móvil y cuando se hace scroll */}
			<div className={`hidden sm:block absolute right-8 md:right-12 w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/40 pointer-events-none transition-all duration-500 ${isScrolled ? 'opacity-0 scale-50 bottom-2' : 'opacity-100 scale-100 bottom-4 md:bottom-6'}`} aria-hidden></div>
			<div className={`hidden sm:block absolute right-12 md:right-16 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-600/30 pointer-events-none transition-all duration-500 delay-75 ${isScrolled ? 'opacity-0 scale-50 bottom-4' : 'opacity-100 scale-100 bottom-8 md:bottom-12'}`} aria-hidden></div>
			<div className={`hidden md:block absolute right-10 w-4 h-4 rounded-full bg-red-500/25 pointer-events-none transition-all duration-500 delay-100 ${isScrolled ? 'opacity-0 scale-50 bottom-8' : 'opacity-100 scale-100 bottom-16'}`} aria-hidden></div>
			<div className={`hidden md:block absolute right-14 w-2.5 h-2.5 rounded-full bg-red-700/35 pointer-events-none transition-all duration-500 delay-150 ${isScrolled ? 'opacity-0 scale-50 bottom-10' : 'opacity-100 scale-100 bottom-22'}`} aria-hidden></div>
			<div className={`hidden md:block absolute right-8 w-3.5 h-3.5 rounded-full bg-red-600/20 pointer-events-none transition-all duration-500 delay-200 ${isScrolled ? 'opacity-0 scale-50 bottom-12' : 'opacity-100 scale-100 bottom-28'}`} aria-hidden></div>

			<div className={`left-curve absolute left-0 top-0 h-full pointer-events-none transition-all duration-300 ${isScrolled ? 'w-16 sm:w-20 md:w-24 opacity-70' : 'w-24 sm:w-32 md:w-40'}`} aria-hidden>
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

			<div className={`right-curve absolute right-0 bottom-0 h-full pointer-events-none transition-all duration-300 ${isScrolled ? 'w-20 sm:w-24 md:w-28 opacity-70' : 'w-32 sm:w-40 md:w-48'}`} aria-hidden>
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
						className={`w-auto object-contain transition-all duration-300 ease-in-out ${
							isScrolled 
								? "h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18" 
								: "h-16 sm:h-20 md:h-28 lg:h-32 xl:h-36"
						}`}
					/>
				</div>

				<nav className="nav hidden lg:flex gap-4 xl:gap-8 text-sm lg:text-base text-gray-700" aria-label="Main navigation">
					<a className="link hover:text-gray-900 transition-colors" href="#">Inicio</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Somos</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Lentes</a>
					<a className="link hover:text-gray-900 transition-colors" href="#">Contacto</a>
				</nav>

				<div className="actions flex items-center gap-2">
					<button className={`cta bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 whitespace-nowrap ${
						isScrolled 
							? "px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm" 
							: "px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
					}`}>Agendar</button>
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

