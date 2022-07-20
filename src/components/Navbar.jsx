import React from 'react'
import { BsSearch, BsGift, BsBell, BsMenuDown } from 'react-icons/bs'

import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className=' sticky flex items-center p-4 z-[100] w-full justify-start bg-black'>
            <Link to='/'>
                <h1 className='text-red-600 text-3xl font-bold mx-8 cursor-pointer'>
                    NETFLIX
                </h1>
            </Link>
            <div>

                <ul className='text-gray-400 flex '>
                    <Link to='/'>
                        <li className='mx-4 hover:text-white'>Home</li>
                    </Link>
                    <Link to='movies'>
                        <li className='mx-4 hover:text-white'>Movies</li>
                    </Link>
                    <li className='mx-4 hover:text-white'>Tv Shows</li>
                    <li className='mx-4 hover:text-white'>Popular</li>
                </ul>
            </div>
            <div className=' hidden md:flex text-gray-400'>
                <BsSearch className='absolute right-[300px] hover:text-white ' />
                <BsGift className='absolute right-[260px] hover:text-white ' />
                <BsBell className='absolute right-[220px] hover:text-white ' />
                <BsMenuDown className='absolute right-[180px] hover:text-white' />
            </div>
        </div>
    )
}

export default Navbar