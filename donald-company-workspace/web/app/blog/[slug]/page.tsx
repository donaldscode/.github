import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPost({ params }: { params: { slug: string } }) {
  let blogContent = "";
  
  try {
    const blogPath = path.join(process.cwd(), '..', 'outputs', 'technical_blog.md');
    blogContent = fs.readFileSync(blogPath, 'utf8');
  } catch (error) {
    blogContent = `# Blog Post

This blog post is being prepared. Check back soon!`;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="section pt-24">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <ReactMarkdown>{blogContent}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'wdbx-abi-causal-backtrace' }
  ];
}
