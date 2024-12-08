import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="  w-full bg-[#252B42] px-20 py-2">
        <div className="text-white flex items-center gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <p>michelle.rivera@example.com</p>
          </div>
          <span className=" font-bold ml-20 text-sm">
            Follow Us and get a chance to win 80% off
          </span>
          <div className="flex items-center gap-2 ml-auto">
            <p>Follow Us : </p>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-bold text-[#737373] hover:text-[#252B42] transition-colors"
              >
                {item}
              </Link>
              
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* Login/Register Button */}
            <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-[#23A6F0]-200 transition">
              <User size={20} />
              <span className="bg-[#23A6F0] font-bold text-white px-2 py-1 rounded">Login/Register</span>
            </button>

            {/* Additional Icons */}
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <Search size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <ShoppingCart size={20} />  
            </button>
            <button className=" bg-[#2DC071] p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <Heart size={20} 
              />
            
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}


