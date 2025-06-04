import Header from "@/components/Header"
import Hero from "@/components/Hero"
import RepairServices from "@/components/RepairServices"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <RepairServices />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  )
}

// Replace any visible or linked masterfix.com.tr with masterfix.tr
