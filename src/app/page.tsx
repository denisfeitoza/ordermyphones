import Header from "@/components/header";
import Hero from "@/components/hero";
import Expertise from "@/components/expertise";
import PartnerBrands from "@/components/partner-brands";
import FeaturedProducts from "@/components/featured-products";
import Clients from "@/components/clients";
import Newsletter from "@/components/newsletter";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <Expertise />
      <PartnerBrands />
      <FeaturedProducts />
      <Clients />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
