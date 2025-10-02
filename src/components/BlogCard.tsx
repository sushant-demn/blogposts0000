import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const BlogCard = ({ id, title, excerpt, date, readTime, category, image }: BlogCardProps) => {
  return (
    <Link to={`/post/${id}`} className="group">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border h-full">
        {image && (
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="pt-6 pb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-primary px-3 py-1 bg-accent rounded-full">
              {category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
          <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h2>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0 pb-6">
          <time className="text-sm text-muted-foreground">{date}</time>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
