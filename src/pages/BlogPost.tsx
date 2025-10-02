import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  image_url: string | null;
  created_at: string;
  author_id: string;
  profiles: {
    display_name: string | null;
    username: string;
  };
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select(`
          *,
          profiles (
            display_name,
            username
          )
        `)
        .eq("id", id)
        .eq("published", true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </>
    );
  }

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
                {post.read_time}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By {post.profiles.display_name || post.profiles.username}</span>
              <span>•</span>
              <time>{formatDate(post.created_at)}</time>
            </div>
          </div>

          {post.image_url && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={post.image_url} 
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
