import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 sm:w-full w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to={'/'}>
                                <img className="h-8 w-auto" src="https://www.svgrepo.com/show/475654/github-color.svg" alt="Your Company" />
                            </Link>
                        </div>
                        <div>
                            <Link to={'/'}>
                                <h1 className='text-white font-bold text-xl p-2'>GitHub</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <span>
                            <Link to={"/"}>
                                <a href="" className='text-white mx-4'>Home</a>
                            </Link>
                            <Link to={'/about'} >
                                <a href="" className='text-white'>About</a>
                            </Link>
                        </span>

                        <div>
                            <button type='button' className='ml-4 text-gray-100'>Light</button>
                        </div>
                    </div>
                </div>
            </div>



        </nav>

    )
}

export default Navbar