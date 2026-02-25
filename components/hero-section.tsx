import { Button } from "@/components/ui/button"
import { FaWhatsapp } from 'react-icons/fa'

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Your Smile. Your Skin. Our Care — 24 Hours a Day.
              </h1>
              <p className="max-w-[506px] text-center text-[#37322f]/80 text-lg font-medium leading-7">
                Greater Noida's trusted dental and skin clinic. Women-owned, 5-star rated, and always open when you need us.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://wa.me/919711278427?text=Hi%20Glowdent%20Medicare%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
              <Button className="h-9 sm:h-10 px-6 sm:px-12 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full font-medium text-sm shadow-none flex items-center gap-2">
                <FaWhatsapp aria-hidden className="w-4 h-4" />
                <span className="hidden xs:inline">Book on WhatsApp</span>
              </Button>
            </a>
            <a href="https://wa.me/919711278427?text=Hi%20Glowdent%20Medicare%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
              <Button className="h-9 sm:h-10 px-6 sm:px-12 bg-white hover:bg-gray-50 text-[#37322f] border border-[#37322f]/20 rounded-full font-medium text-sm shadow-sm flex items-center gap-2">
                <FaWhatsapp aria-hidden className="text-[#25D366] w-4 h-4" />
                <span className="hidden xs:inline">Book on WhatsApp</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
