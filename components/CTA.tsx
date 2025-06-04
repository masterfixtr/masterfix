import { ArrowRight, Calendar } from "lucide-react"

export default function CTA() {
  return (
    <section id="baslayalim" className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Cihazınızı Onarıma <span className="text-primary-content/90">Hazır mısınız?</span>
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz Apple cihazlarınızı en kısa sürede onarıp size teslim ediyor. Ücretsiz teşhis için hemen
            iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905345740909"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent btn-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Randevu Al
            </a>
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Ücretsiz Teşhis
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-white/80">
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">✓</span>
              Ücretsiz teşhis
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">✓</span>
              24 saat teslimat
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-2">✓</span>
              12 ay garanti
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
