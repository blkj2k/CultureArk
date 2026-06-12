import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'zh';

// Comprehensive translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.vision': 'Vision',
    'nav.technology': 'Technology',
    'nav.product': 'Product',
    'nav.roadmap': 'Roadmap',
    'nav.contact': 'Contact',
    'nav.dashboard': 'Dashboard',
    'nav.admin': 'Admin',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    
    // Hero Section
    'hero.badge': 'AI Agent as a Service',
    'hero.title1': 'Awaken Culture with',
    'hero.title2': 'Intelligent Life',
    'hero.subtitle': 'Transforming vertical cultural data into interactive, commercializable AI assets. The bridge between ancient wisdom and future intelligence.',
    'hero.cta1': 'Explore Platform',
    'hero.cta2': 'View Roadmap',
    'hero.scroll': 'Scroll to Discover',
    
    // Features
    'feature.ai.title': 'Vertical AI Agents',
    'feature.ai.desc': 'Specialized AI models fine-tuned on exclusive cultural datasets like Taizong culture, delivering deep, context-aware interactions.',
    'feature.global.title': 'Global Cultural Ark',
    'feature.global.desc': 'A cross-cultural platform bringing heritage to the global stage through multi-language support and immersive digital experiences.',
    'feature.revenue.title': 'Compliant Revenue',
    'feature.revenue.desc': 'Built-in transparent revenue sharing system compliant with NZ Privacy Act 2020, ensuring fair value distribution.',
    
    // Data Section
    'data.title1': 'Cultural Data',
    'data.title2': 'Assetization',
    'data.desc': "We don't just digitize culture; we assetize it. By converting unstructured cultural knowledge into structured vector databases, we create the \"fuel\" for the next generation of AI applications.",
    'data.item1': 'High-quality data cleaning & annotation pipelines',
    'data.item2': 'Vector database construction for semantic retrieval',
    'data.item3': 'Copyright protection & value tracking system',
    'data.link': 'Learn about our technology',
    
    // Global Section
    'global.title1': 'From Heritage',
    'global.title2': 'To The World',
    'global.desc': 'CultureArk is designed from day one as a global platform. Our multi-language, multi-modal AI engine breaks down language barriers, allowing the world to access and understand deep cultural wisdom.',
    'global.stat1.value': '50%',
    'global.stat1.label': 'Revenue Share for IP Owners',
    'global.stat2.value': '24/7',
    'global.stat2.label': 'AI Availability Globally',
    
    // CTA Section
    'cta.title': 'Ready to Shape the Future of Culture?',
    'cta.desc': 'Join us in building the infrastructure for the cultural AI economy. We are open for investment and partnerships.',
    'cta.button1': 'Contact for Investment',
    'cta.button2': 'Download Whitepaper',
    
    // Product Page
    'product.title': 'Product Suite',
    'product.subtitle': 'Immersive tools for exploring, creating, and managing cultural assets.',
    'product.chat.badge': 'Interactive AI Agent',
    'product.chat.title': 'Conversational Wisdom',
    'product.chat.desc': 'Engage in deep, meaningful conversations with our Taizong Cultural Agent. Ask about history, philosophy, or art, and receive answers grounded in authentic sources.',
    'product.chat.feature1': 'Context-aware multi-turn dialogue',
    'product.chat.feature2': 'Source citation for every answer',
    'product.chat.feature3': 'Personalized learning path',
    'product.chat.note': 'The demo below showcases our cultural AI. Try asking about "The Silk Road" or "Emperor Taizong" to see the knowledge base in action.',
    'product.art.badge': 'Generative Art',
    'product.art.title': 'Visualizing Heritage',
    'product.art.desc': 'Create stunning visuals inspired by traditional aesthetics. Our image generation model understands the nuances of ink wash, calligraphy, and architectural styles.',
    'product.art.button': 'View Gallery',
    'product.dashboard.badge': 'Revenue Dashboard',
    'product.dashboard.title': 'Transparent Value',
    'product.dashboard.desc': 'For IP owners and partners, our dashboard provides real-time insights into usage, revenue generation, and global reach. Fully auditable and compliant.',
    'product.dashboard.button': 'Partner Login',
    
    // Chat Demo
    'chat.greeting': 'Greetings. I am the Taizong Cultural Guardian. Ask me about history, philosophy, or art from the Tang Dynasty era.',
    'chat.placeholder': 'Ask about Taizong culture...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    'chat.error': 'An error occurred. Please try again.',
    'chat.remaining': 'Remaining today',
    'chat.unlimited': 'Unlimited',
    'chat.limitReached': 'Daily limit reached. Please try again tomorrow.',
    
    // Vision Page
    'vision.title': 'Our Vision',
    'vision.subtitle': 'Building the infrastructure for the cultural AI economy.',
    'vision.mission.title': 'Mission',
    'vision.mission.desc': 'To preserve, protect, and propagate cultural heritage through cutting-edge AI technology, creating sustainable value for cultural IP owners while making wisdom accessible globally.',
    'vision.values.title': 'Core Values',
    'vision.values.authenticity': 'Authenticity',
    'vision.values.authenticity.desc': 'Every piece of cultural knowledge is verified and sourced from authoritative materials.',
    'vision.values.innovation': 'Innovation',
    'vision.values.innovation.desc': 'Leveraging the latest AI technologies to create unprecedented cultural experiences.',
    'vision.values.fairness': 'Fairness',
    'vision.values.fairness.desc': 'Transparent revenue sharing ensures cultural IP owners receive fair compensation.',
    'vision.values.global': 'Global Reach',
    'vision.values.global.desc': 'Breaking language barriers to share cultural wisdom with the world.',
    
    // Technology Page
    'tech.title': 'Technology',
    'tech.subtitle': 'The engine behind cultural intelligence.',
    'tech.stack.title': 'Technology Stack',
    'tech.rag.title': 'RAG Architecture',
    'tech.rag.desc': 'Retrieval-Augmented Generation ensures every response is grounded in authentic cultural sources.',
    'tech.vector.title': 'Vector Database',
    'tech.vector.desc': 'High-dimensional semantic search enables nuanced understanding of cultural context.',
    'tech.llm.title': 'Fine-tuned LLM',
    'tech.llm.desc': 'Custom language models trained on curated cultural datasets for domain expertise.',
    'tech.multimodal.title': 'Multimodal AI',
    'tech.multimodal.desc': 'Understanding and generating text, images, and audio for immersive experiences.',
    
    // Roadmap Page
    'roadmap.title': 'Roadmap',
    'roadmap.subtitle': 'Our journey to global cultural preservation.',
    'roadmap.q1.title': 'Q1 2025',
    'roadmap.q1.desc': 'Platform MVP launch with Taizong culture dataset',
    'roadmap.q2.title': 'Q2 2025',
    'roadmap.q2.desc': 'Multi-language support and partner onboarding',
    'roadmap.q3.title': 'Q3 2025',
    'roadmap.q3.desc': 'Image generation and 3D artifact visualization',
    'roadmap.q4.title': 'Q4 2025',
    'roadmap.q4.desc': 'Global expansion and additional cultural datasets',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for investment opportunities or partnership inquiries.',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company (Optional)',
    'contact.form.type': 'Inquiry Type',
    'contact.form.type.investor': 'Investor',
    'contact.form.type.partner': 'Partner',
    'contact.form.type.media': 'Media',
    'contact.form.type.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Thank you! Your message has been sent successfully.',
    'contact.form.error': 'Failed to send message. Please try again.',
    'contact.info.title': 'Contact Information',
    'contact.info.location': 'Auckland, New Zealand',
    'contact.info.hours': 'Business Hours: Mon-Fri 9:00-18:00 NZST',
    
    // Dashboard Page
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back',
    'dashboard.chatHistory': 'Chat History',
    'dashboard.favorites': 'Favorites',
    'dashboard.noChats': 'No chat sessions yet. Start a conversation on the Product page.',
    'dashboard.noFavorites': 'No favorites yet. Explore the knowledge base and save items you find interesting.',
    'dashboard.delete': 'Delete',
    'dashboard.view': 'View',
    
    // Admin Page
    'admin.title': 'Admin Panel',
    'admin.stats': 'Statistics',
    'admin.users': 'Users',
    'admin.contacts': 'Contacts',
    'admin.knowledge': 'Knowledge Base',
    'admin.activity': 'Activity Log',
    'admin.createUser': 'Create User',
    'admin.totalUsers': 'Total Users',
    'admin.totalChats': 'Total Chats',
    'admin.totalFavorites': 'Total Favorites',
    'admin.unreadContacts': 'Unread Contacts',
    
    // Footer - Platform
    'footer.platform': 'Platform',
    'footer.platform.agents': 'AI Agents',
    'footer.platform.data': 'Data Assets',
    'footer.platform.compliance': 'Compliance',
    'footer.platform.api': 'API',
    
    // Footer - Company
    'footer.company': 'Company',
    'footer.company.about': 'About',
    'footer.company.careers': 'Careers',
    'footer.company.contact': 'Contact',
    
    // Footer - Legal
    'footer.legal': 'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.terms': 'Terms of Service',
    'footer.legal.ethics': 'Data Ethics',
    
    // Footer - Copyright
    'footer.copyright': '© 2026 CultureArk NZ Limited. All rights reserved.',
    'footer.tagline': 'Bridging Ancient Wisdom and Future Intelligence',
    
    // Platform Pages
    'agents.title': 'AI Agents',
    'agents.subtitle': 'Specialized cultural AI agents powered by deep domain knowledge.',
    'agents.intro': 'Our AI agents are not generic chatbots. Each agent is meticulously trained on curated cultural datasets, enabling authentic and insightful conversations about specific cultural domains.',
    'agents.taizong.title': 'Taizong Cultural Guardian',
    'agents.taizong.desc': 'An expert in Tang Dynasty history, philosophy, and art. This agent can discuss Emperor Taizong\'s governance philosophy, the Silk Road trade, Buddhist influences, and classical Chinese poetry.',
    'agents.features.title': 'Agent Capabilities',
    'agents.features.contextual': 'Contextual Understanding',
    'agents.features.contextual.desc': 'Maintains conversation context across multiple turns for natural dialogue.',
    'agents.features.citation': 'Source Citation',
    'agents.features.citation.desc': 'Every response includes references to original cultural sources.',
    'agents.features.multilingual': 'Multilingual',
    'agents.features.multilingual.desc': 'Communicates fluently in both English and Chinese.',
    
    'dataAssets.title': 'Data Assets',
    'dataAssets.subtitle': 'Transforming cultural heritage into structured, valuable digital assets.',
    'dataAssets.intro': 'Cultural data is the foundation of our platform. We work with cultural institutions, scholars, and IP owners to digitize, structure, and protect valuable cultural knowledge.',
    'dataAssets.process.title': 'Data Processing Pipeline',
    'dataAssets.process.collection': 'Collection',
    'dataAssets.process.collection.desc': 'Partnering with museums, archives, and cultural institutions to access authentic materials.',
    'dataAssets.process.cleaning': 'Cleaning & Annotation',
    'dataAssets.process.cleaning.desc': 'Expert-led data cleaning and semantic annotation for AI training.',
    'dataAssets.process.vectorization': 'Vectorization',
    'dataAssets.process.vectorization.desc': 'Converting text and images into high-dimensional vectors for semantic search.',
    'dataAssets.process.protection': 'IP Protection',
    'dataAssets.process.protection.desc': 'Blockchain-based provenance tracking and usage monitoring.',
    
    'compliance.title': 'Compliance System',
    'compliance.subtitle': 'Built for trust, transparency, and regulatory compliance.',
    'compliance.intro': 'CultureArk is designed with compliance at its core. We adhere to international data protection standards and provide transparent revenue sharing for all stakeholders.',
    'compliance.nz.title': 'New Zealand Privacy Act 2020',
    'compliance.nz.desc': 'Full compliance with NZ privacy regulations, including data minimization, purpose limitation, and individual rights.',
    'compliance.gdpr.title': 'GDPR Ready',
    'compliance.gdpr.desc': 'Our platform is designed to meet GDPR requirements for European users and partners.',
    'compliance.revenue.title': 'Transparent Revenue Sharing',
    'compliance.revenue.desc': '50% of revenue goes directly to cultural IP owners, with real-time tracking and auditable records.',
    
    'api.title': 'API Access',
    'api.subtitle': 'Integrate cultural intelligence into your applications.',
    'api.intro': 'Our RESTful API provides programmatic access to CultureArk\'s cultural AI capabilities. Build applications that leverage our knowledge base, AI agents, and content generation features.',
    'api.endpoints.title': 'Available Endpoints',
    'api.endpoints.chat': 'Chat API',
    'api.endpoints.chat.desc': 'Conversational interface to cultural AI agents.',
    'api.endpoints.search': 'Search API',
    'api.endpoints.search.desc': 'Semantic search across cultural knowledge bases.',
    'api.endpoints.generate': 'Generation API',
    'api.endpoints.generate.desc': 'AI-powered cultural content generation.',
    'api.auth.title': 'Authentication',
    'api.auth.desc': 'API access requires authentication via API keys. Contact us for enterprise access.',
    
    // Legal Pages
    'privacy.title': 'Privacy Policy',
    'privacy.subtitle': 'How we collect, use, and protect your data.',
    'privacy.lastUpdated': 'Last Updated: January 2026',
    'privacy.intro': 'CultureArk NZ Limited ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.',
    'privacy.collection.title': 'Information We Collect',
    'privacy.collection.desc': 'We collect information you provide directly, such as account details and messages, as well as usage data to improve our services.',
    'privacy.use.title': 'How We Use Information',
    'privacy.use.desc': 'Your information is used to provide and improve our services, personalize your experience, and communicate with you about updates and offers.',
    'privacy.sharing.title': 'Information Sharing',
    'privacy.sharing.desc': 'We do not sell your personal information. We may share data with service providers who assist in operating our platform, subject to confidentiality agreements.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.desc': 'You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.desc': 'For privacy inquiries, please contact our Data Protection Officer.',
    
    'terms.title': 'Terms of Service',
    'terms.subtitle': 'Terms and conditions for using CultureArk.',
    'terms.lastUpdated': 'Last Updated: January 2026',
    'terms.intro': 'By using CultureArk, you agree to these terms. Please read them carefully.',
    'terms.use.title': 'Acceptable Use',
    'terms.use.desc': 'You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our platform to infringe on intellectual property rights or engage in harmful activities.',
    'terms.ip.title': 'Intellectual Property',
    'terms.ip.desc': 'All content on CultureArk, including AI-generated responses, is protected by intellectual property laws. Cultural content remains the property of respective IP owners.',
    'terms.liability.title': 'Limitation of Liability',
    'terms.liability.desc': 'CultureArk provides services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages arising from your use of our platform.',
    'terms.termination.title': 'Termination',
    'terms.termination.desc': 'We reserve the right to suspend or terminate accounts that violate these terms.',
    
    'ethics.title': 'Data Ethics',
    'ethics.subtitle': 'Our commitment to ethical AI and cultural preservation.',
    'ethics.intro': 'At CultureArk, we believe technology should serve humanity and preserve cultural heritage for future generations. Our data ethics framework guides every decision we make.',
    'ethics.principles.title': 'Ethical Principles',
    'ethics.principles.respect': 'Cultural Respect',
    'ethics.principles.respect.desc': 'We treat all cultural content with respect and sensitivity, working closely with cultural communities to ensure accurate representation.',
    'ethics.principles.transparency': 'Transparency',
    'ethics.principles.transparency.desc': 'We are transparent about how AI systems work and how cultural data is used.',
    'ethics.principles.fairness': 'Fair Compensation',
    'ethics.principles.fairness.desc': 'Cultural IP owners receive fair compensation for the use of their heritage.',
    'ethics.principles.preservation': 'Digital Preservation',
    'ethics.principles.preservation.desc': 'We contribute to the long-term preservation of cultural heritage through digital archiving.',
    'ethics.ai.title': 'AI Ethics',
    'ethics.ai.desc': 'Our AI systems are designed to be helpful, harmless, and honest. We continuously monitor for biases and work to ensure culturally sensitive responses.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.learnMore': 'Learn More',
  },
  zh: {
    // Navigation
    'nav.vision': '愿景',
    'nav.technology': '技术',
    'nav.product': '产品',
    'nav.roadmap': '路线图',
    'nav.contact': '联系我们',
    'nav.dashboard': '控制台',
    'nav.admin': '管理',
    'nav.login': '登录',
    'nav.logout': '退出',
    
    // Hero Section
    'hero.badge': 'AI智能体即服务',
    'hero.title1': '用智能生命',
    'hero.title2': '唤醒文化',
    'hero.subtitle': '将垂直文化数据转化为可交互、可商业化的AI资产。连接古老智慧与未来智能的桥梁。',
    'hero.cta1': '探索平台',
    'hero.cta2': '查看路线图',
    'hero.scroll': '向下滚动探索',
    
    // Features
    'feature.ai.title': '垂直AI智能体',
    'feature.ai.desc': '基于国学文化等独家文化数据集精调的专业AI模型，提供深度、上下文感知的交互体验。',
    'feature.global.title': '全球文化方舟',
    'feature.global.desc': '一个跨文化平台，通过多语言支持和沉浸式数字体验，将文化遗产带向世界舞台。',
    'feature.revenue.title': '合规收益',
    'feature.revenue.desc': '内置透明的收益分成系统，符合新西兰2020年隐私法案，确保公平的价值分配。',
    
    // Data Section
    'data.title1': '文化数据',
    'data.title2': '资产化',
    'data.desc': '我们不仅数字化文化，更将其资产化。通过将非结构化文化知识转化为结构化向量数据库，我们为下一代AI应用创造"燃料"。',
    'data.item1': '高质量数据清洗与标注流程',
    'data.item2': '语义检索向量数据库构建',
    'data.item3': '版权保护与价值追踪系统',
    'data.link': '了解我们的技术',
    
    // Global Section
    'global.title1': '从文化遗产',
    'global.title2': '走向世界',
    'global.desc': 'CultureArk从第一天起就被设计为全球平台。我们的多语言、多模态AI引擎打破语言障碍，让世界能够访问和理解深厚的文化智慧。',
    'global.stat1.value': '50%',
    'global.stat1.label': 'IP所有者收益分成',
    'global.stat2.value': '24/7',
    'global.stat2.label': '全球AI可用性',
    
    // CTA Section
    'cta.title': '准备好塑造文化的未来了吗？',
    'cta.desc': '加入我们，共同构建文化AI经济的基础设施。我们欢迎投资与合作。',
    'cta.button1': '联系投资',
    'cta.button2': '下载白皮书',
    
    // Product Page
    'product.title': '产品套件',
    'product.subtitle': '探索、创造和管理文化资产的沉浸式工具。',
    'product.chat.badge': '交互式AI智能体',
    'product.chat.title': '对话中的智慧',
    'product.chat.desc': '与我们的国学文化智能体进行深度、有意义的对话。询问历史、哲学或艺术，获得基于真实来源的回答。',
    'product.chat.feature1': '上下文感知的多轮对话',
    'product.chat.feature2': '每个回答都有来源引用',
    'product.chat.feature3': '个性化学习路径',
    'product.chat.note': '下方演示展示了我们的文化AI。尝试询问"丝绸之路"或"唐太宗"来体验知识库的实际效果。',
    'product.art.badge': '生成式艺术',
    'product.art.title': '可视化遗产',
    'product.art.desc': '创作受传统美学启发的惊艳视觉作品。我们的图像生成模型理解水墨、书法和建筑风格的细微差别。',
    'product.art.button': '查看画廊',
    'product.dashboard.badge': '收益仪表板',
    'product.dashboard.title': '透明价值',
    'product.dashboard.desc': '为IP所有者和合作伙伴提供使用情况、收益生成和全球覆盖的实时洞察。完全可审计且合规。',
    'product.dashboard.button': '合作伙伴登录',
    
    // Chat Demo
    'chat.greeting': '您好，我是文化守护者。请向我询问中国传统文化、历史、哲学或艺术。',
    'chat.placeholder': '询问国学文化...',
    'chat.send': '发送',
    'chat.thinking': '思考中...',
    'chat.error': '发生错误，请重试。',
    'chat.remaining': '今日剩余',
    'chat.unlimited': '无限制',
    'chat.limitReached': '已达到每日限制，请明天再试。',
    
    // Vision Page
    'vision.title': '我们的愿景',
    'vision.subtitle': '构建文化AI经济的基础设施。',
    'vision.mission.title': '使命',
    'vision.mission.desc': '通过尖端AI技术保护、保存和传播文化遗产，为文化IP所有者创造可持续价值，同时让智慧在全球范围内可及。',
    'vision.values.title': '核心价值观',
    'vision.values.authenticity': '真实性',
    'vision.values.authenticity.desc': '每一条文化知识都经过验证，来源于权威资料。',
    'vision.values.innovation': '创新',
    'vision.values.innovation.desc': '利用最新AI技术创造前所未有的文化体验。',
    'vision.values.fairness': '公平',
    'vision.values.fairness.desc': '透明的收益分成确保文化IP所有者获得公平补偿。',
    'vision.values.global': '全球覆盖',
    'vision.values.global.desc': '打破语言障碍，与世界分享文化智慧。',
    
    // Technology Page
    'tech.title': '技术',
    'tech.subtitle': '文化智能背后的引擎。',
    'tech.stack.title': '技术栈',
    'tech.rag.title': 'RAG架构',
    'tech.rag.desc': '检索增强生成确保每个回复都基于真实的文化来源。',
    'tech.vector.title': '向量数据库',
    'tech.vector.desc': '高维语义搜索实现对文化语境的细致理解。',
    'tech.llm.title': '微调大模型',
    'tech.llm.desc': '在精选文化数据集上训练的定制语言模型，具备领域专业知识。',
    'tech.multimodal.title': '多模态AI',
    'tech.multimodal.desc': '理解和生成文本、图像和音频，提供沉浸式体验。',
    
    // Roadmap Page
    'roadmap.title': '路线图',
    'roadmap.subtitle': '我们的全球文化保护之旅。',
    'roadmap.q1.title': '2025年第一季度',
    'roadmap.q1.desc': '平台MVP发布，包含国学文化数据集',
    'roadmap.q2.title': '2025年第二季度',
    'roadmap.q2.desc': '多语言支持和合作伙伴入驻',
    'roadmap.q3.title': '2025年第三季度',
    'roadmap.q3.desc': '图像生成和3D文物可视化',
    'roadmap.q4.title': '2025年第四季度',
    'roadmap.q4.desc': '全球扩展和更多文化数据集',
    
    // Contact Page
    'contact.title': '联系我们',
    'contact.subtitle': '如有投资机会或合作咨询，请与我们联系。',
    'contact.form.title': '发送消息',
    'contact.form.name': '姓名',
    'contact.form.email': '电子邮箱',
    'contact.form.company': '公司（可选）',
    'contact.form.type': '咨询类型',
    'contact.form.type.investor': '投资者',
    'contact.form.type.partner': '合作伙伴',
    'contact.form.type.media': '媒体',
    'contact.form.type.other': '其他',
    'contact.form.message': '留言',
    'contact.form.submit': '发送消息',
    'contact.form.success': '感谢您！您的消息已成功发送。',
    'contact.form.error': '发送失败，请重试。',
    'contact.info.title': '联系信息',
    'contact.info.location': '新西兰奥克兰',
    'contact.info.hours': '工作时间：周一至周五 9:00-18:00 NZST',
    
    // Dashboard Page
    'dashboard.title': '控制台',
    'dashboard.welcome': '欢迎回来',
    'dashboard.chatHistory': '聊天记录',
    'dashboard.favorites': '收藏夹',
    'dashboard.noChats': '暂无聊天记录。请在产品页面开始对话。',
    'dashboard.noFavorites': '暂无收藏。探索知识库并保存您感兴趣的内容。',
    'dashboard.delete': '删除',
    'dashboard.view': '查看',
    
    // Admin Page
    'admin.title': '管理面板',
    'admin.stats': '统计',
    'admin.users': '用户',
    'admin.contacts': '联系信息',
    'admin.knowledge': '知识库',
    'admin.activity': '活动日志',
    'admin.createUser': '创建用户',
    'admin.totalUsers': '总用户数',
    'admin.totalChats': '总对话数',
    'admin.totalFavorites': '总收藏数',
    'admin.unreadContacts': '未读联系',
    
    // Footer - Platform
    'footer.platform': '平台',
    'footer.platform.agents': 'AI智能体',
    'footer.platform.data': '数据资产',
    'footer.platform.compliance': '合规体系',
    'footer.platform.api': 'API接口',
    
    // Footer - Company
    'footer.company': '公司',
    'footer.company.about': '关于我们',
    'footer.company.careers': '加入我们',
    'footer.company.contact': '联系我们',
    
    // Footer - Legal
    'footer.legal': '法律',
    'footer.legal.privacy': '隐私政策',
    'footer.legal.terms': '服务条款',
    'footer.legal.ethics': '数据伦理',
    
    // Footer - Copyright
    'footer.copyright': '© 2026 CultureArk NZ Limited. 保留所有权利。',
    'footer.tagline': '连接古老智慧与未来智能',
    
    // Platform Pages
    'agents.title': 'AI智能体',
    'agents.subtitle': '由深度领域知识驱动的专业文化AI智能体。',
    'agents.intro': '我们的AI智能体不是通用聊天机器人。每个智能体都在精选的文化数据集上精心训练，能够就特定文化领域进行真实而有洞察力的对话。',
    'agents.taizong.title': '国学文化守护者',
    'agents.taizong.desc': '中国传统文化、历史、哲学和艺术专家。这个智能体可以讨论儒家思想、道家哲学、丝绸之路贸易、佛教影响和古典诗词。',
    'agents.features.title': '智能体能力',
    'agents.features.contextual': '上下文理解',
    'agents.features.contextual.desc': '在多轮对话中保持上下文，实现自然对话。',
    'agents.features.citation': '来源引用',
    'agents.features.citation.desc': '每个回复都包含对原始文化来源的引用。',
    'agents.features.multilingual': '多语言',
    'agents.features.multilingual.desc': '流利地使用中英文进行交流。',
    
    'dataAssets.title': '数据资产',
    'dataAssets.subtitle': '将文化遗产转化为结构化、有价值的数字资产。',
    'dataAssets.intro': '文化数据是我们平台的基础。我们与文化机构、学者和IP所有者合作，对有价值的文化知识进行数字化、结构化和保护。',
    'dataAssets.process.title': '数据处理流程',
    'dataAssets.process.collection': '采集',
    'dataAssets.process.collection.desc': '与博物馆、档案馆和文化机构合作，获取真实材料。',
    'dataAssets.process.cleaning': '清洗与标注',
    'dataAssets.process.cleaning.desc': '专家主导的数据清洗和语义标注，用于AI训练。',
    'dataAssets.process.vectorization': '向量化',
    'dataAssets.process.vectorization.desc': '将文本和图像转换为高维向量，用于语义搜索。',
    'dataAssets.process.protection': 'IP保护',
    'dataAssets.process.protection.desc': '基于区块链的来源追踪和使用监控。',
    
    'compliance.title': '合规体系',
    'compliance.subtitle': '为信任、透明和监管合规而构建。',
    'compliance.intro': 'CultureArk的设计以合规为核心。我们遵守国际数据保护标准，为所有利益相关者提供透明的收益分成。',
    'compliance.nz.title': '新西兰2020年隐私法',
    'compliance.nz.desc': '完全符合新西兰隐私法规，包括数据最小化、目的限制和个人权利。',
    'compliance.gdpr.title': 'GDPR就绪',
    'compliance.gdpr.desc': '我们的平台旨在满足欧洲用户和合作伙伴的GDPR要求。',
    'compliance.revenue.title': '透明收益分成',
    'compliance.revenue.desc': '50%的收入直接归文化IP所有者，提供实时追踪和可审计记录。',
    
    'api.title': 'API接口',
    'api.subtitle': '将文化智能集成到您的应用程序中。',
    'api.intro': '我们的RESTful API提供对CultureArk文化AI能力的程序化访问。构建利用我们知识库、AI智能体和内容生成功能的应用程序。',
    'api.endpoints.title': '可用端点',
    'api.endpoints.chat': '对话API',
    'api.endpoints.chat.desc': '与文化AI智能体的对话接口。',
    'api.endpoints.search': '搜索API',
    'api.endpoints.search.desc': '跨文化知识库的语义搜索。',
    'api.endpoints.generate': '生成API',
    'api.endpoints.generate.desc': 'AI驱动的文化内容生成。',
    'api.auth.title': '认证',
    'api.auth.desc': 'API访问需要通过API密钥进行认证。请联系我们获取企业访问权限。',
    
    // Legal Pages
    'privacy.title': '隐私政策',
    'privacy.subtitle': '我们如何收集、使用和保护您的数据。',
    'privacy.lastUpdated': '最后更新：2026年1月',
    'privacy.intro': 'CultureArk NZ Limited（"我们"）致力于保护您的隐私。本政策说明我们如何收集、使用和保护您的个人信息。',
    'privacy.collection.title': '我们收集的信息',
    'privacy.collection.desc': '我们收集您直接提供的信息，如账户详情和消息，以及用于改进服务的使用数据。',
    'privacy.use.title': '信息使用方式',
    'privacy.use.desc': '您的信息用于提供和改进我们的服务、个性化您的体验，以及就更新和优惠与您沟通。',
    'privacy.sharing.title': '信息共享',
    'privacy.sharing.desc': '我们不出售您的个人信息。我们可能与协助运营平台的服务提供商共享数据，但须遵守保密协议。',
    'privacy.rights.title': '您的权利',
    'privacy.rights.desc': '您有权访问、更正或删除您的个人信息。请联系我们行使这些权利。',
    'privacy.contact.title': '联系我们',
    'privacy.contact.desc': '如有隐私咨询，请联系我们的数据保护官。',
    
    'terms.title': '服务条款',
    'terms.subtitle': '使用CultureArk的条款和条件。',
    'terms.lastUpdated': '最后更新：2026年1月',
    'terms.intro': '使用CultureArk即表示您同意这些条款。请仔细阅读。',
    'terms.use.title': '可接受的使用',
    'terms.use.desc': '您同意仅将我们的服务用于合法目的，并遵守这些条款。您不得使用我们的平台侵犯知识产权或从事有害活动。',
    'terms.ip.title': '知识产权',
    'terms.ip.desc': 'CultureArk上的所有内容，包括AI生成的回复，均受知识产权法保护。文化内容仍归各自IP所有者所有。',
    'terms.liability.title': '责任限制',
    'terms.liability.desc': 'CultureArk"按原样"提供服务，不提供任何保证。我们不对因您使用平台而产生的间接、附带或后果性损害承担责任。',
    'terms.termination.title': '终止',
    'terms.termination.desc': '我们保留暂停或终止违反这些条款的账户的权利。',
    
    'ethics.title': '数据伦理',
    'ethics.subtitle': '我们对伦理AI和文化保护的承诺。',
    'ethics.intro': '在CultureArk，我们相信技术应该服务于人类，并为后代保护文化遗产。我们的数据伦理框架指导我们做出的每一个决定。',
    'ethics.principles.title': '伦理原则',
    'ethics.principles.respect': '文化尊重',
    'ethics.principles.respect.desc': '我们以尊重和敏感的态度对待所有文化内容，与文化社区密切合作，确保准确的呈现。',
    'ethics.principles.transparency': '透明',
    'ethics.principles.transparency.desc': '我们对AI系统的工作方式和文化数据的使用方式保持透明。',
    'ethics.principles.fairness': '公平补偿',
    'ethics.principles.fairness.desc': '文化IP所有者因其遗产的使用而获得公平补偿。',
    'ethics.principles.preservation': '数字保护',
    'ethics.principles.preservation.desc': '我们通过数字存档为文化遗产的长期保护做出贡献。',
    'ethics.ai.title': 'AI伦理',
    'ethics.ai.desc': '我们的AI系统被设计为有帮助、无害和诚实的。我们持续监控偏见，并努力确保文化敏感的回复。',
    
    // Common
    'common.loading': '加载中...',
    'common.error': '发生错误',
    'common.save': '保存',
    'common.cancel': '取消',
    'common.confirm': '确认',
    'common.back': '返回',
    'common.next': '下一步',
    'common.learnMore': '了解更多',
  }
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'en' || saved === 'zh')) return saved;
      // Auto-detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) return 'zh';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
