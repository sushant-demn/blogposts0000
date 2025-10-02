import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-blog.jpg";
import { Loader2 } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string | null;
  created_at: string;
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
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

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
              Thoughtful Writing for Mindful Living
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Exploring minimalism, mindfulness, and the art of living intentionally
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest Posts</h2>
            <p className="text-muted-foreground text-lg">
              Curated thoughts on simple, intentional living
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={formatDate(post.created_at)}
                  readTime={post.read_time}
                  category={post.category}
                  image={post.image_url || undefined}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Minimalist Blog. Crafted with intention.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
