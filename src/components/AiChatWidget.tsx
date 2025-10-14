import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User, Clock, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { chatService, formatTime, renderToolCall } from '@/lib/chat';
import type { ChatState } from '../../worker/types';
import { cn } from '@/lib/utils';
export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    sessionId: chatService.getSessionId(),
    isProcessing: false,
    model: 'google-ai-studio/gemini-2.5-flash',
    streamingMessage: ''
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      const loadMessages = async () => {
        const response = await chatService.getMessages();
        if (response.success && response.data) {
          setChatState(response.data);
        }
      };
      loadMessages();
    }
  }, [isOpen]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatState.messages, chatState.streamingMessage, chatState.isProcessing]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatState.isProcessing) return;
    const message = input.trim();
    setInput('');
    const userMessage = { id: crypto.randomUUID(), role: 'user' as const, content: message, timestamp: Date.now() };
    setChatState(prev => ({ ...prev, messages: [...prev.messages, userMessage], streamingMessage: '' }));
    await chatService.sendMessage(message, chatState.model, (chunk) => {
      setChatState(prev => ({ ...prev, streamingMessage: (prev.streamingMessage || '') + chunk }));
    });
    const response = await chatService.getMessages();
    if (response.success && response.data) {
      setChatState(response.data);
    }
  };
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-tech-blue hover:bg-tech-blue/90 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md h-[70vh] bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col border border-gray-700"
          >
            <header className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-tech-blue" />
                <h3 className="text-lg font-bold text-white">AI Assistant</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </header>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatState.messages.map((msg) => (
                <div key={msg.id} className={cn("flex", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn("max-w-[85%] p-3 rounded-xl", msg.role === 'user' ? 'bg-tech-blue text-white' : 'bg-gray-800 text-gray-200')}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.toolCalls && msg.toolCalls.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-current/20">
                        <div className="flex items-center gap-1 text-xs opacity-70"><Wrench className="w-3 h-3" /> Tools used:</div>
                        {msg.toolCalls.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="mr-1 mb-1 text-xs bg-gray-700 text-gray-300">{renderToolCall(tool)}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="text-xs opacity-60 mt-1 text-right">{formatTime(msg.timestamp)}</div>
                  </div>
                </div>
              ))}
              {chatState.streamingMessage && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-200 p-3 rounded-xl max-w-[85%]">
                    <p className="whitespace-pre-wrap">{chatState.streamingMessage}<span className="animate-pulse">|</span></p>
                  </div>
                </div>
              )}
              {chatState.isProcessing && !chatState.streamingMessage && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 p-3 rounded-xl">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map(i => <div key={i} className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />)}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-800 border-gray-700 text-white focus:ring-tech-blue"
                  disabled={chatState.isProcessing}
                />
                <Button type="submit" disabled={!input.trim() || chatState.isProcessing}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}