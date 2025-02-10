import Addvertise from "@/components/home/Addvertise";
import Collection from "@/components/home/Collection";
import Hero from "@/components/home/Hero";
import Toys from "@/components/home/Toys";
import Header from "@/shared/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Collection/>
      <Toys/>
      <Addvertise/>
    </div>
  );
}
