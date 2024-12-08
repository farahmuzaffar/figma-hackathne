"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(0)

  const images = [
   "carousel-1.png",
   "carousel-2.png",
  

  ]

  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="text-xl font-bold" href="/">
            Bandage
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link className="text-sm" href="/">
              Home
            </Link>
            <Link className="text-sm" href="/product-page">
              Shop
            </Link>
            <Link className="text-sm" href="/about">
              About
            </Link>
            <Link className="text-sm" href="/blog">
              Blog
            </Link>
            <Link className="text-sm" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Login / Register</Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm text-muted-foreground">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>&gt;</li>
              <li>
                <Link href="/product-page">Shop</Link>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Images */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={images[selectedImage]}
                alt="Product image"
                className="object-cover"
                fill
                priority
              />
              <button
                onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={image} alt={`Product thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Floating Phone</h1>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {"★★★★☆".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">10 Reviews</span>
            </div>
            <div className="text-2xl font-bold">$1,189.33</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Availability :</span>
              <span className="text-sm text-blue-600">In Stock</span>
            </div>
            <p className="text-muted-foreground">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT
              Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <div className="space-y-2">
              <span className="text-sm font-medium">Colors</span>
              <div className="flex space-x-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`h-6 w-6 rounded-full ${
                      selectedColor === index ? "ring-2 ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button size="lg">Select Options</Button>
              <Button size="icon" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mt-12">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (0)</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">the quick fox jumps over</h3>
                <p className="text-muted-foreground">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-muted-foreground">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
                  RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">the quick fox jumps over</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">the quick fox jumps over the lazy dog</p>
                  <p className="text-muted-foreground">the quick fox jumps over the lazy dog</p>
                  <p className="text-muted-foreground">the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="additional">Additional information content</TabsContent>
          <TabsContent value="reviews">Reviews content</TabsContent>
        </Tabs>

        {/* Bestseller Products */}
        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">BESTSELLER PRODUCTS</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/carousel-item (2)"
                    alt="Product image"
                    className="object-cover"
                    fill
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">Graphic Design</h3>
                  <p className="text-sm text-muted-foreground">English Department</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="text-muted-foreground line-through">$16.48</span>
                    <span className="font-medium text-blue-600">$6.48</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-5">
            <div>
              <h3 className="mb-4 text-xl font-bold">Bandage</h3>
            </div>
            <div>
              <h4 className="mb-4 font-medium">Company Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-medium">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-medium">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-medium">Get In Touch</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 rounded-lg border px-3 py-2 text-sm"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-sm text-muted-foreground">
              Made With Love By Finland All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

