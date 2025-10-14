import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative p-6 bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-ai-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}