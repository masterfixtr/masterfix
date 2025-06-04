import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata = {
  title: "İletişim | MasterFix Teknik Servis",
  description: "MasterFix ile iletişime geçin. Telefon, WhatsApp, e-posta ve adres bilgilerimiz burada. Size yardımcı olmaktan memnuniyet duyarız!",
}

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">İletişim</h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
            Bize ulaşmak için aşağıdaki iletişim kanallarını kullanabilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <Phone className="w-10 h-10 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Telefon</h2>
              <a href="tel:+905345740909" className="text-lg font-bold text-blue-600 hover:underline mb-1">+90 534 574 09 09</a>
              <span className="text-gray-500 text-sm">Pzt-Cmt: 09:00 – 19:00</span>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <MessageCircle className="w-10 h-10 text-green-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">WhatsApp</h2>
              <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-green-600 hover:underline mb-1">WhatsApp ile Yaz</a>
              <span className="text-gray-500 text-sm">7/24 mesaj atabilirsiniz</span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <Mail className="w-10 h-10 text-purple-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">E-posta</h2>
              <a href="mailto:info@masterfix.tr" className="text-lg font-bold text-purple-600 hover:underline mb-1">info@masterfix.tr</a>
              <span className="text-gray-500 text-sm">Her zaman e-posta gönderebilirsiniz</span>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg">
              <MapPin className="w-10 h-10 text-orange-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Adres</h2>
              <a href="https://maps.google.com/?q=Kemal+Paşa+Cd.+Altınhan+İşhanı+Apt.147+Kat-2/204+35600+Karşıyaka+İzmir" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-orange-600 hover:underline mb-1">
                Kemal Paşa Cd., Altınhan İşhanı Apt.147 Kat-2/204, 35600 Karşıyaka/İzmir
              </a>
              <span className="text-gray-500 text-sm">Google Maps'te görüntüle</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8234567890123!2d27.1234567!3d38.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a0e7c5e5%3A0x5c5c5c5c5c5c5c5c!2sKemal%20Pa%C5%9Fa%20Cd.%2C%20Alt%C4%B1nhan%20%C4%B0%C5%9Fhan%C4%B1%20Apt.147%20Kat-2%2F204%2C%2035600%20Kar%C5%9F%C4%B1yaka%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
