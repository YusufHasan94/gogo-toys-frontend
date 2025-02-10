'use client';
import { Rate, Tabs, TabsProps } from "antd";
import alphabetblocks from "@/assets/toys/alphabetblocks.png"
import breyerhorse from "@/assets/toys/breyerhorse.png"
import cycle from "@/assets/toys/cycle.png"
import hotwheelcars from "@/assets/toys/hotwheelcars.png"
import jackinthebox from "@/assets/toys/jackinthebox.png"
import jigsawpuzzle from "@/assets/toys/jigsawpuzzle.png"
import littlepony from "@/assets/toys/littlepony.png"
import woodenhorse from "@/assets/toys/woodenhorse.png"
import cart from "@/assets/toys/cart.svg"
import heart from "@/assets/toys/heart.svg"
import Image from "next/image";
import "./custom.css";

const Toys = () => {
   
    const toyTabs = [
        {
          key: "1",
          title: "Featured",
          toys: [
            {
              name: "Alphabet blocks",
              image: alphabetblocks,
              price: 39.00,
              offerPrice: 29.00,
              rating: 0,
            },
            {
              name: "Breyer horse",
              image: breyerhorse,
              price: 38.00,
              offerPrice: 28.00,
              rating: 4,
            },
            {
              name: "Cycle",
              image: cycle,
              price: 25.00,
              offerPrice: 20.00,
              rating: 0,
            },
            {
              name: "Hot wheel cars",
              image: hotwheelcars,
              price: 38.00,
              offerPrice: 28.00,
              rating: 5,
            }
          ]
        },
        {
          key: "2",
          title: "Best seller",
          toys: [
            {
                name: "Jack in the box",
                image: jackinthebox,
                price: 29.00,
                offerPrice: 20.00,
                rating: 5,
            },
            {
                name: "Jigsaw puzzle",
                image: jigsawpuzzle,
                price: 38.00,
                offerPrice: 28.00,
                rating: 0,
            },
            {
                name: "Little pony",
                image: littlepony,
                price: 29.00,
                offerPrice: 20.00,
                rating: 5,
            },
            {
                name: "Wooden horse",
                image: woodenhorse,
                price: 38.00,
                offerPrice: 28.00,
                rating: 0,
            }
          ]
        },
        {
          key: "3",
          title: "New arrivales",
          toys: [
            {
                name: "Cycle",
                image: cycle,
                price: 25.00,
                offerPrice: 20.00,
                rating: 0,
            },
            {
                name: "Hot wheel cars",
                image: hotwheelcars,
                price: 38.00,
                offerPrice: 28.00,
                rating: 5,
            }
            ,{
                name: "Jack in the box",
                image: jackinthebox,
                price: 29.00,
                offerPrice: 20.00,
                rating: 5,
            },
            {
                name: "Jigsaw puzzle",
                image: jigsawpuzzle,
                price: 38.00,
                offerPrice: 28.00,
                rating: 0,
            }
          ]
        }
      ];

    const tabItems:TabsProps['items'] = toyTabs.map(tab=>({
        key: tab.key,
        label: 
            <span className="px-5 py-3 text-xl font-semibold text-[#2D2D2D]">
                {tab.title}
            </span>, 
        children: (
            <div className="grid grid-cols-4 gap-x-5 gap-y-[60px] pt-8">
                {
                    tab.toys.map((toy, index)=>(
                        <div key={index} className="relative">
                            <Image src={toy.image} alt={toy.name} className="pb-[25px]"/>
                            <span className="font-bold text-lg">{toy.name}</span>
                            {
                                toy.offerPrice ?
                                <div className="font-bold text-lg flex items-end gap-2 mt-[6px] mb-3">
                                    <span className="text-[#1BBF00]">${toy.offerPrice}</span>
                                    <del className="text-[#898989] text-sm">${toy.price}</del>
                                </div>:
                                <span className="font-bold text-lg">
                                    <span>{toy.price}</span>
                                </span>
                            }
                            <Rate allowHalf value={toy.rating} />
                            <div className="absolute top-5 right-5 flex flex-col gap-3">
                                <button>
                                    <Image src={heart} alt="heart"/>
                                </button>
                                <button>
                                    <Image src={cart} alt="cart"/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }));
    
    return (
        <div className="pt-[50px] mb-[120px] max-w-[1240px] mx-auto">
            <h2 className='text-center text-4xl font-bold'>Find the Oerfect Toy</h2>
            <div className="flex justify-center items-center pt-12">
                <Tabs defaultActiveKey="1" items={tabItems}/>
            </div>            
        </div>
    );
};

export default Toys;