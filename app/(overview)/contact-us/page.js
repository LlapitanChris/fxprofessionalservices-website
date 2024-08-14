"use client"
import { Footer } from '@/app/_components/Footer'
import { NavBar } from '@/app/_components/NavBar'
import { useState } from 'react'

export default function Products() {
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")

  return (
    <main>
        <NavBar active={'/contact-us'}/>
			<div className="grid grid-cols-12 container mx-auto py-16 px-4 md:px-8 gap-8 mt-[200px] text-white">
				<div className="col-span-12 md:col-span-8">
					<section className="w-full relative">
						<div className="bg-transparent relative z-10">
							<div className="flex justify-between items-center">
								<h2 className="text-2xl md:text-4xl font-semibold">Contact Us</h2>
							</div>
							<hr className="my-4 md:my-8"/>
							<form>
								<div className="mb-8">

									<div className="w-full mb-4">
										<label className="block mb-2 font-semibold" for="name">Subject</label>
										<input 
											onChange={(e) => {setSubject(e.target.value)}} 
											placeholder="Product Inquiry" 
											className="w-full bg-transparent border border-foreground py-1 px-2 rounded-lg" type="text" 
											name="subject"/>
									</div>
									<div className="w-full mb-4">
										<label className="block mb-2 font-semibold" for="message">Message</label>
										<textarea 
											onChange={(e) => {setMessage(e.target.value)}} 
											type="textarea" 
											placeholder="Write your message here..." 
											rows="5" 
											className="w-full bg-transparent border border-foreground py-1 px-2 rounded-lg" name="message"
										>
										</textarea>
									</div>
									</div>
									<a
										href={`mailto:admin@fxprofessionalservices.com?subject=${subject}&body=${message}`}
										className="rounded-full font-semibold transition-all whitespace-nowrap border items-center justify-center bg-tertiary text-dark px-4 py-2 md:px-8 text-lg hover:bg-foreground hover:text-background cursor-pointer"
									>
										Submit
									</a>
							</form>
						</div>
					</section>
				</div>
			</div>
										
		<Footer />
    </main>
  )
}
