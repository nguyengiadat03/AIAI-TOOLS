import { Facebook, MessageSquare, Bot, Mail, Code, PenTool, BarChart, BrainCircuit } from 'lucide-react';
export const productIcons = {
  "AI Facebook Automation": Facebook,
  "AI Zalo & Care Automation": MessageSquare,
  "AI TikTok & Channel Booster": Bot,
  "AI Email & CRM Assistant": Mail,
  "AI Chatbot/Voicebot": Bot,
  "API AI Đa tác vụ": Code,
  'AI Content Generator': PenTool,
  'AI Data Assistant': BarChart,
  'AI Automation Tools': BrainCircuit
};
export const solutionsData = [
  {
    slug: 'ai-facebook-automation',
    title: "AI Facebook Automation",
    description: "Tự động hóa tương tác và chăm sóc khách hàng trên Facebook.",
    Icon: Facebook,
    details: {
      useCases: ["Trả lời bình luận/tin nhắn tự động", "Phân loại khách hàng tiềm năng", "Lên lịch bài viết", "B��o cáo hiệu quả chiến dịch"],
      features: ["Xử lý ngôn ngữ tự nhiên (NLP)", "Tích hợp Messenger Platform", "Phân tích cảm xúc", "Học máy để cải thiện tương tác"],
      pricingTiers: {
        Basic: ["1 Fanpage", "10,000 tương tác/tháng"],
        Pro: ["5 Fanpages", "50,000 tương tác/tháng", "Tích hợp CRM"],
        Enterprise: ["Không giới hạn", "Tùy chỉnh theo yêu cầu", "Hỗ trợ riêng"]
      }
    }
  },
  {
    slug: 'ai-zalo-care-automation',
    title: "AI Zalo & Care Automation",
    description: "Tối ưu hóa quy trình chăm sóc khách hàng qua Zalo.",
    Icon: MessageSquare,
    details: {
      useCases: ["Gửi tin nhắn chăm sóc tự động", "Tạo Zalo Mini App với AI", "Quản lý Zalo OA hiệu quả", "Phân tích hành vi người dùng"],
      features: ["API Zalo Official Account", "Chatbot tích hợp Zalo", "Gửi tin nhắn hàng loạt cá nhân hóa", "Báo cáo chi tiết"],
      pricingTiers: {
        Basic: ["1 Zalo OA", "5,000 tin nhắn/tháng"],
        Pro: ["3 Zalo OAs", "25,000 tin nhắn/tháng", "Tích hợp CRM"],
        Enterprise: ["Không giới hạn", "Tùy chỉnh Mini App", "Hỗ trợ riêng"]
      }
    }
  },
  {
    slug: 'ai-tiktok-channel-booster',
    title: "AI TikTok & Channel Booster",
    description: "Tăng trưởng kênh TikTok với nội dung và tương tác AI.",
    Icon: Bot,
    details: {
      useCases: ["Gợi ý kịch bản video trending", "Tự động tạo phụ đề", "Phân tích hiệu quả video", "Tương tác với bình luận"],
      features: ["Phân tích xu hướng TikTok", "AI tạo sinh video ngắn", "Nhận diện âm nhạc trending", "Phân tích đối thủ"],
      pricingTiers: {
        Basic: ["1 kênh TikTok", "10 video/tháng"],
        Pro: ["5 kênh TikTok", "50 video/tháng", "Phân tích đối thủ"],
        Enterprise: ["Không giới hạn", "API tích hợp", "Hỗ trợ riêng"]
      }
    }
  },
  {
    slug: 'ai-email-crm-assistant',
    title: "AI Email & CRM Assistant",
    description: "Trợ lý ảo thông minh cho Email Marketing và quản lý CRM.",
    Icon: Mail,
    details: {
      useCases: ["Tự động soạn thảo email marketing", "Phân loại và chấm điểm lead", "Cá nhân hóa nội dung email", "Dự báo doanh thu"],
      features: ["Tích hợp SendGrid, HubSpot", "AI phân tích nội dung email", "Tự động hóa workflow", "Báo cáo A/B testing"],
      pricingTiers: {
        Basic: ["10,000 email/tháng", "Tích hợp cơ bản"],
        Pro: ["50,000 email/tháng", "Chấm điểm lead", "A/B testing"],
        Enterprise: ["Không giới hạn", "Tích hợp API tùy chỉnh", "Hỗ trợ riêng"]
      }
    }
  },
  {
    slug: 'ai-chatbot-voicebot',
    title: "AI Chatbot/Voicebot",
    description: "Bot trò chuyện và gọi thoại tự động, hoạt động 24/7.",
    Icon: Bot,
    details: {
      useCases: ["Hỗ trợ khách hàng 24/7", "Tiếp nhận và xử lý đơn hàng", "Đặt lịch hẹn tự động", "Khảo sát khách hàng"],
      features: ["Xử lý ngôn ngữ tự nhiên đa kênh", "Nhận dạng giọng nói", "Tích hợp tổng đài (Voicebot)", "Quản lý lịch sử hội thoại"],
      pricingTiers: {
        Basic: ["1 bot", "1,000 hội thoại/tháng"],
        Pro: ["5 bot", "10,000 hội thoại/tháng", "Tích hợp CRM"],
        Enterprise: ["Không giới hạn", "Tùy chỉnh luồng hội thoại", "Hỗ trợ riêng"]
      }
    }
  },
  {
    slug: 'api-ai-multi-task',
    title: "API AI Đa tác vụ",
    description: "Tích hợp sức mạnh AI vào hệ thống của bạn qua API linh hoạt.",
    Icon: Code,
    details: {
      useCases: ["Xử lý ảnh và video", "Phân tích văn bản và dữ liệu", "Tạo sinh nội dung", "Tích hợp vào ứng dụng di động/web"],
      features: ["API Gateway tốc độ cao", "Truy cập các mô hình GPT, Gemini", "SDK hỗ trợ đa ngôn ngữ", "T��i liệu chi tiết"],
      pricingTiers: {
        Basic: ["100,000 request/tháng", "Các mô hình cơ bản"],
        Pro: ["1,000,000 request/tháng", "Các mô hình nâng cao"],
        Enterprise: ["Không giới hạn", "SLA riêng", "Hỗ trợ kỹ thuật 24/7"]
      }
    }
  }
];
export const pricingPlans = [
  { name: 'Basic', price: 'Liên hệ', description: 'Dành cho SMEs và các đội nhóm nhỏ muốn bắt đầu với AI.', features: ['1 Trợ lý AI cơ bản', 'Tự động hóa 1 kênh (Facebook hoặc Zalo)', '1,000 tương tác/tháng', 'Hỗ trợ qua email'] },
  { name: 'Pro', price: 'Liên hệ', description: 'Dành cho doanh nghiệp đang phát triển, cần giải pháp toàn diện hơn.', features: ['3 Trợ lý AI chuyên biệt', 'Tự động hóa 3 kênh', '10,000 tương tác/tháng', 'Tích hợp CRM cơ bản', 'Hỗ trợ ưu tiên'], isRecommended: true },
  { name: 'Enterprise', price: 'Liên hệ', description: 'Giải pháp tùy chỉnh, tích hợp sâu với hệ thống doanh nghiệp.', features: ['Trợ lý AI không giới hạn', 'Tự động hóa đa kênh', 'Tương tác không giới hạn', 'Tích hợp API/CRM riêng', 'Hỗ trợ chuyên biệt 24/7'] }
];
export const caseStudies = {
  'real-estate': { clientLogo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg', industry: 'Bất động sản', challenge: 'Tốn nhiều thời gian sàng lọc khách hàng tiềm năng và chăm sóc khách hàng sau bán.', solution: 'Triển khai AI Chatbot trên website và Facebook để trả lời tự động, thu thập thông tin và đặt lịch hẹn.', results: [{ value: '+40%', label: 'Tăng tỷ lệ chuyển đổi' }, { value: '-60%', label: 'Giảm thời gian chờ' }] },
  'education': { clientLogo: 'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg', industry: 'Giáo dục', challenge: 'Quá tải trong việc tư vấn tuyển sinh và hỗ trợ học viên qua nhiều kênh.', solution: 'Sử dụng AI Voicebot cho các cuộc gọi tư vấn ban đầu và AI Chatbot để giải đáp thắc mắc 24/7.', results: [{ value: 'x3', label: 'Khả năng xử lý truy vấn' }, { value: '95%', label: 'Hài lòng của học viên' }] },
  'ecommerce': { clientLogo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg', industry: 'TMĐT', challenge: 'Tỷ lệ bỏ giỏ hàng cao và khó khăn trong việc cá nhân hóa trải nghiệm mua sắm.', solution: 'Áp dụng AI Email & CRM Assistant để gửi email nhắc nhở giỏ hàng, đề xuất sản phẩm liên quan.', results: [{ value: '+25%', label: 'Tăng doanh thu' }, { value: '-30%', label: 'Giảm tỷ lệ bỏ giỏ hàng' }] },
  'finance': { clientLogo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg', industry: 'Tài chính', challenge: 'Quy trình thẩm định và hỗ trợ khách hàng vay vốn phức tạp, tốn thời gian.', solution: 'Tích hợp API AI để tự động phân tích hồ sơ, chấm điểm tín dụng và trả lời các câu hỏi thường gặp.', results: [{ value: 'x5', label: 'Tăng tốc độ xử lý' }, { value: '-70%', label: 'Giảm chi phí vận hành' }] }
};
export const blogPosts = [
  {
    slug: 'ai-in-marketing',
    category: 'Ứng dụng AI',
    title: 'AI đã thay đổi ngành Marketing như thế nào?',
    excerpt: 'Khám phá cách trí tuệ nhân tạo đang tạo ra một cuộc cách mạng trong việc tiếp cận và tương tác với khách hàng.',
    author: { name: 'Alex Doe', avatar: 'https://i.pravatar.cc/150?u=alex' },
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-2858200f745a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    slug: 'future-of-automation',
    category: 'Công nghệ AI',
    title: 'Tương lai của tự động hóa: Xa hơn cả Chatbot',
    excerpt: 'Từ trợ lý ảo cá nhân đến quản lý quy trình phức tạp, AI đang định hình lại tương lai của tự động hóa doanh nghiệp.',
    author: { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?u=jane' },
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    slug: 'customer-success-story',
    category: 'Câu chuyện thành công',
    title: 'Case Study: Doanh nghiệp X tăng 50% doanh thu nhờ AI',
    excerpt: 'Tìm hiểu cách m���t doanh nghiệp trong ngành bán lẻ đã áp dụng thành công giải pháp AI của chúng tôi để t��i ưu hóa vận hành.',
    author: { name: 'Sam Wilson', avatar: 'https://i.pravatar.cc/150?u=sam' },
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  }
];
export const faqs = [
  { q: 'Thời gian triển khai giải pháp AI là bao lâu?', a: 'Chúng tôi cam kết triển khai các giải pháp cơ bản trong vòng 7 ngày. Đối với các yêu cầu phức tạp và tích hợp sâu, thời gian sẽ được thảo luận cụ thể sau buổi tư vấn.' },
  { q: 'Giải pháp của AIAI TOOLS có thể tích hợp với hệ thống CRM hiện tại của chúng tôi không?', a: 'Có, chúng tôi hỗ trợ tích hợp với nhiều hệ thống CRM phổ biến. Gói Enterprise cho phép tích hợp tùy chỉnh sâu với API và hệ thống riêng của bạn.' },
  { q: 'Chi phí cho các giải pháp AI là bao nhiêu?', a: 'Chi phí phụ thuộc vào quy mô và mức độ phức tạp của giải pháp bạn chọn. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết và tư vấn gói phù hợp nhất.' },
  { q: 'Chúng tôi có cần đội ngũ kỹ thuật chuyên biệt để vận hành không?', a: 'Không cần thiết. Các giải pháp của chúng tôi được thiết kế để người dùng không chuyên về kỹ thuật cũng có thể dễ dàng sử dụng. Chúng tôi cũng cung cấp chương trình đào tạo chi tiết cho đội ngũ của bạn.' }
];