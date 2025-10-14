import { motion } from 'framer-motion';
interface BlogPostCardProps {
  post: {
    slug: string;
    category: string;
    title: string;
    excerpt: string;
    author: {
      name: string;
      avatar: string;
    };
    imageUrl: string;
  };
  delay?: number;
  onClick: () => void;
}
export function BlogPostCard({ post, delay = 0, onClick }: BlogPostCardProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="group text-left w-full"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-tech-blue">{post.category}</p>
        <h3 className="mt-2 text-xl font-bold text-foreground group-hover:text-neon-green transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-3 text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-foreground">{post.author.name}</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}