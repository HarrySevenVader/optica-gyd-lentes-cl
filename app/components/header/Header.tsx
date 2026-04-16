"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		handleScroll()
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Cerrar menú al hacer scroll
	useEffect(() => {
		if (menuOpen) {
			const close = () => setMenuOpen(false)
			window.addEventListener("scroll", close)
			return () => window.removeEventListener("scroll", close)
		}
	}, [menuOpen])

	return (
		<header className={`header bg-white transition-all duration-300 ease-in-out ${
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

			<div className="inner relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-full flex items-center justify-between gap-2 sm:gap-4 overflow-hidden">
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
					<a className="link hover:text-gray-900 transition-colors" href="#hero">Inicio</a>
					<a className="link hover:text-gray-900 transition-colors" href="#nosotros">Nosotros</a>
					<a className="link hover:text-gray-900 transition-colors" href="#lentes">Lentes</a>
					<a className="link hover:text-gray-900 transition-colors" href="#compra">Como comprar</a>
					<a className="link hover:text-gray-900 transition-colors" href="#resenas">Reseñas</a>
					<a className="link hover:text-gray-900 transition-colors" href="#ubicacion">Ubicación</a>
				</nav>

				<div className="actions flex items-center gap-2">
					<a 
						href="https://www.instagram.com/opticagyd_cl/" 
						target="_blank" 
						rel="noopener noreferrer"
						className={`cta bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
						isScrolled 
							? "px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm" 
							: "px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
					}`}
					>
						<svg className={`transition-all duration-300 ${isScrolled ? 'w-3.5 h-3.5 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-5 sm:h-5'}`} fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
						</svg>
						Síguenos
					</a>
					{/* Botón de menú hamburguesa para móvil/tablet */}
					<button
						className="lg:hidden text-gray-700 hover:text-gray-900 p-2 relative z-50"
						aria-label="Menú"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Menú móvil desplegable */}
			<div className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)} />
			<nav className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white z-45 shadow-2xl transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 1050 }}>
				<div className="pt-20 px-6 flex flex-col gap-1">
					{[
						{ label: 'Inicio', href: '#hero' },
						{ label: 'Nosotros', href: '#nosotros' },
						{ label: 'Lentes', href: '#lentes' },
						{ label: 'Como comprar', href: '#compra' },
						{ label: 'Reseñas', href: '#resenas' },
						{ label: 'Ubicación', href: '#ubicacion' },
					].map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setMenuOpen(false)}
							className="text-gray-700 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg text-base font-medium transition-colors"
						>
							{item.label}
						</a>
					))}
					<hr className="my-3 border-gray-200" />
					<a
						href="https://www.instagram.com/opticagyd_cl/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-3 rounded-lg text-base font-medium"
						onClick={() => setMenuOpen(false)}
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
						</svg>
						Síguenos en Instagram
					</a>
				</div>
			</nav>
		</header>
	)
}

