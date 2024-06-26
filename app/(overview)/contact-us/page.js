"use client"

import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
export default function Products() {

  return (
    <main>
        <Navbar active={'/products'}/>
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

									<div className="mb-2 sm:mb-4">
										<label for="topic" className="font-bold">Topic</label>
										<div className="w-full col-span-12 lg:col-span-9 mt-2 css-b62m3t-container">

											<span id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span>

											<span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log" className="css-7pg0cj-a11yText">
											</span>

											<div className="w-full bg-transparent border-foreground border px-2 rounded-md py-2 relative overflow-y-scroll css-cp01gg-control">
												<div className=" css-14oxtc6">
													<div className=" css-w54w9q-singleValue">General Inquiry</div>
													<div className=" css-n9qnu9" data-value="">
														<input className="" autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-2-input" spellcheck="false" tabindex="0" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" type="text" value="" style={{"color": "inherit", "background":" 0px center", "opacity": "1", "width": "100%","grid-area": "1 / 2", "font": "inherit", "min-width": "2px", "border": "0px", "margin": "0px", "outline": "0px", "padding": "0px"}}/>
													</div>
												</div>
												<div className=" css-1wy0on6">
													<span className=" css-j4w2j1-indicatorSeparator"></span>
													<div className="absolute right-0 mr-2 top-1/2 -translate-y-1/2 css-g56vrd-indicatorContainer" aria-hidden="true">
														<svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
															<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
															</path>
														</svg>
													</div>
												</div>
											</div>
											<input type="hidden" value="General Inquiry" name="topic"/>
										</div>
									</div>

									<div className="w-full mb-4">
										<label className="block mb-2 font-semibold" for="name">Name</label>
										<input placeholder="Jane Doe" className="w-full bg-transparent border border-foreground py-1 px-2 rounded-sm" type="text" name="name"/>
									</div>

									<div className="w-full mb-4">
										<label className="block mb-2 font-semibold" for="email">Email Address</label>
										<input placeholder="jdoe@gmail.com" className="w-full bg-transparent border border-foreground py-1 px-2 rounded-sm" type="email" name="email"/>
									</div>
										<div className="w-full mb-4">
											<label className="block mb-2 font-semibold" for="message">Message</label>
											<textarea type="textarea" placeholder="Write your message here..." rows="5" className="w-full bg-transparent border border-foreground py-1 px-2 rounded-sm" name="message">

											</textarea>
										</div>
									</div>
									<button type="submit" className="rounded-full font-semibold transition-all whitespace-nowrap flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed  bg-tertiary text-dark px-4 pt-2 pb-1 md:px-8 md:pt-3 md:pb-2 text-lg hover:bg-foreground hover:text-background disabled:hover:bg-tertiary disabled:hover:text-dark">Submit</button>
							</form>
						</div>
					</section>
				</div>
			</div>
										
		<Footer />
    </main>
  )
}
