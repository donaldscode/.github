import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  const posts = [
    {
      title: "WDBX & Abi: Causal Backtrace for Manufacturing",
      excerpt: "Learn how WDBX integrates digital twin simulations with real-time sensor data to trace manufacturing defects to root causes in seconds.",
      date: "2024-10-15",
      slug: "wdbx-abi-causal-backtrace",
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="section pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Technical insights on causal AI for manufacturing
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
