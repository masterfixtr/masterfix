"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "Onarım ne kadar sürer?",
    answer:
      "Çoğu onarımı 2 saat içinde tamamlıyoruz. Ekran değişimi 30-45 dk, batarya değişimi 20-30 dk sürer. Karmaşık onarımlar için 1-2 gün süre gerekebilir.",
  },
  {
    question: "Garanti süresi ne kadar?",
    answer:
      "Tüm onarımlar için 6-12 ay garanti veriyoruz. Batarya değişimi 12 ay, ekran değişimi 6 ay garanti kapsamındadır. Garanti sertifikası veriyoruz.",
  },
  {
    question: "Orijinal parça kullanıyor musunuz?",
    answer:
      "Evet, mümkün olduğunca orijinal Apple parçaları kullanıyoruz. Alternatif olarak A+ kalite parçalar da sunuyoruz. Hangi parça kullanıldığını size bildiririz.",
  },
  {
    question: "Teşhis ücreti var mı?",
    answer:
      "Hayır, tüm cihazlar için teşhis tamamen ücretsizdir. Cihazınızı getirin, uzman teknisyenlerimiz incelesin ve size ücretsiz rapor sunalım.",
  },
  {
    question: "Verilerim güvende mi?",
    answer:
      "Evet, ISO 27001 sertifikalı güvenlik protokollerimiz ile verileriniz korunur. Teknisyenlerimiz gizlilik sözleşmesi imzalar ve verilerinize sadece gerektiğinde erişir.",
  },
  {
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Nakit, kredi kartı, banka kartı, havale/EFT ve kapıda ödeme kabul ediyoruz. Kredi kartı ile 12 aya kadar taksit imkanı sunuyoruz.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="sss" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Sık Sorulan Sorular</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">S.S.S</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Apple cihaz onarımı hakkında merak ettiğiniz soruların cevapları burada. Daha fazla bilgi için bizimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sorunuz Burada Yok mu?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Aradığınız cevabı bulamadıysanız bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+902121234567" className="btn-primary">
                Hemen Ara
              </a>
              <a href="/sss" className="btn-secondary">
                Tüm S.S.S'leri Gör
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
