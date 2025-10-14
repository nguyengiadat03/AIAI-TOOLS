import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
interface CaseStudyCardProps {
  caseStudy: {
    clientLogo: string;
    industry: string;
    challenge: string;
    solution: string;
    results: {
      value: string;
      label: string;
    }[];
  };
  delay?: number;
}
export function CaseStudyCard({ caseStudy, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <img src={caseStudy.clientLogo} alt="Client Logo" className="h-8" />
        <span className="text-xs font-semibold text-neon-green bg-neon-green/10 px-2 py-1 rounded-full">{caseStudy.industry}</span>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-white">Thách thức</h4>
        <p className="text-sm text-gray-400 mt-1">{caseStudy.challenge}</p>
      </div>
      <div className="mb-6">
        <h4 className="font-bold text-white">Giải pháp</h4>
        <p className="text-sm text-gray-400 mt-1">{caseStudy.solution}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-800">
        <h4 className="font-bold text-white mb-3">Kết quả</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          {caseStudy.results.map(result => (
            <div key={result.label}>
              <p className="text-2xl font-bold text-tech-blue">{result.value}</p>
              <p className="text-xs text-gray-400">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}