export default function ProductHero() {
    return (
      <div className="relative min-h-[600px] bg-[#23856D] overflow-hidden">
        <div className="container mx-auto px-4 py-12 flex flex-col justify-center min-h-[600px]">
          <div className="max-w-2xl relative z-10">
            <p className="text-white/90 tracking-wide mb-4">SUMMER 2020</p>
            <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
              Vita Classic
              <br />
              Product
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-md">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white text-4xl font-bold">$16.48</span>
              <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-3 rounded-md transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-[207px] bottom-[118px] w-[330px] h-[479px] mt-[112px] object-center">
          <img
            src="/vita.jpg"
            alt="Product model"
           
          />
        </div>
      </div>
    )
  }
  
  