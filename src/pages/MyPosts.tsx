import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus, Trash2, Edit } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  published: boolean;
  created_at: string;
}

const MyPosts = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("author_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast.error("Error loading posts");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);

      if (error) throw error;

      setPosts(posts.filter((post) => post.id !== id));
      toast.success("Post deleted successfully");
    } catch (error: any) {
      toast.error("Error deleting post");
    }
  };

  if (authLoading || loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2">My Posts</h1>
            <p className="text-muted-foreground">Manage your blog posts</p>
          </div>
          <Link to="/create-post">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {posts.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">You haven't created any posts yet</p>
            <Link to="/create-post">
              <Button>Create Your First Post</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={post.published ? "default" : "secondary"}>
                      {post.published ? "Published" : "Draft"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Link to={`/edit-post/${post.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                    className="gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyPosts;
