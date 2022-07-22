import React from 'react'
import { BsGift, BsBell, BsMenuDown } from 'react-icons/bs'

import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const activeStyle = {
        textDecoration: "underline",
    };
    return (
        <>
            <div className='flex items-center p-4 z-[100] w-full justify-start bg-black'>
                <NavLink to='/'>
                    <h1 className='text-red-600 text-3xl font-bold mx-8 cursor-pointer'>
                        NETFLIX
                    </h1>
                </NavLink>
                <div>
                    <ul className='text-gray-400 flex '>
                        <li className='mx-4 hover:text-white'>
                            <NavLink
                                to='/'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> Home
                            </NavLink>
                        </li>
                        <li className='mx-4 hover:text-white'>
                            <NavLink to='/movies'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> Movies
                            </NavLink>
                        </li>
                        <li className='mx-4 hover:text-white'>
                            <NavLink to='/tvshows'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> Tv Shows
                            </NavLink>
                        </li>

                        <li className='mx-4 hover:text-white'>
                            <NavLink to='/popular'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }> Popular
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className=' hidden md:flex text-gray-400'>
                    <BsGift className='absolute right-[260px] hover:text-white ' />
                    <BsBell className='absolute right-[220px] hover:text-white ' />
                    <BsMenuDown className='absolute right-[180px] hover:text-white' />
                </div>
            </div>
        </>
    )
}

export default Navbar