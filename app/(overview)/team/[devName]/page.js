import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import Image from 'next/image'
export default function Team() {
	const developers = [
		{
			name: "Kaz McLamore",
			position: "Chief Executive Officer",
			image: "/kaz.jpg",
			slug: "kaz",
			about: ""
		},
		{
			name: "Jim De Jose",
			position: "Application Developer",
			image: "/jim.jpg",
			slug: "jim",
			about: ""
		},
		{
			name: "Melissa Licopit",
			position: "Application Developer",
			image: "/mitz.jpg",
			slug: "mitz",
			about: ""
		},
		{
			name: "Brian Jay Sio",
			position: "Application Developer",
			image: "/brian.jpg",
			slug: "brian",
			about: ""
		},
		{
			name: "Richard Madamag",
			position: "Application Developer",
			image: "/richard.jpg",
			slug: "richard",
			about: ""
		},
		{
			name: "Christine Fradejas",
			position: "Website Developer",
			image: "/christine.jpg",
			slug: "christine",
			about: "Loves the Web and Internet of things. Also loves making a good cup of coffee."
		},
		{
			name: "Joy Llenos",
			position: "Admin",
			image: "/joy.jpeg",
			slug: "joy",
			about: ""
		},
		{
			name: "Irish Quilla",
			position: "Project Manager",
			image: "/irish.jpeg",
			slug: "irish",
			about: ""
		}
	]
  return (
    <main>
        <Navbar active={'/team'}/>

        <div className='md:mt-[150px] mt-[150px] justify-center flex bg-gradient-to-br from-[#134e4a] to-[transparent] rounded-bl-[3rem]'>
			<section className="w-[100%] max-w-[1200px]">
				<div className="w-full p-5 md:p-0 mt-10 mb-5 md:mb-20">
					<h1 className='text-white font-bold md:text-5xl text-4xl tracking-wide text-center mb-10'>
						Our Team
					</h1>
					<div className="flex flex-wrap sm:gap-4 md:gap-6 justify-center">
						{
							developers.map((dev) => {
								return(
									<>
									<a className="border-[#4C9B98] text-white p-4 pt-14 relative hover:bg-white/10 rounded-xl w-full mb-6 sm:mb-0 sm:w-[45%] lg:w-[30%] group flex flex-col items-center" href={`/team/${dev?.slug}`}>
										{
											dev.image != null ? 
											<>
											<Image src={dev.image} className="w-[150px] h-[150px] bg-white/10 rounded-full bg-cover bg-no-repeat bg-center group-hover:duration-200" width={'150'} height={'150'} alt="profileImage" />
											</>
											:
											<div className="w-[150px] h-[150px] bg-white/10 rounded-full bg-cover bg-no-repeat bg-center group-hover:duration-200" style={{"background-image": "url(&quot;../../public"+dev.image+"&quot;)"}}>
											</div>
										}

										<h1 className="text-white text-2xl font-bold">{dev.name}</h1>

										<span className="false bg-[#4C9B98] text-white absolute top-0 right-0 gap-2 px-3 py-2 rounded-tr-[0.6rem] rounded-bl-lg text-sm shadow-lg">
											<span className="font-medium block">{dev.position}</span>
											<span className="font-medium block">
												{
													dev.about !== "" && dev.about
												}
											</span>
										</span>
									</a>
									</>
								)
							})
						}
						
					</div>
				</div>
			</section>
        </div>

        {/* About us */}

       
        
        <Footer />

    </main>
  )
}
