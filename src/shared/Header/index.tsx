import Image from 'next/image';
import React from 'react';
import shipphing from "@/assets/header/shipping.svg"
import gogoIcon from "@/assets/header/gogolicon.png"
import cart from "@/assets/header/cart.svg"
import search from "@/assets/header/search.svg"
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <div className='bg-[#0F83B2] px-[100px] py-[9px] text-[#F7F7F6] font-bold text-base flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <Image src={shipphing} alt='shipping' />
                    <span>Free  free shipping with over $150</span>
                </div>
                <div className='flex gap-10'>
                    <Link href="#">
                        Login
                    </Link>
                    <Link href="#">
                        Register
                    </Link>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto flex items-center py-12'>
                <Link href="" className='flex items-center gap-4'>
                    <Image src={gogoIcon} alt='Logo' className='' width={40}/>
                    <span className='font-bold text-xl'>Go Go<br />Toys</span>
                </Link>
                <ul className='flex flex-auto justify-center gap-10 font-bold text-base'>
                    <li>
                        <Link href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='flex gap-7'>
                    <div className='flex relative'>
                        <Image src={cart} alt='search' className='relative' width={28}/>
                        <span className='absolute right-0'></span>
                    </div>
                    <div className='border-2 border-[#d4d4d4] rounded-[26px] overflow-hidden'>
                        <input type="text" name="search" id="" placeholder='Search' className='pl-5 focus:outline-none' />
                        <button className='bg-[#0F83B2] p-4 rounded-full'>
                            <Image src={search} alt='search'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;