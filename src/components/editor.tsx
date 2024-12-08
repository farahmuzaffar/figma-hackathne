import Image from "next/image";


export default function Editor() {
  return (
    <div className="container mx-auto px-[30px] py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">EDITOR'S PICK</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {/* Men's Category */}
        <div className="relative group overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/edit1.png"
              alt="Men's Fashion"
              fill
              className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
            />
           
          </div>
        </div>

        {/* Women's Category */}
        <div className="relative group overflow-hidden">
          <div className="relative h-96">
            <Image
              src="/edit2.png"
              alt="Women's Fashion"
              fill
              className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
            />
            
          </div>
        </div>

        {/* Accessories & Kids Grid */}
        <div className="grid grid-rows-2 gap-[16px]">
          {/* Accessories */}
          <div className="relative group overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/edit3.png"
                alt="Accessories"
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                
              />
              
            </div>
          </div>

          {/* Kids */}
          <div className="relative group overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/edit4.png"
                alt="Kids Fashion"
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


