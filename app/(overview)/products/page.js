import { Footer } from '@/app/_components/Footer'
import { NavBar } from '@/app/_components/NavBar'
import Link from 'next/link'

export default function Products() {

  return (
    <main>
        <NavBar active={'/products'}/>

        <div className='md:mt-[150px] mt-[250px]  rounded-bl-[3rem] mx-auto'>

			<div className="space-y-20 pb-10 ">
				<div className="mt-[200px] mb-[100px] space-y-8 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
					<h1 className='text-white font-bold md:text-5xl text-4xl tracking-wide text-center mb-10'>
							Our Products
					</h1>

					{/* <div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl" style={{"background": "linear-gradient(273deg, rgb(19,78,74) 0%, rgb(23,114,111) 100%)"}}> */}
					<div className="flex flex-col-reverse justify-evenly lg:flex-row-reverse items-center rounded-2xl">
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl cursor-pointer" src="/Yoink_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							</Link>
							<span className='block text-center text-xl my-2 font-medium cursor-pointer'>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'> Yoink </Link>
							</span>
						</div>
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl" src="/Horizon_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							<span className='block text-center text-xl my-2 font-medium'>
								Horizon
							</span>
						</div>
					</div>
					<div className="flex flex-col-reverse justify-evenly lg:flex-row-reverse items-center rounded-2xl">
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl" src="/In2Greater_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							<span className='block text-center text-xl my-2 font-medium'>
								Integrater
							</span>
						</div>
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl" src="/Pudding_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							<span className='block text-center text-xl my-2 font-medium'>
								Pudding
							</span>
						</div>
					</div>
					<div className="flex flex-col-reverse justify-evenly lg:flex-row-reverse items-center rounded-2xl">
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl" src="/NMBL_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							<span className='block text-center text-xl my-2 font-medium'>
								Nimble
							</span>
						</div>
						<div className="p-8 text-white text-left">
							{/* <p className='block mb-10'>
								XML Analyzer is an analysis tool built for analyzing filemaker database files which uses XML files.
								<br/>
								<br/>
								<Link href={`https://yoink-web-app-fxpro.vercel.app/`} target='_blank' className='hover:text-slate-800 hover:font-semibold'>
								Experience our tool
								</Link>
								</p> */}
							<img alt="XML Diff" loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="rounded-xl" src="/The_Framework_FXProfessional_web.jpg" style={{"color": "transparent"}}/>
							<span className='block text-center text-xl my-2 font-medium'>
								Pudding
							</span>
						</div>
					</div>
				</div>
			</div>
			
        </div>
        
        <Footer />
    </main>
  )
}
