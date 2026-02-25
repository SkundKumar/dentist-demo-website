"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "24/7 Availability",
      description: "Open around the clock. Dental emergencies\ndon't wait—neither do we.",
      image: "/Dental school🫶🏼🦷.jpg.jpeg",
    },
    {
      title: "5-Star Reputation",
      description: "Trusted by patients. Exceptional care,\nwarm service, real results.",
      image: "/%23dentalschool %23doctor %23dentalcare %23work.jpg.jpeg",
    },
    {
      title: "Women-Owned & Inclusive",
      description: "LGBTQ+ friendly, welcoming to all.\nEvery patient is valued.",
      image: "/🦷.jpg.jpeg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="Why Choose Us"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Excellence in Dental & Skin Care
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            5-star care, 24/7 availability, and a team that treats you like family.
            <br />
            Greater Noida's most trusted clinic.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {index === 2 ? (
                        <>
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-violet-600 font-semibold">LGBTQ+ friendly</span>
                          {", welcoming to all."}
                          <br />
                          Every patient is valued.
                        </>
                      ) : (
                        card.description
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto rounded-lg flex flex-col justify-center items-center gap-2 order-1 md:order-2 md:px-0 px-0">
            <div className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex flex-col justify-start items-start">
              <div className="w-full h-full flex flex-col md:flex-row">
                <div className="flex-1 h-full">
                  <img
                    src={cards[activeCard].image}
                    alt={cards[activeCard].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:flex md:flex-col md:w-40 gap-2 p-3">
                  {cards.map((c, i) => (
                    <img
                      key={i}
                      src={c.image}
                      alt={c.title}
                      className={`w-full h-20 rounded-md object-cover border ${i === activeCard ? 'ring-2 ring-[#322D2B]' : 'opacity-80'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
