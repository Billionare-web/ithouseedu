import React from 'react'
import Image from 'next/image'
import Logo from '@/app/components/imgs/logo.png'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-white fixed z-10 w-full h-20 py-4 px-10'>
        <Link href={'/'} className="flex items-center gap-2">
            <Image className='w-12 h-12' src={Logo} alt='IT House logo' />
            <h1 className='text-3xl font-semibold text-black'>IT HOUSE</h1>
        </Link>
    </div>
  )
}

export default Navbar
