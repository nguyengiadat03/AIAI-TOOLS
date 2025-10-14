import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
export function BlogDetailModal({ post, isOpen, onClose }: { post: any, isOpen: boolean, onClose: () => void }) {
  if (!post) return null;
  // Mock content for demonstration
  const fullContent = `
    <p>${post.excerpt}</p>
    <br/>
    <p>In today's competitive landscape, leveraging Artificial Intelligence is no longer a luxury but a necessity for businesses aiming to stay ahead. The capabilities of AI, especially in automation, are transforming industries by enhancing efficiency, reducing costs, and unlocking new opportunities for growth.</p>
    <br/>
    <h3 class="text-xl font-bold mt-4 mb-2">The Core of AI Automation</h3>
    <p>At its heart, AI automation involves using intelligent systems to perform tasks that traditionally required human intellect. This ranges from simple data entry and customer service queries to complex data analysis and strategic decision-making. Our solutions at AIAI TOOLS are designed to integrate seamlessly into your existing workflows, amplifying your team's capabilities without requiring extensive technical expertise.</p>
    <br/>
    <h3 class="text-xl font-bold mt-4 mb-2">Impact on Marketing and Sales</h3>
    <p>One of the most significant impacts of AI is seen in marketing and sales. AI algorithms can analyze vast amounts of customer data to identify patterns, predict behavior, and personalize marketing messages at a scale previously unimaginable. This leads to higher conversion rates, increased customer loyalty, and a more profound understanding of your target audience.</p>
    <br/>
    <p>By implementing tools like our AI Email & CRM Assistant, businesses can automate follow-ups, segment audiences with precision, and deliver the right message to the right person at the right time, every time.</p>
  `;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[825px] h-[90vh] flex flex-col bg-background text-foreground border-border">
        <DialogHeader className="flex-shrink-0">
          <p className="text-sm font-semibold text-tech-blue">{post.category}</p>
          <DialogTitle className="text-3xl font-bold">{post.title}</DialogTitle>
          <DialogDescription>
            <div className="flex items-center gap-3 mt-2">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-foreground">{post.author.name}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow relative mt-4">
          <ScrollArea className="absolute inset-0 pr-6">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: fullContent }} />
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}