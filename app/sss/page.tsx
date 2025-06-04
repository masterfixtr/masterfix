import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  HelpCircle,
  Clock,
  CreditCard,
  Smartphone,
  Tablet,
  Laptop,
  Phone,
  Mail,
  MessageCircle,
  Search,
} from "lucide-react"
import FAQSection from "@/components/FAQSection"

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular (S.S.S) - Masterfix Apple Cihaz Onarım",
  description:
    "Apple cihaz onarımı hakkında sık sorulan sorular ve cevapları. iPhone, iPad, MacBook tamiri, garanti, fiyatlar ve servis süreci hakkında detaylı bilgiler.",
  keywords:
    "apple onarım sss, iphone tamir soruları, ipad onarım faq, macbook tamiri sorular, garanti koşulları, onarım fiyatları",
  openGraph: {
    title: "Sık Sorulan Sorular - Masterfix Apple Cihaz Onarım",
    description: "Apple cihaz onarımı hakkında merak ettiğiniz tüm soruların cevapları burada.",
    url: "https://masterfix.tr/sss",
  },
  alternates: {
    canonical: "https://masterfix.tr/sss",
  },
}

const faqCategories = [
  {
    id: "genel",
    title: "Genel Sorular",
    icon: HelpCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    questions: [
      {
        question: "Masterfix nedir ve hangi hizmetleri sunuyorsunuz?",
        answer:
          "Masterfix, Apple cihazlarının profesyonel onarımında uzmanlaşmış bir teknik servis merkezidir. iPhone, iPad ve MacBook cihazları için ekran değişimi, batarya değişimi, anakart onarımı, kamera tamiri ve daha birçok hizmeti sunuyoruz. 10+ yıllık deneyimimiz ve Apple sertifikalı teknisyenlerimizle kaliteli hizmet garantisi veriyoruz.",
      },
      {
        question: "Hangi Apple cihaz modellerini onarıyorsunuz?",
        answer:
          "iPhone 6'dan günümüze kadar tüm iPhone modelleri, iPad mini'den iPad Pro'ya kadar tüm iPad modelleri ve 2015 sonrası tüm MacBook modellerini (Air, Pro, M1, M2 çipli modeller dahil) onarıyoruz. Eski modeller için de parça bulma konusunda yardımcı olabiliriz.",
      },
      {
        question: "Onarım sürecinde verilerim güvende mi?",
        answer:
          "Evet, veri güvenliği bizim için önceliktir. ISO 27001 sertifikalı güvenlik protokollerimiz ile verileriniz 256-bit AES şifreleme ile korunur. Teknisyenlerimiz gizlilik sözleşmesi imzalar ve verilerinize erişim sadece onarım için gerekli olduğunda sağlanır. KVKK uyumlu çalışıyoruz.",
      },
      {
        question: "Onarım sonrası cihazımın su geçirmezlik özelliği korunur mu?",
        answer:
          "Evet, özellikle iPhone ekran değişimlerinde orijinal kalitede contalar ve yapıştırıcılar kullanarak su geçirmezlik özelliğini koruyoruz. Onarım sonrası cihazınız fabrika çıkışı IP67/IP68 standartlarını karşılar. Bu konuda 6 ay garanti veriyoruz.",
      },
    ],
  },
  {
    id: "fiyat-odeme",
    title: "Fiyat ve Ödeme",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    questions: [
      {
        question: "Onarım fiyatları nasıl belirleniyor?",
        answer:
          "Fiyatlarımız cihaz modeli, arıza türü ve kullanılacak parça kalitesine göre belirlenir. Orijinal Apple parçaları premium fiyatlarda, A+ kalite alternatif parçalar ise daha uygun fiyatlardadır. Tüm fiyatlarımız şeffaftır ve gizli maliyet yoktur. Ücretsiz teşhis sonrası kesin fiyat teklifi alırsınız.",
      },
      {
        question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        answer:
          "Nakit, kredi kartı (tüm bankalar), banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz. Kredi kartı ile 12 aya kadar taksit imkanı sunuyoruz. Kurumsal müşteriler için fatura ve çek ödeme seçenekleri de mevcuttur.",
      },
      {
        question: "Teşhis ücreti alıyor musunuz?",
        answer:
          "Hayır, tüm cihazlar için teşhis tamamen ücretsizdir. Uzman teknisyenlerimiz cihazınızı detaylı olarak inceleyip arızayı tespit eder ve size ücretsiz rapor sunar. Onarım yaptırmaya karar vermeseniz bile herhangi bir ücret talep etmiyoruz.",
      },
      {
        question: "Toplu onarım için indirim yapıyor musunuz?",
        answer:
          "Evet, kurumsal müşteriler ve çoklu cihaz onarımları için özel indirimler sunuyoruz. 5+ cihaz için %10, 10+ cihaz için %15 indirim uyguluyoruz. Şirketler için özel anlaşma ve fiyatlandırma seçenekleri mevcuttur.",
      },
    ],
  },
  {
    id: "sure-garanti",
    title: "Süre ve Garanti",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    questions: [
      {
        question: "Onarım ne kadar sürer?",
        answer:
          "Onarım süreleri işlem türüne göre değişir: Ekran değişimi 30-45 dk, batarya değişimi 20-30 dk, kamera onarımı 45-60 dk, anakart onarımı 2-3 gün. Acil durumlar için ekspres servis (ek ücretli) ile süreleri %50 kısaltabiliriz. Çoğu onarımı aynı gün teslim ediyoruz.",
      },
      {
        question: "Garanti süresi ne kadar?",
        answer:
          "Onarım türüne göre garanti süreleri: Ekran değişimi 6 ay, batarya değişimi 12 ay, anakart onarımı 6 ay, diğer parça değişimleri 6-12 ay arası. Garanti kapsamında aynı arıza tekrarlarsa ücretsiz onarım yapıyoruz. Garanti sertifikası veriyoruz.",
      },
      {
        question: "Garanti kapsamında neler var?",
        answer:
          "Garanti kapsamında: Değiştirilen parçanın arızalanması, işçilik hatası, montaj sorunu, performans düşüklüğü yer alır. Garanti kapsamı dışında: Fiziksel darbe, su teması, yanlış kullanım, başka serviste müdahale yer alır. Detaylı garanti şartları sertifikada belirtilir.",
      },
      {
        question: "Garanti süresi içinde başka bir arıza çıkarsa ne olur?",
        answer:
          "Garanti kapsamındaki parça ile ilgili olmayan yeni arızalar için normal ücretlendirme geçerlidir. Ancak mevcut müşterilerimize %20 indirim uyguluyoruz. Garanti kapsamındaki parçanın neden olduğu ikincil arızalar ücretsiz onarılır.",
      },
    ],
  },
  {
    id: "iphone",
    title: "iPhone Onarımı",
    icon: Smartphone,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    questions: [
      {
        question: "iPhone ekranım kırıldı, verilerim kaybolur mu?",
        answer:
          "Hayır, ekran değişiminde verileriniz korunur. Sadece ekran paneli değiştirilir, ana kart ve hafıza birimleri hiç dokunulmaz. Ancak güvenlik için onarım öncesi yedek almanızı öneririz. Ekran tamamen siyahsa bile çoğu durumda veriler kurtarılabilir.",
      },
      {
        question: "iPhone bataryam çok çabuk bitiyor, ne yapmalıyım?",
        answer:
          "Batarya sağlığı %80'in altındaysa değişim öneriyoruz. Önce ücretsiz teşhis ile batarya durumunu kontrol ediyoruz. Yeni batarya ile %40 daha uzun kullanım süresi elde edebilirsiniz. Orijinal kapasiteli bataryalar kullanıyoruz ve 12 ay garanti veriyoruz.",
      },
      {
        question: "iPhone'um suya düştü, kurtarılabilir mi?",
        answer:
          "Su hasarı durumunda hemen kapatın ve bize getirin. İlk 24 saat kritiktir. Özel temizlik ve kurutma işlemleri uyguluyoruz. Başarı oranımız %70-80'dir. Su hasarı onarımı 2-3 gün sürer ve 6 ay garanti kapsamındadır. Teşhis ücretsizdir.",
      },
      {
        question: "iPhone kamerası bulanık çekiyor, neden olabilir?",
        answer:
          "Kamera lensi çizilmesi, kamera modülü arızası veya yazılım sorunu olabilir. Önce yazılımsal çözümler deniyoruz. Donanım sorunu varsa kamera modülü değişimi yapıyoruz. Onarım sonrası tüm kamera özellikleri (4K video, portre modu, gece modu) çalışır.",
      },
    ],
  },
  {
    id: "ipad",
    title: "iPad Onarımı",
    icon: Tablet,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    questions: [
      {
        question: "iPad ekranı değişince Apple Pencil çalışır mı?",
        answer:
          "Evet, orijinal kalitede dokunmatik ekran kullandığımız için Apple Pencil tam uyumlu çalışır. Basınç hassasiyeti, eğim algılama ve palm rejection özellikleri korunur. Onarım sonrası Apple Pencil kalibrasyonu yapıyoruz.",
      },
      {
        question: "iPad bataryası şişti, tehlikeli mi?",
        answer:
          "Şişmiş batarya güvenlik riski oluşturur, hemen kullanmayı bırakın. Acil servis olarak aynı gün batarya değişimi yapıyoruz. Şişmiş batarya güvenli şekilde imha edilir. Yeni batarya ile 10 saate kadar kullanım süresi elde edersiniz.",
      },
      {
        question: "iPad şarj olmuyor, soket mi bozuk?",
        answer:
          "Lightning veya USB-C soket arızası, batarya sorunu veya şarj IC'si arızası olabilir. Ücretsiz teşhis ile kesin nedeni belirliyoruz. Soket değişimi 25-30 dakika sürer ve hızlı şarj özelliği korunur.",
      },
      {
        question: "iPad hoparlöründen ses gelmiyor?",
        answer:
          "Hoparlör arızası, ses IC'si sorunu veya yazılım problemi olabilir. Stereo hoparlör sistemi onarımı yapıyoruz. Onarım sonrası Dolby Atmos ve Spatial Audio özellikleri tam çalışır. 6 ay garanti veriyoruz.",
      },
    ],
  },
  {
    id: "macbook",
    title: "MacBook Onarımı",
    icon: Laptop,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    questions: [
      {
        question: "MacBook klavyesi çalışmıyor, tamiri mümkün mü?",
        answer:
          "Evet, Butterfly ve Magic Keyboard tamiri yapıyoruz. Tek tuş arızasından tam klavye değişimine kadar tüm çözümler mevcuttur. Yeni klavyede backlight, sessiz tuşlar ve spill resistance özellikleri bulunur. 12 ay garanti veriyoruz.",
      },
      {
        question: "MacBook çok ısınıyor ve yavaş çalışıyor?",
        answer:
          "Termal macun yenileme, fan temizliği veya soğutma sistemi onarımı gerekebilir. M1/M2 çipli modeller için özel soğutma çözümleri uyguluyoruz. Onarım sonrası performans testleri yapıyoruz. Isınma sorunu tamamen çözülür.",
      },
      {
        question: "MacBook ekranında çizgiler var, LCD mi bozuk?",
        answer:
          "Retina ekran paneli veya LVDS kablosu arızası olabilir. Detaylı teşhis sonrası kesin nedeni belirliyoruz. Yeni ekranda True Tone, P3 renk gamı ve ProMotion (destekleyen modellerde) özellikleri korunur. 6 ay garanti veriyoruz.",
      },
      {
        question: "MacBook açılmıyor, logic board arızası mı?",
        answer:
          "Logic board (anakart) arızası, güç IC'si sorunu veya batarya problemi olabilir. Mikroişlemci seviyesinde onarım yapıyoruz. M1/M2 çipli modeller dahil tüm MacBook anakartlarını onarıyoruz. Veriler korunur ve 6 ay garanti veriyoruz.",
      },
    ],
  },
]

export default function SSSPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Sık Sorulan Sorular</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S.S.S</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Apple cihaz onarımı hakkında merak ettiğiniz tüm soruların cevapları burada. Aradığınızı bulamazsanız
              bizimle iletişime geçebilirsiniz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Soru ara..."
                  className="pl-10 pr-4 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-gray-600 dark:text-gray-400">Soru & Cevap</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">6</div>
                <div className="text-gray-600 dark:text-gray-400">Kategori</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">7/24</div>
                <div className="text-gray-600 dark:text-gray-400">Destek</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{category.questions.length} soru</p>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <FAQSection key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sorunuz Burada Yok mu?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aradığınız cevabı bulamadıysanız bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Telefon</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">7/24 telefon desteği</p>
              <a href="tel:+902121234567" className="text-blue-600 hover:text-blue-700 font-medium">
                +90 (212) 123 45 67
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Hızlı mesaj desteği</p>
              <a href="https://wa.me/902121234567" className="text-green-600 hover:text-green-700 font-medium">
                WhatsApp'tan Yaz
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
              <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">E-posta</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Detaylı sorular için</p>
              <a href="mailto:info@masterfix.tr" className="text-purple-600 hover:text-purple-700 font-medium">
                info@masterfix.tr
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
