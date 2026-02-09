import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Nosotros from "./components/nosotros/Nosotros"
import Lentes from "./components/lentes/Lentes"
import Compra from "./components/compra/Compra"
import Resenas from "./components/resenas/Resenas"
import Ubicacion from "./components/ubicacion/Ubicacion"
import Footer from "./components/footer/Footer"
import Flotantes from "./components/flotantes/Flotantes"

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <Nosotros />
        <Lentes />
        <Compra />
        <Resenas />
        <Ubicacion />
      </main>
      <Footer />
      <Flotantes />
    </>
  )
}