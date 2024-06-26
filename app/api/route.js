import fs from "fs";
import matter from 'gray-matter';
import { NextResponse } from "next/server";
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

// To handle a GET request to /api
export async function GET(request) {
	const testFolder = path.join(process.cwd(), '/public/markdown_blogs')
	let files = [];
	
	fs.readdirSync(testFolder).forEach(file => {
		if (path.extname(file) === '.md') {
			let fileName = path.basename(file, '.md')
			files.push({
				// id: uuidv4(),
				fileName,
				file
			});
		}
	});
 
  return NextResponse.json({ data: files }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req) {
	const { searchParams } = new URL(req.url);
	const fileName = searchParams.get("blogpost");


		const fullPath = path.join(process.cwd(), `/public/markdown_blogs/${fileName}.md`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
	  
		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);
	  
		// Use remark to convert markdown into HTML string
		const processedContent = await remark()
		  .use(html)
		  .process(matterResult.content);
		const contentHtml = processedContent.toString();
	  
		// Combine the data with the id and contentHtml
		const blogpost = {
		  fileName,
		  contentHtml,
		  ...matterResult.data,
		};

		
  return NextResponse.json({ data: blogpost }, { status: 200 });
}
