import { NavBar } from '@/app/_components/NavBar'
import { Footer } from '@/app/_components/Footer'

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
					<div className="flex flex-col-reverse lg:flex-row items-center rounded-2xl" style={{"background": "linear-gradient(273deg, rgb(23,114,111) 0%, rgb(19,78,74) 100%"}}>
						<div className="p-8 text-white text-left">
							<span className='block text-xl mb-2 font-medium'>
								XML Diff
							</span>
							<p className='block'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>

						<img alt="XML Diff" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="mt-8 mr-8 rounded-xl" src="/fm-lg.png" style={{"color": "transparent"}}/>
					</div>

					<div className="flex flex-col-reverse lg:flex-row-reverse items-center rounded-2xl" style={{"background": "linear-gradient(273deg, rgb(19,78,74) 0%, rgb(23,114,111) 100%)"}}>
						<div className="p-8 text-white text-left">
							<span className='block text-xl mb-2 font-medium'>
								XML Analyzer 
							</span>
							<p className='block'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>

						<img alt="XML Diff" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="mt-8 ml-8 rounded-xl" src="/xml.png" style={{"color": "transparent"}}/>
					</div>
				</div>
			</div>
			
        </div>
        
        <Footer />
    </main>
  )
}
