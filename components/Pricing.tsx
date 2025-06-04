import { Check, X, Star, Wrench } from "lucide-react"

const pricingPlans = [
  {
    name: "Temel",
    description: "Küçük işletmeler için",
    price: "₺299",
    period: "/ay",
    popular: false,
    features: [
      { name: "iPhone Ekran Değişimi", included: true, price: "₺899" },
      { name: "iPhone Batarya Değişimi", included: true, price: "₺399" },
      { name: "iPhone Kamera Onarımı", included: true, price: "₺599" },
      { name: "iPad Ekran Değişimi", included: false },
      { name: "iPad Batarya Değişimi", included: false },
      { name: "MacBook Onarımları", included: false },
      { name: "Su Hasarı Onarımı", included: false },
      { name: "Anakart Onarımı", included: false },
      { name: "Ücretsiz Teşhis", included: true },
      { name: "3 Ay Garanti", included: true },
      { name: "Öncelikli Destek", included: false },
      { name: "Kapıda Servis", included: false },
    ],
    buttonText: "Başlayın",
    buttonClass: "btn btn-outline",
  },
  {
    name: "Profesyonel",
    description: "En popüler seçim",
    price: "₺599",
    period: "/ay",
    popular: true,
    features: [
      { name: "iPhone Ekran Değişimi", included: true, price: "₺799" },
      { name: "iPhone Batarya Değişimi", included: true, price: "₺349" },
      { name: "iPhone Kamera Onarımı", included: true, price: "₺549" },
      { name: "iPad Ekran Değişimi", included: true, price: "₺1.199" },
      { name: "iPad Batarya Değişimi", included: true, price: "₺649" },
      { name: "MacBook Onarımları", included: true, price: "₺1.999" },
      { name: "Su Hasarı Onarımı", included: true, price: "₺699" },
      { name: "Anakart Onarımı", included: true, price: "₺1.399" },
      { name: "Ücretsiz Teşhis", included: true },
      { name: "6 Ay Garanti", included: true },
      { name: "Öncelikli Destek", included: true },
      { name: "Kapıda Servis", included: false },
    ],
    buttonText: "En Popüler",
    buttonClass: "btn btn-primary",
  },
  {
    name: "Premium",
    description: "Tam hizmet paketi",
    price: "₺999",
    period: "/ay",
    popular: false,
    features: [
      { name: "iPhone Ekran Değişimi", included: true, price: "₺699" },
      { name: "iPhone Batarya Değişimi", included: true, price: "₺299" },
      { name: "iPhone Kamera Onarımı", included: true, price: "₺499" },
      { name: "iPad Ekran Değişimi", included: true, price: "₺999" },
      { name: "iPad Batarya Değişimi", included: true, price: "₺549" },
      { name: "MacBook Onarımları", included: true, price: "₺1.699" },
      { name: "Su Hasarı Onarımı", included: true, price: "₺599" },
      { name: "Anakart Onarımı", included: true, price: "₺1.199" },
      { name: "Ücretsiz Teşhis", included: true },
      { name: "12 Ay Garanti", included: true },
      { name: "Öncelikli Destek", included: true },
      { name: "Kapıda Servis", included: true },
    ],
    buttonText: "Premium Seçin",
    buttonClass: "btn btn-secondary",
  },
]

export default function Pricing() {
  return (
    <section id="fiyatlar" className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Fiyatlandırma
            </span>{" "}
            Planları
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Apple cihazlarınız için en uygun onarım paketini seçin. Tüm planlar profesyonel hizmet garantisi ile gelir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-2xl relative ${
                plan.popular ? "border-2 border-primary scale-105" : "border border-base-300"
              } animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="badge badge-primary badge-lg gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    En Popüler
                  </div>
                </div>
              )}

              <div className="card-body p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-base-content/60 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-base-content/60 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between">
                      <div className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-base-content/30 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-base-content" : "text-base-content/50"}>
                          {feature.name}
                        </span>
                      </div>
                      {feature.price && feature.included && (
                        <span className="text-sm font-semibold text-primary">{feature.price}</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="card-actions justify-center mt-6">
                  <button className={`btn w-full ${plan.buttonClass} ${plan.popular ? "btn-lg" : ""}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Ücretsiz Teşhis</h4>
              <p className="text-sm text-base-content/60">Tüm cihazlar için ücretsiz arıza teşhisi</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Garanti</h4>
              <p className="text-sm text-base-content/60">Tüm onarımlar garanti kapsamında</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Uzman Ekip</h4>
              <p className="text-sm text-base-content/60">Sertifikalı teknisyenler</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
