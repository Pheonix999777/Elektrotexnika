import Blog from "@/Pages/Blog/Blog";
import Faqs from "@/Pages/Faqs/Faqs";
import Hero from "@/Pages/Hero/Hero";
import New from "@/Pages/New/New";
import Phones from "@/Pages/Phones/Phones";
import Product from "@/Pages/Product/Product";
import Service from "@/Pages/Service/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <New />
      <Phones />
      <Product />
      <Service />
      <Blog />
      <Faqs />
    </main>
  );
}
