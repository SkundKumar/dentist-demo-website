import { Button } from "@/components/ui/button"
import { FaWhatsapp } from 'react-icons/fa'

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-[#37322f] font-semibold text-lg">Glowdent Medicare</div>
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Services</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">About</button>
              <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Contact</button>
            </div>
          </div>
          <a aria-label="Book on WhatsApp" href="https://wa.me/919711278427?text=Hi%20Glowdent%20Medicare%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-[#37322f] hover:bg-[#37322f]/5 flex items-center gap-2">
              <FaWhatsapp aria-hidden className="text-[#25D366] w-4 h-4" />
              <span className="hidden sm:inline">Book on WhatsApp</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
