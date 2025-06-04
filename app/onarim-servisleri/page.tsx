import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Smartphone,
  Tablet,
  Laptop,
  Camera,
  Battery,
  Droplets,
  Cpu,
  Wrench,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Phone,
  Calendar,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Onarım Servisleri - MasterFix | Profesyonel Apple Cihaz Tamiri İzmir",
  description:
    "İzmir'de iPhone, iPad ve MacBook onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı, su hasarı kurtarma. Garantili ve hızlı servis. Aynı gün teslim.",
  keywords:
    "iPhone onarım İzmir, iPad onarım İzmir, MacBook onarım İzmir, ekran değişimi, batarya değişimi, anakart tamiri, su hasarı, kamera değişimi, Apple teknik servis",
  openGraph: {
    title: "MasterFix Onarım Servisleri | Apple Cihaz Tamiri İzmir",
    description: "Profesyonel Apple cihaz onarım hizmetleri. Aynı gün teslim ve 6 ay garanti.",
    type: "website",
    url: "https://masterfix.tr/onarim-servisleri",
    images: [
      {
        url: "/images/onarim-servisleri-og.jpg",
        width: 1200,
        height: 630,
        alt: "MasterFix Onarım Servisleri",
      },
    ],
  },
  alternates: {
    canonical: "https://masterfix.tr/onarim-servisleri",
  },
}

const services = [
  {
    id: 1,
    title: "iPhone Onarım",
    description: "iPhone'unuzun tüm sorunları için kapsamlı onarım hizmetleri",
    icon: <Smartphone className="h-8 w-8" />,
    href: "/iphone-onarim",
    gradient: "from-blue-500 to-blue-600",
    features: ["Ekran Değişimi", "Batarya Değişimi", "Anakart Onarımı", "Su Hasarı Kurtarma"],
    price: "150₺'den başlayan fiyatlar",
    duration: "30-60 dakika",
    warranty: "6 ay garanti",
    image: "/images/iphone-repair.jpg",
  },
  {
    id: 2,
    title: "iPad Onarım",
    description: "iPad'inizin tüm teknik sorunları için profesyonel çözümler",
    icon: <Tablet className="h-8 w-8" />,
    href: "/ipad-onarim",
    gradient: "from-purple-500 to-purple-600",
    features: ["Ekran Tamiri", "Şarj Soketi", "Hoparlör Değişimi", "Dokunmatik Onarımı"],
    price: "200₺'den başlayan fiyatlar",
    duration: "45-90 dakika",
    warranty: "6 ay garanti",
    image: "/images/ipad-repair.jpg",
  },
  {
    id: 3,
    title: "MacBook Onarım",
    description: "MacBook'unuzun donanım ve yazılım sorunları için uzman hizmet",
    icon: <Laptop className="h-8 w-8" />,
    href: "/macbook-onarim",
    gradient: "from-gray-500 to-gray-600",
    features: ["Klavye Değişimi", "Ekran Onarımı", "Anakart Tamiri", "SSD Yükseltme"],
    price: "300₺'den başlayan fiyatlar",
    duration: "2-4 saat",
    warranty: "6 ay garanti",
    image: "/images/macbook-repair.jpg",
  },
  {
    id: 4,
    title: "Ekran Değişimi",
    description: "Kırık, çatlak veya arızalı ekranlar için hızlı değişim hizmeti",
    icon: <Wrench className="h-8 w-8" />,
    href: "/ekran-degisimi",
    gradient: "from-red-500 to-orange-600",
    features: ["Orijinal Ekran", "Hızlı Değişim", "Kalite Garantisi", "Ücretsiz Kontrol"],
    price: "200₺'den başlayan fiyatlar",
    duration: "30-45 dakika",
    warranty: "6 ay garanti",
    image: "/images/screen-replacement.jpg",
  },
  {
    id: 5,
    title: "Batarya Değişimi",
    description: "Performans düşüklüğü ve şarj sorunları için yeni batarya montajı",
    icon: <Battery className="h-8 w-8" />,
    href: "/batarya-degisimi",
    gradient: "from-green-500 to-green-600",
    features: ["Orijinal Batarya", "Uzun Ömürlü", "Hızlı Değişim", "Sağlık Testi"],
    price: "180₺'den başlayan fiyatlar",
    duration: "20-30 dakika",
    warranty: "12 ay garanti",
    image: "/images/battery-replacement.jpg",
  },
  {
    id: 6,
    title: "Kamera Değişimi",
    description: "Ön ve arka kamera sorunları için profesyonel değişim hizmeti",
    icon: <Camera className="h-8 w-8" />,
    href: "/kamera-degisimi",
    gradient: "from-indigo-500 to-indigo-600",
    features: ["Ön Kamera", "Arka Kamera", "Lens Değişimi", "Flaş Onarımı"],
    price: "250₺'den başlayan fiyatlar",
    duration: "30-60 dakika",
    warranty: "6 ay garanti",
    image: "/images/camera-replacement.jpg",
  },
  {
    id: 7,
    title: "Su Hasarı Onarım",
    description: "Sıvı hasarı alan cihazlar için acil müdahale ve kurtarma hizmeti",
    icon: <Droplets className="h-8 w-8" />,
    href: "/su-hasari-onarim",
    gradient: "from-cyan-500 to-blue-600",
    features: ["Acil Müdahale", "Ultrasonik Temizlik", "Veri Kurtarma", "%85 Başarı"],
    price: "300₺'den başlayan fiyatlar",
    duration: "24-48 saat",
    warranty: "3 ay garanti",
    image: "/images/water-damage-repair.jpg",
  },
  {
    id: 8,
    title: "Anakart Onarım",
    description: "Mikroişlemci ve entegre devre sorunları için uzman müdahale",
    icon: <Cpu className="h-8 w-8" />,
    href: "/anakart-onarim",
    gradient: "from-yellow-500 to-orange-600",
    features: ["Mikroişlemci", "IC Değişimi", "BGA Reballing", "Mikroskobik Çalışma"],
    price: "400₺'den başlayan fiyatlar",
    duration: "2-5 gün",
    warranty: "6 ay garanti",
    image: "/images/motherboard-repair.jpg",
  },
]

const whyChooseUs = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Garantili Hizmet",
    description: "Tüm onarımlarda 6-12 ay garanti",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Hızlı Servis",
    description: "Çoğu onarım 1 saat içinde",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Uzman Teknisyen",
    description: "Sertifikalı Apple uzmanları",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Orijinal Parça",
    description: "Sadece kaliteli parçalar",
  },
]

const stats = [
  { number: "10,000+", label: "Mutlu Müşteri" },
  { number: "%98", label: "Başarı Oranı" },
  { number: "5+", label: "Yıl Deneyim" },
  { number: "24/7", label: "Destek" },
]

const businessInfo = {
  name: "MasterFix Teknik Servis",
  description: "Profesyonel Apple cihaz onarım hizmetleri",
  url: "https://masterfix.tr/onarim-servisleri",
  telephone: "+905345740909",
  email: "info@masterfix.tr",
  address: {
    streetAddress: "Atatürk Caddesi No:123",
    addressLocality: "Karşıyaka",
    addressRegion: "İzmir",
    postalCode: "35600",
    addressCountry: "TR",
  },
  geo: {
    latitude: "38.4192",
    longitude: "27.1287",
  },
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "₺₺",
  paymentAccepted: "Cash, Credit Card, EFT",
  currenciesAccepted: "TRY",
  foundingDate: "2018",
  founders: [
    {
      name: "Ahmet Yılmaz",
      jobTitle: "CEO",
    },
  ],
  sameAs: [
    "https://www.facebook.com/masterfixizmir",
    "https://www.instagram.com/masterfixizmir",
    "https://twitter.com/masterfixizmir",
  ],
  areaServed: {
    type: "City",
    name: "İzmir",
  },
  serviceArea: ["Karşıyaka", "Bornova", "Konak", "Bayraklı", "Çiğli"],
  aggregateRating: {
    ratingValue: "4.8",
    ratingCount: "356",
    bestRating: "5",
    worstRating: "1",
  },
  reviews: [
    {
      author: "Mehmet K.",
      datePublished: "2023-05-15",
      reviewBody: "iPhone'umun ekranını çok hızlı ve profesyonel bir şekilde değiştirdiler. Kesinlikle tavsiye ederim!",
      reviewRating: {
        ratingValue: "5",
      },
    },
    {
      author: "Ayşe T.",
      datePublished: "2023-04-22",
      reviewBody: "MacBook'umun batarya sorununu aynı gün çözdüler. Çok memnun kaldım.",
      reviewRating: {
        ratingValue: "5",
      },
    },
    {
      author: "Ali Y.",
      datePublished: "2023-03-10",
      reviewBody: "iPad'imin su hasarı onarımı için birçok yer dolaştım, sadece burada çözüm bulabildim.",
      reviewRating: {
        ratingValue: "4",
      },
    },
  ],
}

export default function OnarimServisleriPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16" itemScope itemType="https://schema.org/Service">
            <meta itemProp="serviceType" content="Apple Cihaz Onarım Hizmetleri" />
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Profesyonel Servis
            </Badge>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              itemProp="name"
            >
              Onarım Servisleri
            </h1>
            <p
              className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8"
              itemProp="description"
            >
              iPhone, iPad ve MacBook cihazlarınız için kapsamlı onarım hizmetleri. Uzman teknisyenlerimiz, orijinal
              parçalar ve garantili çözümlerle cihazınızı yeniden hayata döndürüyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:from-blue-500 dark:to-indigo-500 px-8 py-6 text-lg"
                asChild
              >
                <a href="tel:+905345740909" itemProp="telephone">
                  <Phone className="mr-2 h-6 w-6" />
                  Hemen Ara: +90 534 574 09 09
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-8 py-6 text-lg"
                asChild
              >
                <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-6 w-6" />
                  Randevu Al
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl overflow-hidden"
                itemScope
                itemType="https://schema.org/Service"
              >
                <meta itemProp="serviceType" content="Apple Cihaz Onarımı" />
                <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    {service.icon}
                    <Badge
                      className="bg-white/20 text-white border-white/30"
                      itemProp="offers"
                      itemScope
                      itemType="https://schema.org/Offer"
                    >
                      <meta itemProp="priceCurrency" content="TRY" />
                      <span itemProp="warranty">{service.warranty}</span>
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm" itemProp="description">
                    {service.description}
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="TRY" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Fiyat:</span>
                      <span className="font-semibold text-green-600" itemProp="priceRange">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Süre:</span>
                      <span className="font-semibold" itemProp="estimatedDuration">
                        {service.duration}
                      </span>
                    </div>
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:from-blue-500 dark:to-indigo-500"
                    asChild
                  >
                    <Link href={service.href} itemProp="url">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Detayları Gör
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us */}
          <Card className="mb-16 rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Neden MasterFix?</CardTitle>
              <CardDescription className="text-lg">Apple cihaz onarımında güvenilir çözüm ortağınız</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-4 rounded-full w-fit mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-16 rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Sıkça Sorulan Sorular</CardTitle>
              <CardDescription className="text-lg">Onarım hizmetlerimiz hakkında merak edilenler</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
                <div itemScope itemType="https://schema.org/Question" className="border-b pb-4">
                  <h4 itemProp="name" className="font-semibold text-lg mb-2">
                    Onarım ne kadar sürer?
                  </h4>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-gray-600 dark:text-gray-300">
                      Çoğu onarım işlemi aynı gün içinde, genellikle 1-2 saat içinde tamamlanır. Karmaşık anakart
                      onarımları veya su hasarı gibi durumlar 1-3 gün sürebilir.
                    </p>
                  </div>
                </div>
                <div itemScope itemType="https://schema.org/Question" className="border-b pb-4">
                  <h4 itemProp="name" className="font-semibold text-lg mb-2">
                    Orijinal parça kullanıyor musunuz?
                  </h4>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-gray-600 dark:text-gray-300">
                      Evet, tüm onarımlarımızda orijinal veya orijinal kalitesinde yedek parçalar kullanıyoruz. Bu
                      sayede cihazınızın performansı ve ömrü maksimum seviyede kalır.
                    </p>
                  </div>
                </div>
                <div itemScope itemType="https://schema.org/Question" className="border-b pb-4">
                  <h4 itemProp="name" className="font-semibold text-lg mb-2">
                    Garanti süresi ne kadar?
                  </h4>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-gray-600 dark:text-gray-300">
                      Tüm onarım hizmetlerimiz için 6 ay garanti sunuyoruz. Batarya değişimi gibi bazı hizmetlerde bu
                      süre 12 aya kadar çıkabilir.
                    </p>
                  </div>
                </div>
                <div itemScope itemType="https://schema.org/Question">
                  <h4 itemProp="name" className="font-semibold text-lg mb-2">
                    Veri kaybı riski var mı?
                  </h4>
                  <div itemScope itemType="https://schema.org/Answer">
                    <p itemProp="text" className="text-gray-600 dark:text-gray-300">
                      Onarım öncesi verilerinizi yedeklemenizi öneririz. Ancak teknisyenlerimiz veri kaybını önlemek
                      için maksimum özen gösterir. Su hasarı gibi kritik durumlarda veri kurtarma hizmeti de sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
            <CardContent className="text-center py-16">
              <h2 className="text-4xl font-bold mb-4">Cihazınızı Profesyonel Ellerde Onarın!</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Uzman teknisyenlerimiz, orijinal parçalar ve garantili hizmetimizle cihazınızı yeniden hayata
                döndürüyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 border-2 border-white hover:bg-blue-50 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:bg-gray-100 dark:text-blue-600 dark:hover:bg-white px-8 py-6 text-lg"
                  asChild
                >
                  <a href="tel:+905345740909">
                    <Phone className="mr-2 h-6 w-6" />
                    +90 534 574 09 09
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-blue-600 px-8 py-6 text-lg"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-6 w-6" />
                    WhatsApp Randevu
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://masterfix.tr/onarim-servisleri",
                url: "https://masterfix.tr/onarim-servisleri",
                name: "Onarım Servisleri - MasterFix | Profesyonel Apple Cihaz Tamiri İzmir",
                description:
                  "İzmir'de iPhone, iPad ve MacBook onarım hizmetleri. Ekran değişimi, batarya değişimi, anakart onarımı, su hasarı kurtarma. Garantili ve hızlı servis.",
                isPartOf: {
                  "@type": "WebSite",
                  "@id": "https://masterfix.tr/#website",
                  url: "https://masterfix.tr",
                  name: "MasterFix Teknik Servis",
                  description: "Profesyonel Apple Cihaz Onarım Hizmetleri",
                  publisher: {
                    "@type": "Organization",
                    "@id": "https://masterfix.tr/#organization",
                    name: "MasterFix Teknik Servis",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://masterfix.tr/logo.png",
                    },
                  },
                  inLanguage: "tr-TR",
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://masterfix.tr/images/onarim-servisleri-og.jpg",
                },
                inLanguage: "tr-TR",
                potentialAction: [
                  {
                    "@type": "ReadAction",
                    target: ["https://masterfix.tr/onarim-servisleri"],
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://masterfix.tr/#organization",
                name: businessInfo.name,
                description: businessInfo.description,
                url: businessInfo.url,
                telephone: businessInfo.telephone,
                email: businessInfo.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: businessInfo.address.streetAddress,
                  addressLocality: businessInfo.address.addressLocality,
                  addressRegion: businessInfo.address.addressRegion,
                  postalCode: businessInfo.address.postalCode,
                  addressCountry: businessInfo.address.addressCountry,
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: businessInfo.geo.latitude,
                  longitude: businessInfo.geo.longitude,
                },
                openingHoursSpecification: businessInfo.openingHours.map((hours) => ({
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: hours.dayOfWeek,
                  opens: hours.opens,
                  closes: hours.closes,
                })),
                priceRange: businessInfo.priceRange,
                paymentAccepted: businessInfo.paymentAccepted,
                currenciesAccepted: businessInfo.currenciesAccepted,
                foundingDate: businessInfo.foundingDate,
                founder: businessInfo.founders.map((founder) => ({
                  "@type": "Person",
                  name: founder.name,
                  jobTitle: founder.jobTitle,
                })),
                sameAs: businessInfo.sameAs,
                areaServed: businessInfo.areaServed,
                serviceArea: businessInfo.serviceArea.map((area) => ({
                  "@type": "City",
                  name: area,
                })),
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: businessInfo.aggregateRating.ratingValue,
                  ratingCount: businessInfo.aggregateRating.ratingCount,
                  bestRating: businessInfo.aggregateRating.bestRating,
                  worstRating: businessInfo.aggregateRating.worstRating,
                },
                review: businessInfo.reviews.map((review) => ({
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: review.author,
                  },
                  datePublished: review.datePublished,
                  reviewBody: review.reviewBody,
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: review.reviewRating.ratingValue,
                  },
                })),
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Onarım Servisleri",
                  itemListElement: services.map((service, index) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: service.title,
                      description: service.description,
                      serviceType: "Apple Cihaz Onarımı",
                      provider: {
                        "@type": "LocalBusiness",
                        "@id": "https://masterfix.tr/#organization",
                      },
                      offers: {
                        "@type": "Offer",
                        priceSpecification: {
                          "@type": "PriceSpecification",
                          priceCurrency: "TRY",
                          description: service.price,
                        },
                        warranty: service.warranty,
                        availability: "https://schema.org/InStock",
                      },
                      url: `https://masterfix.tr${service.href}`,
                    },
                    position: index + 1,
                  })),
                },
                image: [
                  "https://masterfix.tr/images/store-front.jpg",
                  "https://masterfix.tr/images/repair-service.jpg",
                  "https://masterfix.tr/images/technician.jpg",
                ],
                logo: {
                  "@type": "ImageObject",
                  url: "https://masterfix.tr/logo.png",
                  width: "180",
                  height: "60",
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+905345740909",
                    contactType: "customer service",
                    areaServed: "TR",
                    availableLanguage: ["Turkish", "English"],
                  },
                  {
                    "@type": "ContactPoint",
                    telephone: "+902321234567",
                    contactType: "technical support",
                    areaServed: "TR",
                    availableLanguage: "Turkish",
                  },
                ],
                makesOffer: services.map((service) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                  },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Ana Sayfa",
                    item: "https://masterfix.tr",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Onarım Servisleri",
                    item: "https://masterfix.tr/onarim-servisleri",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Onarım ne kadar sürer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Çoğu onarım işlemi aynı gün içinde, genellikle 1-2 saat içinde tamamlanır. Karmaşık anakart onarımları veya su hasarı gibi durumlar 1-3 gün sürebilir.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Orijinal parça kullanıyor musunuz?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Evet, tüm onarımlarımızda orijinal veya orijinal kalitesinde yedek parçalar kullanıyoruz. Bu sayede cihazınızın performansı ve ömrü maksimum seviyede kalır.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Garanti süresi ne kadar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tüm onarım hizmetlerimiz için 6 ay garanti sunuyoruz. Batarya değişimi gibi bazı hizmetlerde bu süre 12 aya kadar çıkabilir.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Veri kaybı riski var mı?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Onarım öncesi verilerinizi yedeklemenizi öneririz. Ancak teknisyenlerimiz veri kaybını önlemek için maksimum özen gösterir. Su hasarı gibi kritik durumlarda veri kurtarma hizmeti de sunuyoruz.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
