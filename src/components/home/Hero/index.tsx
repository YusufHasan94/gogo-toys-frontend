import hero from "@/assets/home/hero.png"
import Image from "next/image";
const Hero = () => {
    return (
        <div className="relative">
            <Image src={hero} alt="hero" className="relative w-full"/>
            <div className="absolute top-1/4 right-1/4">
                <h1 className="text-6xl text-[#1096B5] font-extrabold">Play, learn, & grow!</h1>
                <p className="mt-4 mb-16 text-[#375259] text-xl font-bold w-[545px]">Crafting smiles with every toy, made for learning, fun, and growth</p>
                <button className="bg-[#FFE926] rounded-[74px] px-11 py-5 text-xl font-bold">
                    Shop now 
                </button>
            </div>
        </div>
    );
};

export default Hero;