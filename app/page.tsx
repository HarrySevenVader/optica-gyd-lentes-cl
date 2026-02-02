import Header from "./components/header/page"
import Hero from "./components/hero/page"
import Nosotros from "./components/nosotros/page"

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <Nosotros />
      </main>
    </>
  )
}