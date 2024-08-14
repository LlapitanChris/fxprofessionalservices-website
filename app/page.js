import Link from 'next/link'
import { Footer } from './_components/Footer'
import { NavBar } from './_components/NavBar'

export default function Home() {
  return (
    <main>
        <NavBar />

        <div className='md:mt-[150px] mt-[150px] justify-center flex bg-gradient-to-br from-[#134e4a] to-[transparent] rounded-bl-[3rem]'>
            <div className='w-[100%] max-w-[1200px]'>
                <div className='px-5 mb-10 md:flex mt-20'>
                    <div className='md:w-[50%] mb-10'>
                        <div className='mb-10'>
                            <h1 className='text-white md:text-5xl text-4xl tracking-wide'>
                              We provide complete custom application solution for small to medium size business.
                            </h1>
                        </div>

                        <div className='flex flex-wrap w-[100%]'>
                            <div className='md:mr-0 mr-2'>
                                <Link
                                    href="#"
                                    target='_blank'
                                    className='py-5 px-10 rounded-[200px] bg-[#4C9B98] hover:bg-[#448b88] text-white font-bold block mb-2 md:mr-2'>
                                    Contact us
                                </Link>
                            </div> 
                            <div>
                                <Link
                                    href={'/products'}
                                    className='py-5 px-10 rounded-[200px] border-solid border-[1.5px] border-[#4C9B98] hover:bg-[#448b88] text-white font-bold block'>
                                    Our Products
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* <div className='w-[50%]'>
                        <Map />
                    </div> */}
                </div>
            </div>
        </div>

        {/* About us */}

      <div className='mt-20 max-w-screen-lg mx-auto px-8 my-16 md:mb-24'>
        <p className="text-white text-md md:text-2xl leading-relaxed font-medium md:leading-[2.5rem]" style={{"opacity": "1; transform: translateY(0rem) translateZ(0px);"}}>
          &nbsp;
          <span className="text-[#042f2e] font-semibold" style={{"word-spacing":"-6px;", "margin-right":"5px", "margin-left":"0px"}}>FX Professional Services </span>
          is a FileMaker development consultancy firm.
          &nbsp;<br/>A team of full time experts provides professional consultancy and application development services that enables businesses to effectively use these technologies to create new product offerings, increase their presence and respond to competitive threats by improving their user experience across multiple channels.
          <br/><br/>Rapid Development is one of the prime features of solutions development with FX Professional Services that helps you quickly implement solutions for your business needs.
        </p>       
      </div>

      <section className="bg-[#d1fae5] rounded-tl-[3rem] rounded-br-[3rem]">
				<div className="max-w-screen-xl mx-auto px-8 py-16 flex flex-col items-center" style={{"opacity": "1", "transform": "translateY(0rem) translateZ(0px)"}}>

					<h1 className="text-lg font-medium text-center text-[#17726F]">Our Team</h1>
					<p className="text-3xl font-bold text-center mb-8 text-[#211F53] mx-auto mt-4">Check out our Developers</p>
          <div className='md:mr-0 mr-2'>
            <Link
                href="/team"
                target='_blank'
                className='py-5 px-5 rounded-[200px] bg-[#134e4a] hover:bg-[#448b88] text-white font-bold block mb-2 md:mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>


            </Link>
          </div> 

				</div>
			</section>


      <section>
          <div className="max-w-screen-xl mx-auto px-8 py-16" style={{"opacity": "1", "transform": "translateY(0rem) translateZ(0px)"}}>
              <h1 className="text-xl font-semibold text-center text-[#94D6DE]">
                Why you shoud choose us?
              </h1>
              <p className="text-md sm:text-xl text-center mb-16 text-white max-w-2xl mx-auto mt-4">
                It&apos;s simple really; we see the need for specialized solutions and a need to differentiate ourselves from the crowd. In this competitive business environment, it&apos;s imperative that we offer more than just a generic solution. From initial design and prototyping to testing, programming, and integration, we can deliver customized solutions to our clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 max-w-screen-xl mx-auto">

                <button 
                  className="bg-[#a7f3d0]/90 p-8 rounded-lg hover:bg-[#a7f3d0] transition-colors text-left group lg:mb-8" 
                  style={{"transform": "none", "transform-origin": "50% 50% 0px"}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#042f2e]"
                    style={{"width": "2.25rem", "height": "2.25rem"}}
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                
                  <h2 className="font-bold text-[#042f2e] my-4 text-lg">We meet deadlines</h2>
                
                  <p className="text-md text-[#042f2e]">
                    As your business grows, you&apos;ll encounter bumps along the road that make it harder to meet your goals. This can be a problem. If your business needs its solutions to be quick and robust enough to handle a wide variety of circumstances, We can provide solutions when you need it.
                  </p>

                </button>
                
                <button className="bg-[#0d9488]/90 p-8 rounded-lg hover:bg-[#0d9488] transition-colors text-left group lg:mt-8" style={{"transform": "none", "transform-origin": "50% 50% 0px"}}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" style={{"width": "2.25rem", "height": "2.25rem"}}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>


                  <h2 className="font-bold text-white my-4 text-lg">We meet requirements</h2>
                  
                  <p className="text-md text-white">
                    Modular approach to software development which was once available only to large corporations is now becoming the most widely used method by developerss and small/ midsize organizations. FX Professional Services see this as the best approach to providing a solution to make sure that every business requirement is met.
                  </p>
                
                </button>
                
                <button className="bg-white/90 p-8 rounded-lg hover:bg-white transition-colors text-left group lg:mb-8" style={{"transform": "none", "transform-origin": "50% 50% 0px"}}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#042f2e" style={{"width": "2.25rem", "height": "2.25rem"}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>

                  
                  <h2 className="font-bold text-[#042f2e] my-4 text-lg">We Listen</h2>
                    
                    <p className="text-md text-[#042f2e]">We just don&apos;t develop and build solutions. We make sure that all concerns are heard to make sure that what we provide is an application that would be almost perfect to handle all your business needs. We don&apos;t push ideas aside, we work with it.</p>
                
                </button>
                    
              </div>
          </div>
      </section>
        
        <Footer />

    </main>
  )
}
