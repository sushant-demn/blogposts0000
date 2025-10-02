import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Post Not Found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <article className="min-h-screen">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <Link to="/" className="inline-block mb-8">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary px-3 py-1 bg-accent rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <time className="text-muted-foreground">{post.date}</time>
          </div>

          {post.image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-serif font-bold mt-12 mb-6 first:mt-0">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-serif font-semibold mt-10 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-serif font-semibold mt-8 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-6 leading-relaxed text-foreground/90">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-6 space-y-2 list-disc list-inside">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="leading-relaxed text-foreground/90">{children}</li>
                ),
                em: ({ children }) => (
                  <em className="text-primary font-medium">{children}</em>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Read more posts
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
