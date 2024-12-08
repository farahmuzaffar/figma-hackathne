import Editor from "@/components/editor"; 
import FashionHero from "@/components/fashion-hero";
import FeaturedPosts from "@/components/featured-posts";
import NeuralBanner from "@/components/neural-banner";
import { ProductGrid } from "@/components/product-grid"
import ProductHero from "@/components/product-hero";
import Footer from "@/components/footer"; 


export default function Home() {
  return (
    <>
      {/* FasionHero Section */}
      <FashionHero />

      {/* Editor's Pick Section */}
      <Editor />

      {/* ProductGrid */}
      <ProductGrid />

      {/* ProductHero */}
      <ProductHero />

      {/* NeuralBanner */}
      <NeuralBanner/>

      {/* FeaturedPosts */}
      <FeaturedPosts/>

       {/* Footer */}
       <Footer/>

     

      
      
    </>
  );
}

