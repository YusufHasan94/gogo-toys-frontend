import React from 'react';
import stack from "@/assets/collection/stack.png"
import alphabet from "@/assets/collection/alphabet.png"
import car from "@/assets/collection/car.png"
import horse from "@/assets/collection/horse.png"
import panda from "@/assets/collection/panda.png"
import Image from 'next/image';

const collectionData = [
    {
        image: stack,
        toyName: "Playsets"
    },
    {
        image: car,
        toyName: "Control Toys"
    },
    {
        image: alphabet,
        toyName: "Educational Toys"
    },
    {
        image: horse,
        toyName: "Eco- Friendly Toys"
    },
    {
        image: panda,
        toyName: "Stuffed Toys"
    },
]

const Collection = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-[100px] mb-[70px]'>
            <div className='mb-[60px] flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Find the Oerfect Toy</h2>
                <p className='text-lg'>Our Collections</p>
            </div>
            <div className='flex justify-between'>
                {
                    collectionData.map((data, index)=>(
                        <div key={index} className='relative flex flex-col items-center'>
                            <Image src={data.image} alt={data.toyName} className='relative'/>
                            <span className='absolute -bottom-8 text-lg font-semibold'>{data.toyName}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Collection;