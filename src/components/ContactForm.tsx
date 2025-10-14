import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }
      setStatus('success');
      toast.success('Message sent!', { description: "We'll get back to you shortly." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      toast.error('Submission failed', { description: error instanceof Error ? error.message : 'Please try again later.' });
    }
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <Label htmlFor="name" className="text-gray-300">Họ v�� tên</Label>
        <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="mt-2 bg-gray-800 border-gray-700 text-white focus:ring-tech-blue" />
      </div>
      <div>
        <Label htmlFor="email" className="text-gray-300">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required className="mt-2 bg-gray-800 border-gray-700 text-white focus:ring-tech-blue" />
      </div>
      <div>
        <Label htmlFor="message" className="text-gray-300">Nội dung</Label>
        <Textarea id="message" placeholder="Nội dung tin nhắn của bạn..." rows={5} value={formData.message} onChange={handleChange} required className="mt-2 bg-gray-800 border-gray-700 text-white focus:ring-tech-blue" />
      </div>
      <Button type="submit" size="lg" className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-semibold text-lg" disabled={status === 'loading'}>
        {status === 'loading' ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Gửi tin nhắn'}
      </Button>
    </motion.form>
  );
}