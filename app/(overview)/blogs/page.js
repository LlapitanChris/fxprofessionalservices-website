"use client"
import { NavBar } from '@/app/_components/NavBar';
import { Footer } from '@/app/_components/Footer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Blogs() {

	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
	  const fetchData = async () => {
		const response = await fetch('/api');
		const result = await response.json();
		setBlogs(result);
	  };
  
	  fetchData();
	}, []);
  
	console.log(blogs)

  return (
    <main>
        <NavBar active={'/blogs'}/>

        <div className='mt-[150px] rounded-bl-[3rem] block sm:flex'>

			<div className="space-y-20 sm:pb-10 w-[70%] mx-auto sm:pl-10">
				<div className="mt-[200px] sm:mt-[100px] mb-[100px] space-y-8 mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-6xl">

					{
						blogs?.data?.map((blog, index) => (
							<>
							<Link href={`/blogs/${blog.fileName}/`}>
								<div className="sm:flex items-center rounded-2xl hover:bg-white/10 cursor-pointer sm:border-0">
									<img alt="XML Diff" loading="lazy" decoding="async" data-nimg="1" className="sm:mt-8 sm:ml-8 sm:mb-8 rounded-xl sm:h-auto sm:w-auto" src="/blog1.jpeg" style={{"color": "transparent"}}/>
			
									<div className="sm:p-8 mt-4 text-white text-left">
										<span className='block text-2xl mb-2 font-semibold'>
											{blog?.fileName}
										</span>
										<p className='sm:block hidden'>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...
										</p>
									</div>
								</div>
							</Link>
							<hr className='sm:hidden'/>
							</>
						))
					}

				</div>
			</div>

			<hr className='sm:hidden'/>

			<div className="sm:space-y-20 sm:pb-10 sm:w-[30%] sm:pl-10 w-[70%] mx-auto sm:mx-0">
				<div className="my-4 sm:mt-[100px] sm:mb-[100px] space-y-8 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-6xl">

					<div className="items-center rounded-2xl" >
						<div className="text-white text-left">
							<span className='block text-xl mb-2 font-semibold'>
							<span className='underline cursor-pointer hover:font-bold'> Subscribe</span> to get latest articles
							</span>
							
						</div>
						
					</div>

					<div className="rounded-2xl" >
						<div className="text-white text-left">
							<span className='block text-xl mb-2 font-semibold'>
							  Recent articles
							</span>
							<ul className='py-2'>
								<li className='py-.5 underline cursor-pointer hover:font-semibold'>The Basics of FileMaker</li>
								<li className='py-.5 underline cursor-pointer hover:font-semibold'>Advanced: Filemaker and NextJs</li>
								<li className='py-.5 underline cursor-pointer hover:font-semibold'>FileMaker: From Zero to Hero</li>
							</ul>
						</div>

						
					</div>

					
				</div>
			</div>
			
        </div>
        
        <Footer />
    </main>
  )
}
