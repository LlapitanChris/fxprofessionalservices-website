import { Footer } from '@/app/_components/Footer'
import { NavBar } from '@/app/_components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
export default function Team() {
	const developers = [
		{
			name: "Kaz McLamore",
			position: "Chief Executive Officer",
			image: "/kaz.jpeg",
			slug: "kaz",
			about: "Enthusiastic student of all things app development. Held senior FileMaker developer roles as an in-house developer and as a consultant with several firms before starting Fx Pros.",
			linkedIn: "https://www.linkedin.com/in/kaz-mclamore-1aaab94a/"
			},
		{
			name: "Jim De Jose",
			position: "Application Developer",
			image: "/jim.jpg",
			slug: "jim",
			about: "A certified Claris FileMaker developer, brings 2+ years of hands-on experience and crafts practical database applications. With a focus on efficiency, my freelance journey offers freedom and continuous learning opportunities.",
			linkedIn: "https://www.linkedin.com/in/jimpauldejose/"
		},
		{
			name: "Melissa Licopit",
			position: "Application Developer",
			image: "/mitz.jpg",
			slug: "mitz",
			about: "Fur mom to 10 dogs, perpetually learning, and a collector of Funko, Bearbrick, and Nanoblocks. Age is just a number; enthusiasm is forever!",
			linkedIn: "https://www.linkedin.com/in/melissa-licopit-55713176/"
		},
		{
			name: "Brian Jay Sio",
			position: "Application Developer",
			image: "/brian.jpg",
			slug: "brian",
			about: `Cats Cats Cats. Hiking, Freediving and Playing Video Games. Crazy about Coffee. 50 First Dates`,
			linkedIn: "https://www.linkedin.com/in/brian-jay-sio-14b60427/"
		},
		{
			name: "Richard Madamag",
			position: "Application Developer",
			image: "/richard.jpg",
			slug: "richard",
			about: "A full-time developer and a part-time musician. I also love riding motorcycles and going on adventure with my friends.",
			linkedIn: "https://www.linkedin.com/in/richard-kim-madamag/"
		},
		{
			name: "Christine Fradejas",
			position: "Website Developer",
			image: "/christine.jpg",
			slug: "christine",
			about: "Loves the Web and Internet of things. Also loves making a good cup of coffee.",
			linkedIn: "https://www.linkedin.com/in/chrisemantic-llapitan-2018/"
		},
		{
			name: "Joy Llenos",
			position: "Admin",
			image: "/joy.jpeg",
			slug: "joy",
			about: "With over six years of experience in managing business engagements, overseeing project implementation, and developing customized training programs for various private companies. I also enjoy watching Korean movies and drama series.",
			linkedIn: "https://www.linkedin.com/in/joy-llenos-b20081a3/"
		},
		{
			name: "Irish Quilla",
			position: "Project Manager",
			image: "/irish.jpeg",
			slug: "irish",
			about: "Project manager by day, violinist by night. Let's orchestrate success together, one project at a time.",
			linkedIn: ""
		}
	]
  return (
    <main>
        <NavBar active={'/team'}/>

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

										<span className="false bg-[#4C9B98] text-white gap-2 px-3 py-2 rounded-tr-[0.6rem] rounded-lg shadow-lg mx-auto">
											<span className="font-medium block text-center">{dev.position}</span>
											<span className='bg-[#14b8a6] hover:bg-[#0f766e] rounded-[200px] w-[40px] h-[40px] p-2 block mx-auto'>
												<Link
													href={`${dev.linkedIn != "" ? dev.linkedIn : 'https://www.linkedin.com/'} `}
													target='_blank'
													className='text-center self-center'
												>
													<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="white"/>
													</svg>
												</Link>
											</span>
											<span className="block mt-2 text-sm text-center" style={{"textShadow":".5px .5px #64748b"}}>{dev.about}</span>
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
