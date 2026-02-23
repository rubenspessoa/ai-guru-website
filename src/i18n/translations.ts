export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.chat': 'Chat',
    'nav.browse': 'Browse',

    // CTAs
    'cta.chatAndBrowse': 'Chat & Browse',
    'cta.getStarted': 'Get Started',
    'cta.learnMore': 'Learn More',
    'cta.readMore': 'Read More',
    'cta.startChatting': 'Start chatting',
    'cta.subscribe': 'Subscribe',
    'cta.getHustlrr': 'Get Hustlrr for free',
    'cta.downloadApp': 'Download free app',
    'cta.contactUs': 'Contact us',
    'cta.getGuide': 'Get guide',

    // Hero
    'hero.tagline': 'Chat & Browse with the Best AI Models',
    'hero.title': 'Chat and browse with the best AI models',
    'hero.subtitle':
      'Choose your AI model, ask anything, and get answers about any page you visit',

    // Models
    'models.title': 'All the top AI models in one app',
    'models.subtitle':
      'Instantly switch models on the same conversation and see how each AI explains, writes, and reasons differently',
    'models.poweredBy': 'Powered by',

    // Features
    'features.title': 'Why Hustlrr?',
    'features.browsing.title': 'Chat with AI on any webpage',
    'features.browsing.description':
      'Open any site inside Hustlrr and ask your AI about the page instantly',
    'features.multiModel.title': 'Multi-Model Access',
    'features.multiModel.description':
      'Use GPT-5, Claude, Gemini, Grok, and more — all from one place.',
    'features.askAnything.title': 'Ask anything, do everything',
    'features.askAnything.description':
      'Chat, create, analyze, and solve tasks using text, images, videos, and documents.',
    'features.privacy.title': 'Private by design, with full control',
    'features.privacy.description':
      'You decide exactly how each model uses your information. Switch between providers and share only what you choose for each question.',
    'features.simple.title': 'One Subscription',
    'features.simple.description':
      'Stop juggling multiple AI subscriptions. Get everything in one plan.',
    'features.workflows.title': 'AI Workflows',
    'features.workflows.description':
      'Chain models together for complex tasks that single models can\'t handle.',

    // Testimonials
    'testimonials.title': 'What people are saying about Hustlrr',
    'testimonials.disclaimer':
      'A sampling of reviews from our most satisfied customers. For all our reviews, check out the App Store',

    // Support
    'support.title': 'Human support',
    'support.description':
      'Real people answer your questions. No bots. Our team answers your questions and helps you get the most out of Hustlrr.',
    'privacy.dataTitle': 'Your data stays yours',
    'privacy.dataDescription':
      'Your conversations live only in your encrypted iCloud. Nothing is stored on our servers, and we can\'t access your chats.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights on AI models, productivity, and workflows',
    'blog.readTime': 'min read',
    'blog.publishedOn': 'Published on',
    'blog.backToBlog': 'Back to Blog',

    // Newsletter
    'newsletter.title': 'Master prompt writing with our free guide',
    'newsletter.subtitle':
      'Write prompts that AI responds to more accurately',
    'newsletter.placeholder': 'name@email.com',
    'newsletter.button': 'Get guide',
    'newsletter.consent':
      'By tapping Get Guide, you accept our Terms of Use and Privacy Policy.',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.company': 'Company',
    'footer.privacy': 'Privacy Policies',
    'footer.service': 'Terms of Service',
    'footer.imprint': 'Imprint',

    // Badges
    'badge.appStore': '4.9 on the App Store',
    'badge.europe': 'Built in Europe',

    // Landing pages
    'landing.success.title': 'Success!',
    'landing.success.message':
      'Your email has been confirmed. Welcome to the Hustlrr community!',
    'landing.dl.title': 'Download Ready',
    'landing.dl.message': 'Your download is ready. Check your email for the link.',
    'landing.business.title': 'Business Inquiry Received',
    'landing.business.message':
      'Thank you for your interest. We\'ll get back to you shortly.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.blog': 'Blog',
    'nav.chat': 'Chat',
    'nav.browse': 'Browse',

    // CTAs
    'cta.chatAndBrowse': 'Chat & Browse',
    'cta.getStarted': 'Jetzt starten',
    'cta.learnMore': 'Mehr erfahren',
    'cta.readMore': 'Weiterlesen',
    'cta.startChatting': 'Jetzt chatten',
    'cta.subscribe': 'Abonnieren',
    'cta.getHustlrr': 'Hustlrr kostenlos holen',
    'cta.downloadApp': 'Kostenlose App laden',
    'cta.contactUs': 'Kontakt',
    'cta.getGuide': 'Guide holen',

    // Hero
    'hero.tagline': 'Chatten & Browsen mit den besten KI-Modellen',
    'hero.title': 'Chatten und browsen mit den besten KI-Modellen',
    'hero.subtitle':
      'Wähle dein KI-Modell, frage alles und erhalte Antworten zu jeder Seite, die du besuchst',

    // Models
    'models.title': 'Alle Top-KI-Modelle in einer App',
    'models.subtitle':
      'Wechsle sofort zwischen Modellen im selben Gespräch und sieh, wie jede KI unterschiedlich erklärt, schreibt und denkt',
    'models.poweredBy': 'Unterstützt von',

    // Features
    'features.title': 'Warum Hustlrr?',
    'features.browsing.title': 'Chatte mit KI auf jeder Webseite',
    'features.browsing.description':
      'Öffne jede Seite in Hustlrr und frage deine KI sofort über die Seite',
    'features.multiModel.title': 'Multi-Modell-Zugang',
    'features.multiModel.description':
      'Nutze GPT-5, Claude, Gemini, Grok und mehr — alles an einem Ort.',
    'features.askAnything.title': 'Frage alles, erledige alles',
    'features.askAnything.description':
      'Chatte, erstelle, analysiere und löse Aufgaben mit Text, Bildern, Videos und Dokumenten.',
    'features.privacy.title': 'Privat by Design, mit voller Kontrolle',
    'features.privacy.description':
      'Du entscheidest genau, wie jedes Modell deine Informationen nutzt. Wechsle zwischen Anbietern und teile nur, was du für jede Frage wählst.',
    'features.simple.title': 'Ein Abonnement',
    'features.simple.description':
      'Schluss mit mehreren KI-Abos. Alles in einem Plan.',
    'features.workflows.title': 'KI-Workflows',
    'features.workflows.description':
      'Kombiniere Modelle für komplexe Aufgaben, die einzelne Modelle nicht bewältigen.',

    // Testimonials
    'testimonials.title': 'Was andere über Hustlrr sagen',
    'testimonials.disclaimer':
      'Eine Auswahl von Bewertungen unserer zufriedensten Kunden. Alle Bewertungen findest du im App Store',

    // Support
    'support.title': 'Menschlicher Support',
    'support.description':
      'Echte Menschen beantworten deine Fragen. Keine Bots. Unser Team beantwortet deine Fragen und hilft dir, das Beste aus Hustlrr herauszuholen.',
    'privacy.dataTitle': 'Deine Daten gehören dir',
    'privacy.dataDescription':
      'Deine Gespräche leben nur in deinem verschlüsselten iCloud. Nichts wird auf unseren Servern gespeichert, und wir können nicht auf deine Chats zugreifen.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Einblicke in KI-Modelle, Produktivität und Workflows',
    'blog.readTime': 'Min. Lesezeit',
    'blog.publishedOn': 'Veröffentlicht am',
    'blog.backToBlog': 'Zurück zum Blog',

    // Newsletter
    'newsletter.title': 'Meistere Prompt-Writing mit unserem kostenlosen Guide',
    'newsletter.subtitle':
      'Schreibe Prompts, auf die KI genauer antwortet',
    'newsletter.placeholder': 'name@email.com',
    'newsletter.button': 'Guide holen',
    'newsletter.consent':
      'Mit dem Klick auf Guide holen akzeptierst du unsere Nutzungsbedingungen und Datenschutzrichtlinie.',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.product': 'Produkt',
    'footer.legal': 'Rechtliches',
    'footer.company': 'Unternehmen',
    'footer.privacy': 'Datenschutz',
    'footer.service': 'Nutzungsbedingungen',
    'footer.imprint': 'Impressum',

    // Badges
    'badge.appStore': '4,9 im App Store',
    'badge.europe': 'Made in Europe',

    // Landing pages
    'landing.success.title': 'Erfolg!',
    'landing.success.message':
      'Deine E-Mail wurde bestätigt. Willkommen in der Hustlrr-Community!',
    'landing.dl.title': 'Download bereit',
    'landing.dl.message':
      'Dein Download ist bereit. Prüfe deine E-Mail für den Link.',
    'landing.business.title': 'Geschäftsanfrage erhalten',
    'landing.business.message':
      'Vielen Dank für dein Interesse. Wir melden uns in Kürze.',
  },
} as const;

export type TranslationKey = keyof (typeof translations)['en'];
