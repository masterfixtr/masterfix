import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, CheckCircle, Clock, Shield, Star, Phone, Zap, Award } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Kamera Değişimi - MasterFix | Profesyonel iPhone Kamera Onarım",
  description:
    "iPhone kamera değişimi hizmeti. Ön ve arka kamera onarımı, lens değişimi. Garantili servis, uzman teknisyenler. İzmir Karşıyaka.",
  keywords: "kamera değişimi, iPhone kamera, kamera onarımı, lens değişimi, Apple onarım, İzmir",
}

export default function KameraDegisimiPage() {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Profesyonel Kamera Onarımı",
      description: "Ön ve arka kamera modüllerinin profesyonel onarımı",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Orijinal Parçalar",
      description: "Sadece orijinal kalitede kamera modülleri kullanıyoruz",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hızlı Servis",
      description: "Kamera değişimi işlemi 30-45 dakikada tamamlanır",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Kalite Garantisi",
      description: "Tüm kamera onarımlarında 6 ay garanti",
    },
  ]

  const services = [
    "iPhone Arka Kamera Değişimi",
    "iPhone Ön Kamera Değişimi",
    "Kamera Lens Değişimi",
    "Flaş Onarımı",
    "Kamera Modülü Temizliği",
    "Odaklama Sorunu Giderme",
    "Kamera Camı Değişimi",
    "Zoom Fonksiyonu Onarımı",
  ]

  const advantages = [
    "4K video kayıt kalitesi korunur",
    "Portre modu tam performansla çalışır",
    "Gece modu fonksiyonu aktif",
    "Optik zoom özelliği korunur",
    "Stabilizasyon sistemi çalışır",
    "Face ID uyumluluğu (ön kamera)",
    "HDR fotoğraf kalitesi",
    "Slow motion video desteği",
  ]

  const models = [
    "iPhone 15 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Plus",
    "iPhone 15",
    "iPhone 14 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Plus",
    "iPhone 14",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13 mini",
    "iPhone 13",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro",
    "iPhone 12 mini",
    "iPhone 12",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone 11",
    "iPhone XS Max",
    "iPhone XS",
    "iPhone XR",
    "iPhone X",
    "iPhone 8 Plus",
    "iPhone 8",
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Kamera Uzmanı
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Kamera Değişimi
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              iPhone kameranızda sorun mu var? Bulanık fotoğraflar mı çekiyor? Profesyonel kamera değişimi hizmeti ile
              cihazınızın fotoğraf kalitesini eski haline getiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara: +90 542 123 45 67
              </Button>
              <Button
                size="lg"
                className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:bg-gray-800 dark:text-green-400 dark:border-green-400 dark:hover:bg-green-600 dark:hover:text-white"
              >
                <Camera className="mr-2 h-5 w-5" />
                Kamera Test Et
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 rounded-xl">
                <CardHeader>
                  <div className="mx-auto bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Camera Services */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Camera className="mr-3 h-6 w-6 text-green-600" />
                  Kamera Onarım Hizmetlerimiz
                </CardTitle>
                <CardDescription>iPhone kamera sorunlarınız için kapsamlı çözümler</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Kamera Değişim Süreci</h4>
                  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>1. Kamera testi ve analiz (10 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>2. Arızalı kamera sökümü (15 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>3. Yeni kamera montajı (15 dk)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>4. Kalibrasyon ve test (10 dk)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camera Advantages */}
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Star className="mr-3 h-6 w-6 text-blue-600" />
                  Kamera Değişimi Avantajları
                </CardTitle>
                <CardDescription>Orijinal kamera kalitesine geri dönüş</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{advantage}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Kamera Sorunları</h4>
                  <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                    <li>• Bulanık veya odaksız fotoğraflar</li>
                    <li>• Kamera açılmıyor</li>
                    <li>• Siyah ekran sorunu</li>
                    <li>• Flaş çalışmıyor</li>
                    <li>• Zoom fonksiyonu bozuk</li>
                    <li>• Kamera camı kırık</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supported Models */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Desteklenen iPhone Modelleri</CardTitle>
              <CardDescription className="text-center">Kamera değişimi yapılan iPhone modelleri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {models.map((model, index) => (
                  <Badge key={index} variant="secondary" className="justify-center py-2">
                    {model}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Detailed Description */}
          <Card className="mb-12 rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl">iPhone Kamera Değişimi Hakkında</CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                iPhone kameranız bulanık fotoğraflar mı çekiyor? Odaklanma sorunu mu yaşıyor? MasterFix olarak,
                profesyonel kamera değişimi hizmeti sunuyoruz. Orijinal kalitede kamera modülleri kullanarak cihazınızın
                fotoğraf kalitesini fabrika ayarlarına getiriyoruz.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Kamera Değişimi Neden Gereklidir?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Düşme Hasarı:</strong> Cihaz düştüğünde kamera modülü zarar görebilir
                </li>
                <li>
                  ✓ <strong>Su Hasarı:</strong> Nem kamera sensörlerine zarar verebilir
                </li>
                <li>
                  ✓ <strong>Doğal Aşınma:</strong> Zamanla kamera kalitesi düşebilir
                </li>
                <li>
                  ✓ <strong>Lens Hasarı:</strong> Kamera camı kırılması odaklama sorununa neden olur
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                MasterFix Kamera Değişimi Avantajları
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>
                  ✓ <strong>Orijinal Kalite:</strong> Apple standartlarında kamera modülleri
                </li>
                <li>
                  ✓ <strong>Hızlı Servis:</strong> 30-45 dakikada tamamlanan işlem
                </li>
                <li>
                  ✓ <strong>Garanti:</strong> 6 ay garanti ile güvenli hizmet
                </li>
                <li>
                  ✓ <strong>Test:</strong> Değişim sonrası kapsamlı kamera testi
                </li>
                <li>
                  ✓ <strong>Kalibrasyon:</strong> Profesyonel kamera kalibrasyonu
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">İşlem Sonrası</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kamera değişimi sonrasında iPhone'unuz fabrika kalitesinde fotoğraf çekmeye başlar. Tüm kamera
                özellikleri (4K video, portre modu, gece modu) tam performansla çalışır.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Kameranızı Yeniden Hayata Döndürün!</h2>
              <p className="text-xl mb-8 opacity-90">Profesyonel kamera değişimi için hemen iletişime geçin</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +90 542 123 45 67
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-green-600"
                  asChild
                >
                  <a href="https://wa.me/905345740909" target="_blank" rel="noopener noreferrer">
                    WhatsApp ile İletişim
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
