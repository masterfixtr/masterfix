import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Smartphone, Tablet, Laptop, Wrench } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Blog - MasterFix | Apple Cihaz Onarım Rehberleri ve İpuçları",
  description:
    "iPhone, iPad ve MacBook onarım rehberleri, bakım ipuçları ve teknik makaleler. Apple cihazlarınızı daha iyi koruyun ve sorunları önleyin.",
  keywords:
    "iPhone bakım, iPad bakım, MacBook bakım, Apple cihaz rehberi, telefon onarım ipuçları, teknoloji blog, cihaz koruma",
  openGraph: {
    title: "MasterFix Blog - Apple Cihaz Rehberleri",
    description: "Apple cihazlarınız için faydalı rehberler ve ipuçları",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "iPhone Bataryasını Nasıl Korursunuz? 10 Etkili Yöntem",
    excerpt:
      "iPhone bataryanızın ömrünü uzatmak için bilmeniz gereken 10 önemli ipucu. Doğru şarj alışkanlıkları ve batarya sağlığını koruma yöntemleri.",
    category: "iPhone",
    date: "2024-01-15",
    readTime: "5 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "iphone-batarya-koruma-yontemleri",
    tags: ["iPhone", "Batarya", "Bakım"],
  },
  {
    id: 2,
    title: "iPad Ekranı Kırıldığında Ne Yapmalısınız?",
    excerpt:
      "iPad ekranınız kırıldığında panik yapmayın! İlk müdahale adımları, veri koruma yöntemleri ve profesyonel onarım süreci hakkında bilmeniz gerekenler.",
    category: "iPad",
    date: "2024-01-12",
    readTime: "7 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "ipad-ekran-kirilmasi-cozumleri",
    tags: ["iPad", "Ekran", "Onarım"],
  },
  {
    id: 3,
    title: "MacBook Aşırı Isınma Sorunu: Nedenleri ve Çözümleri",
    excerpt:
      "MacBook'unuz aşırı mı ısınıyor? Fan sesi çok mu yüksek? Isınma sorunlarının nedenleri, önleme yöntemleri ve çözüm önerileri bu yazıda.",
    category: "MacBook",
    date: "2024-01-10",
    readTime: "8 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "macbook-asinma-sorunu-cozumleri",
    tags: ["MacBook", "Isınma", "Performans"],
  },
  {
    id: 4,
    title: "iPhone Su Hasarı: İlk Müdahale ve Kurtarma Yöntemleri",
    excerpt:
      "iPhone'unuz suya düştü mü? İlk 24 saat kritik! Su hasarı durumunda yapmanız ve yapmamanız gerekenler, acil müdahale adımları.",
    category: "iPhone",
    date: "2024-01-08",
    readTime: "6 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "iphone-su-hasari-ilk-mudahale",
    tags: ["iPhone", "Su Hasarı", "Acil"],
  },
  {
    id: 5,
    title: "Apple Cihazlarında Veri Yedekleme: Kapsamlı Rehber",
    excerpt:
      "iPhone, iPad ve Mac'inizdeki verilerinizi nasıl güvenli bir şekilde yedeklersiniz? iCloud, iTunes ve üçüncü parti çözümler.",
    category: "Genel",
    date: "2024-01-05",
    readTime: "10 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "apple-cihaz-veri-yedekleme-rehberi",
    tags: ["Veri", "Yedekleme", "Güvenlik"],
  },
  {
    id: 6,
    title: "iPhone Kamera Sorunları ve Çözüm Yolları",
    excerpt:
      "iPhone kameranız bulanık mı çekiyor? Odaklanma sorunu mu var? Kamera sorunlarının nedenleri ve evde deneyebileceğiniz çözümler.",
    category: "iPhone",
    date: "2024-01-03",
    readTime: "5 dk",
    author: "MasterFix Uzmanları",
    image: "/placeholder.svg?height=200&width=400",
    slug: "iphone-kamera-sorunlari-cozumleri",
    tags: ["iPhone", "Kamera", "Sorun Giderme"],
  },
]

const categories = [
  { name: "iPhone", icon: <Smartphone className="h-4 w-4" />, count: 3 },
  { name: "iPad", icon: <Tablet className="h-4 w-4" />, count: 1 },
  { name: "MacBook", icon: <Laptop className="h-4 w-4" />, count: 1 },
  { name: "Genel", icon: <Wrench className="h-4 w-4" />, count: 1 },
]

const popularTags = ["iPhone", "Batarya", "Ekran", "Onarım", "Bakım", "Su Hasarı", "Kamera", "MacBook", "iPad"]

export default function BlogPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-40">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Teknik Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Apple Cihaz Rehberleri
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              iPhone, iPad ve MacBook cihazlarınız için faydalı rehberler, bakım ipuçları ve onarım bilgileri. Uzman
              teknisyenlerimizden profesyonel öneriler.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <Card className="mb-8 overflow-hidden rounded-xl">
                <div className="relative">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Öne Çıkan</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString("tr-TR")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {blogPosts[0].tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden rounded-xl hover:shadow-lg transition-shadow">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{post.category}</Badge>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Oku
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Kategoriler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {category.icon}
                          <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Popüler Etiketler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Bülten</h3>
                  <p className="text-sm mb-4 opacity-90">Yeni rehberler ve ipuçları için bültenimize abone olun.</p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Abone Ol</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MasterFix Blog",
            description: "Apple cihaz onarım rehberleri ve ipuçları",
            url: "https://masterfix.com.tr/blog",
            publisher: {
              "@type": "Organization",
              name: "MasterFix",
              logo: {
                "@type": "ImageObject",
                url: "https://masterfix.com.tr/apple-touch-icon.png",
              },
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: "MasterFix",
              },
            })),
          }),
        }}
      />
    </>
  )
}
