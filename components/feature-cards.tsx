export function FeatureCards() {
  const features = [
    {
      title: "Always Open",
      description: "We never close. 24/7 dental and skin care, every day of the year.",
      highlighted: true,
    },
    {
      title: "Your Comfort First",
      description: "Sedation options, gentle techniques, and a team that genuinely cares.",
      highlighted: false,
    },
    {
      title: "Inclusive Care",
      description: "Women-owned and proudly LGBTQ+ friendly. Every patient is family here.",
      highlighted: false,
    },
    {
      title: "Dual Speciality",
      description: "Dental and skin care under one roof. Everything you need, one address.",
      highlighted: false,
    },
  ]

  return (
    <section className="border-t border-[#e0dedb] border-b border-[#e0dedb]">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 flex flex-col gap-2 ${
                // Updated feature card borders to 1px
                feature.highlighted ? "bg-white border border-[#e0dedb] shadow-sm" : "border border-[#e0dedb]/80"
              }`}
            >
              {feature.highlighted && (
                <div className="space-y-1 mb-2">
                  <div className="w-full h-0.5 bg-[#322d2b]/8"></div>
                  <div className="w-32 h-0.5 bg-[#322d2b]"></div>
                </div>
              )}
              <h3 className="text-[#49423d] text-sm font-semibold leading-6">{feature.title}</h3>
              <p className="text-[#605a57] text-sm leading-[22px] whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
