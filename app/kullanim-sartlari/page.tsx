import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Kullanım Şartları | MasterFix Teknik Servis",
  description: "MasterFix web sitesi kullanım şartları. Hizmetlerimizi kullanırken geçerli olan kurallar ve yasal bilgiler.",
}

export default function KullanimSartlariPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Kullanım Şartları</h1>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 mx-auto">
            <p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz. Lütfen dikkatlice okuyunuz.</p>
            <ul>
              <li>Web sitemizde sunulan içerik ve hizmetler bilgilendirme amaçlıdır.</li>
              <li>Hizmetlerimizden yararlanırken yasalara ve genel ahlak kurallarına uymanız gerekmektedir.</li>
              <li>Site içeriğinin izinsiz kopyalanması veya çoğaltılması yasaktır.</li>
              <li>MasterFix, site içeriğinde değişiklik yapma hakkını saklı tutar.</li>
            </ul>
            <p>Detaylı bilgi veya sorularınız için <a href="/iletisim" className="text-blue-600 hover:underline">iletişim</a> sayfamızdan bize ulaşabilirsiniz.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
