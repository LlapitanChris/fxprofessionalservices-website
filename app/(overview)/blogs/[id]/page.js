/* eslint-disable @next/next/inline-script-id */
"use client"
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import mermaid from 'mermaid'
import { Fragment, useEffect, useRef, useState } from 'react'


export default function Blog(blogPostFile, children) {
	const ref = useRef();

	const [blogPost, setBlogPost] = useState(null)
	const [markDown, setMarkDown] = useState(Fragment)

	useEffect(() => {
		const fetchData = async () => {
		  const response = await fetch(`/api?blogpost=${blogPostFile.params.id}`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
			  }
		  });
		  const result = await response.json();
		  setBlogPost(result);
		};
	
		fetchData();
	  }, []);

	  console.log(ref.current)

	  useEffect(() => {
		const initializeMermaid = async () => {
			mermaid.initialize({ startOnLoad: true });
			
			await mermaid.run({
				querySelector: ".language-mermaid"
			})
			
			console.log(mermaid)
			
		}
		// mermaid.contentLoaded()
		initializeMermaid()
	  },[])


console.log(blogPost)

  return (
	<>
		
    <main>
        <Navbar active={'/blogs'}/>

        <div className='mt-[200px] mb-[150px] rounded-bl-[3rem] w-[70%] mx-auto text-white prose prose-invert mermaid'>
			<div ref={ref} dangerouslySetInnerHTML={{ __html: blogPost?.data?.contentHtml }} />

			{/* <ReactMarkdown children={blogPost?.data?.contentMarkdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>	
			</ReactMarkdown> */}
			
						
        </div>
        
        <Footer />
    </main>
	{/* <Script strategy="afterInteractive" key={blogPostFile.params.id} type='module'
		dangerouslySetInnerHTML={{
			__html: `
			import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
			mermaid.initialize({ startOnLoad: true, logLevel: "error", });
			window.addEventListener("DOMContentLoaded", async () => {
					await mermaid.run({
						querySelector: ".language-mermaid"
					});
			});
					console.log(mermaid)
			`
		}}
	/> */}


	</>
  )
}
