import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Blogga qaytish
              </Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Tag className="w-3 h-3" />
                {post.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-strong:text-foreground"
          >
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return <h2 key={i}>{trimmed.slice(3)}</h2>;
              if (trimmed.startsWith("### "))
                return <h3 key={i}>{trimmed.slice(4)}</h3>;
              if (trimmed.startsWith("- **"))
                return (
                  <li key={i} className="list-disc ml-4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: trimmed
                          .slice(2)
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </li>
                );
              if (trimmed.startsWith("- "))
                return (
                  <li key={i} className="list-disc ml-4">
                    {trimmed.slice(2)}
                  </li>
                );
              if (trimmed.startsWith("| ")) {
                return (
                  <p key={i} className="text-sm text-muted-foreground font-mono">
                    {trimmed}
                  </p>
                );
              }
              if (trimmed.startsWith("**"))
                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: trimmed.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                );
              return <p key={i}>{trimmed}</p>;
            })}
          </motion.article>

          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Barcha maqolalar
                </Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Agro Bot ni sinab ko'ring</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticle;
