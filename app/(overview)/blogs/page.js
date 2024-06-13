import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
export default function Blogs() {

  return (
    <main>
        <Navbar active={'/blogs'}/>

        <div className='mt-[150px] rounded-bl-[3rem] flex'>

			<div className="space-y-20 pb-10 w-[70%] pl-10">
				<div className="mt-[100px] mb-[100px] space-y-8 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-6xl">

					<div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl hover:bg-white/10 cursor-pointer" >
						<div className="p-8 text-white text-left">
							<span className='block text-2xl mb-2 font-semibold'>
								The Basics: How to install FileMaker
							</span>
							<p className='block'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...
							</p>
						</div>

						<img alt="XML Diff" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="mt-8 ml-8 mb-8 rounded-xl" src="/blog1.jpeg" style={{"color": "transparent"}}/>
					</div>

					<div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl hover:bg-white/10 cursor-pointer" >
						<div className="p-8 text-white text-left">
							<span className='block text-2xl mb-2 font-semibold'>
								Advanced: Setting up Web Viewer in FileMaker 
							</span>
							<p className='block'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
							</p>
						</div>

						<img alt="XML Diff" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="mt-8 ml-8 mb-8 rounded-xl" src="/blog2.png" style={{"color": "transparent"}}/>
					</div>

					<div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl hover:bg-white/10 cursor-pointer" >
						<div className="p-8 text-white text-left">
							<span className='block text-2xl mb-2 font-semibold'>
								Mastery: FileMaker, OData API and NextJs 
							</span>
							<p className='block'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys text of the printing and typesetting
							</p>
						</div>

						<img alt="XML Diff" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="mt-8 ml-8 mb-8 rounded-xl" src="/blog3.jpeg" style={{"color": "transparent"}}/>
					</div>
				</div>
			</div>

			<div className="space-y-20 pb-10 w-[20%] pl-10">
				<div className="mt-[100px] mb-[100px] space-y-8 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-6xl">

					<div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl" >
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
