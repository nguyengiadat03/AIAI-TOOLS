import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    isRecommended?: boolean;
  };
  delay?: number;
}
export function PricingCard({ plan, delay = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-8 shadow-lg transition-all duration-300 hover:border-tech-blue hover:shadow-glow",
        plan.isRecommended ? "border-tech-blue shadow-glow" : ""
      )}
    >
      {plan.isRecommended && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-white bg-tech-blue">
            Recommended
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mt-2 text-gray-400">{plan.description}</p>
      <div className="mt-6">
        <span className="text-5xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-400">/tháng</span>
      </div>
      <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-neon-green mr-3 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Button
          size="lg"
          className={cn(
            "w-full text-lg font-semibold transition-all duration-300 hover:scale-105",
            plan.isRecommended
              ? "bg-tech-blue hover:bg-tech-blue/90 text-white"
              : "bg-gray-700 hover:bg-gray-600 text-white"
          )}
        >
          Bắt đầu ngay
        </Button>
      </div>
    </motion.div>
  );
}