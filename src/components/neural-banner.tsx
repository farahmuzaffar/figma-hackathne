import { Button } from "@/components/ui/button"

export default function NeuralBanner() {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[500px] w-full">
          <img
            alt="Lifestyle photo showing people in plaid clothing"
            className="object-cover w-full h-full rounded-lg"
            src="/neural.jpg"
          />
        </div>
        <div className="space-y-6 px-4 lg:px-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            SUMMER 2020
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Part of the Neural Universe
          </h1>
          <p className="text-xl text-gray-600">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              BUY NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-emerald-500 border-emerald-500 hover:bg-emerald-50"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

