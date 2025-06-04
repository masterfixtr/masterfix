import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Gizlilik Politikası | MasterFix Teknik Servis",
  description: "MasterFix gizlilik politikası. Kişisel verilerinizin korunması ve gizliliğiniz hakkında detaylı bilgi alın.",
}

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Gizlilik Politikası</h1>
          <div className="prose dark:prose-invert max-w-none text-lg text-gray-700 dark:text-gray-300 mx-auto">
            <p>MasterFix olarak, ziyaretçilerimizin gizliliğini önemsiyoruz. Kişisel bilgilerinizin güvenliği ve gizliliği bizim için önemlidir. Web sitemizi ziyaret ettiğinizde, iletişim formlarımızı kullandığınızda veya hizmetlerimizden yararlandığınızda paylaştığınız bilgiler yalnızca hizmet sunumu ve iletişim amacıyla kullanılacaktır.</p>
            <ul>
              <li>Kişisel verileriniz üçüncü şahıslarla paylaşılmaz.</li>
              <li>Verileriniz yasal zorunluluklar dışında saklanır ve korunur.</li>
              <li>Çerezler yalnızca site deneyimini iyileştirmek için kullanılır.</li>
              <li>İstediğiniz zaman verilerinizin silinmesini talep edebilirsiniz.</li>
            </ul>
            <p>Daha fazla bilgi veya talepleriniz için <a href="/iletisim" className="text-blue-600 hover:underline">iletişim</a> sayfamızdan bize ulaşabilirsiniz.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
