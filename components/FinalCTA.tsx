import { ArrowRight, Mail, CheckCircle, Sparkles, Calendar } from "lucide-react"

export default function FinalCTA() {
  return (
    <section
      id="hemen-basla"
      className="py-24 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span>Dijital Dönüşüm Başlıyor</span>
          </div>

          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            Dijital Dönüşümünüzü <span className="text-green-100">Başlatın</span>
          </h2>

          <p className="text-xl lg:text-2xl text-green-50 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Binlerce teknik servis işletmesi gibi siz de Masterfix ile iş süreçlerinizi modernleştirin.
            <strong className="text-white"> Ücretsiz demo ve danışmanlık</strong> için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up delay-600">
            <a
              href="https://wa.me/905345740909"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Randevu Al
            </a>
            <button className="btn-outline-white group">
              <Mail className="w-5 h-5 mr-2" />
              Teklif Formu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white animate-fade-in-up delay-800">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <CheckCircle className="w-12 h-12 text-green-200" />
              <span className="text-lg font-semibold">Ücretsiz Demo</span>
              <span className="text-sm text-green-100">30 dakikalık canlı demo</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <CheckCircle className="w-12 h-12 text-green-200" />
              <span className="text-lg font-semibold">Hızlı Kurulum</span>
              <span className="text-sm text-green-100">24 saat içinde aktif</span>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <CheckCircle className="w-12 h-12 text-green-200" />
              <span className="text-lg font-semibold">Sürekli Destek</span>
              <span className="text-sm text-green-100">7/24 teknik destek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
