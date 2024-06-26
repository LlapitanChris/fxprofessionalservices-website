'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar({ active }) {

    const [isMobileOpen, setMobileOpen] = useState(false);
	const [mainNav, setMainNav] = useState("bg-[#134e4a]")
	const [bgColor, setBgColor] = useState("bg-transparent")
	const [navSize, setnavSize] = useState("150px");
	const listenScrollEvent = () => {
	  window.scrollY > 10 ? setnavSize("70px") : setnavSize("150px");
	  window.scrollY > 10 ? setBgColor("bg-[#134e4a]") : setBgColor("bg-transparent");
	  window.scrollY > 10 ? setMainNav("bg-[#134e4a] delay-200 duration-500 backdrop-blur border-white/10 border-b ") : setMainNav("bg-gradient-to-br from-[#134e4a] to-[transparent]");
	};
	useEffect(() => {
	  window.addEventListener("scroll", listenScrollEvent);
	  return () => {
		window.removeEventListener("scroll", listenScrollEvent);
	  };
	}, []);

    const items = [
        {
            title: 'Home',
            hideInDesktop: true,
            href: '/'
        },
        // {
        //     title: 'About',
        //     hideInDesktop: false,
        //     href: '/about'
        // },
        {
            title: 'Our Team',
            hideInDesktop: false,
            href: '/team'
        },        
        {
            title: 'Products',
            hideInDesktop: false,
            href: '/products'
        },
        {
            title: 'Blogs',
            hideInDesktop: false,
            href: '/blogs'
        },
		{
            title: 'Contact us',
            hideInDesktop: false,
            href: '/contact-us'
        }
    ];

    return (
        <>
            <nav 
				className={`${mainNav} transition-colors fixed top-0 z-10 left-0 right-0 text-white`}
			>

                <div 
					className={`${bgColor} max-w-screen-xl mx-auto px-8 flex justify-between items-center`} 
					style={{
					height: navSize,
					transition: "all 1s"
					}}
				>

                    {/* Left */}
                    <div className="max-w-[300px]">
                        <div className="w-[200px] md:w-[250px]">
                            <Link href={'/'}>
                               <span className='md:text-[35px] text-2xl text-white font-semibold'>
								FxProfessionalServices
							   </span>
                            </Link>
                        </div>
                        
                    </div>
                    {/* .Left */}

                    {/* Right */}
                    <div>

                        {/* Mobile Menu */}
                        <div className='md:hidden'>
                            <button
                                onClick={() => setMobileOpen(true)}
                                className='w-[40px] p-2 border-[1.5px] border-solid rounded-lg text-white border-white hover:text-[#115e59] hover:bg-white hover:ease-in duration-100'>
                                <Bars3Icon />
                            </button>
                        </div>
                        {/* .Mobile Menu */}


                        <div className='hidden md:flex gap-2'>
                            {
                                items.map(item =>
                                    !item.hideInDesktop &&
                                    <Link
                                        key={item.href}
                                        className={`${active === item.href ? 'bg-[#115e59] hover:bg-[#448b88]' : 'hover:bg-[#448b88]'} cursor-pointer text-white px-8 py-4 font-bold rounded-[200px] hover:ease-in hover:duration-100`}
                                        href={item.href}>
                                        {item.title}
                                    </Link>
                                )
                            }
                        </div>

                    </div>
                    {/* .Right */}

                </div>
                
            </nav>
            <hr className='flex md:hidden' />

            {/* Mobile menu */}
            {
                isMobileOpen &&
                <div className='md:hidden w-[100vw] h-[100vh] top-0 left-0 z-50 fixed bg-[#115e59]/60'>
                    <div className='bg-[#115e59] w-[75vw] max-w-[500px] h-[100vh] right-0 fixed'>

                        <div className='p-5 items-end flex justify-end'>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className='w-[40px] p-2 border-[1.5px] border-solid rounded-lg text-white border-white hover:text-[#211F53] hover:bg-white hover:ease-in duration-100'>
                                <XMarkIcon />
                            </button>
                        </div>

                        <hr />

                        <div>
                            <div className='flex flex-wrap'>
                                {
                                    items.map(item => 
                                        <Link
                                            key={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`${item.href === active ? 'bg-[#4C9B98] hover:bg-[#448b88]' : 'hover:bg-[#448b88]'} md:text-[35px] text-2xl text-white w-[100%] p-5 font-bold`}
                                            href={item.href}>
                                                {item.title}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
            
            {/* .Mobile menu */}
        </>
    );
}