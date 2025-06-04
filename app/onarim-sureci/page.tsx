import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Play, CheckCircle, Wrench, Shield, Clock, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Onarım Süreci | MasterFix Teknik Servis",
  description: "MasterFix onarım süreci: Adım adım cihaz onarımı, teşhis, parça değişimi, test ve teslimat. Şeffaf ve güvenilir hizmet!",
}

export default function OnarimSureciPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Onarım Süreci</h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            MasterFix'te cihazınızın onarım süreci tamamen şeffaf ve güvenilirdir. Aşağıda adım adım onarım sürecimizi inceleyebilirsiniz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <Play className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Ücretsiz Teşhis</h2>
              <p className="text-gray-600 dark:text-gray-300">Cihazınız uzman teknisyenlerimiz tarafından ücretsiz olarak incelenir ve arıza tespiti yapılır.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <Wrench className="w-10 h-10 text-green-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Onay ve Parça Değişimi</h2>
              <p className="text-gray-600 dark:text-gray-300">Arıza ve fiyat bilgisi size iletilir, onayınız sonrası orijinal parça ile onarım başlatılır.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Test ve Kontrol</h2>
              <p className="text-gray-600 dark:text-gray-300">Onarım sonrası cihazınız tüm fonksiyonlarıyla detaylı şekilde test edilir ve kalite kontrolünden geçer.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
              <Clock className="w-10 h-10 text-purple-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4. Hızlı Teslimat</h2>
              <p className="text-gray-600 dark:text-gray-300">Cihazınız aynı gün veya en kısa sürede size teslim edilir. Tüm süreç boyunca bilgilendirilirsiniz.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://wa.me/905345740909"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp'tan Bilgi Al
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
