'use client'
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
    const [visible, setVisible] = useState(false)
  return (
    <>
        <div>
            {/* Navigation Bar */}
            <nav className='relative flex items-center justify-between font-semibold capitalize py-5 px-2.5 md:px-10'>
                {/* Nav Left */}
                <div className='flex items-center justify-center gap-2'>
                    <Image src='/images/logo_day_black.png' width={30} height={30} alt='logo'/>
                    <h4 className='text-2xl font-bold uppercase'>bakesbone</h4>
                </div>
                {/* Nav Center */}
                <div className={`${visible ? 'flex' : 'hidden' } md:flex flex-col md:flex-row items-end justify-between gap-5 text-lg font-semibold capitalize bg-[#0d0d0d] md:bg-transparent text-[#efefe3] md:text-[#0d0d0d] absolute md:static top-0 right-0 pt-6 md:pt-0 pb-20 md:pb-0 pr-3 md:pr-0 w-full md:w-auto z-50`}>
                    <Link
                    onClick={()=>{setVisible(!visible)}}
                    href="/" className='md:hidden text-3xl flex items-center justify-center hover:text-[#e8b35f] rounded-full border-2 border-white hover:border-[#e8b35f] duration-300 ease-linear '> 
                    <IoCloseSharp/> 
                    </Link>
                    <Link href="/" className='hover:text-[#e8b35f] duration-300 ease-linear'>life and news</Link>
                    <Link href="/" className='hover:text-[#e8b35f] duration-300 ease-linear'>about</Link>
                    <Link href="/" className='hover:text-[#e8b35f] duration-300 ease-linear'>store</Link>
                    <Link href="/" className='hover:text-[#e8b35f] duration-300 ease-linear'>recipies</Link>
                    <Link href="/" className='hover:text-[#e8b35f] duration-300 ease-linear flex md:hidden items-center gap-2'>cart <FaCartShopping /></Link>
                </div>
                {/* Nav Right */}
                <div className='relative'>
                    <Link href="/" className='hidden md:flex items-center gap-1 text-2xl text-white hover:text-[#e8b35f] duration-300 ease-linear uppercase before:content-[""] before:absolute before:-top-1 before:-left-6 before:bg-[#25614c] before:rounded-full before:w-30 before:h-16 before:origin-top-left before:-rotate-10 before:-z-10'>cart <FaCartShopping /></Link>
                </div>
                {/* Hamburger */}
                <Link
                onClick={()=>{setVisible(!visible)}}
                href="/" className='md:hidden text-3xl flex items-center hover:text-[#e8b35f] duration-300 ease-linear'> 
                <GiHamburgerMenu/> 
                </Link>
            </nav>
        </div>
    </>
  )
}

export default NavBar