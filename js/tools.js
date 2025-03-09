// Tools Data - Contains information about all tools
const toolsData = [
    // Image Tools
    {
        id: 'image-to-png',
        name: 'Image to PNG Converter',
        description: 'Convert images from any format to PNG format with high quality.',
        category: 'image-tools',
        icon: 'fas fa-file-image',
        url: 'tools/image-tools/image-to-png.html'
    },
    {
        id: 'image-to-jpg',
        name: 'Image to JPG Converter',
        description: 'Convert images to JPG/JPEG format with customizable quality settings.',
        category: 'image-tools',
        icon: 'fas fa-image',
        url: 'tools/image-tools/image-to-jpg.html'
    },
    {
        id: 'image-resizer',
        name: 'Image Resizer',
        description: 'Resize images to specific dimensions while maintaining aspect ratio.',
        category: 'image-tools',
        icon: 'fas fa-expand',
        url: 'tools/image-tools/image-resizer.html'
    },
    {
        id: 'image-compressor',
        name: 'Image Compressor',
        description: 'Compress images to reduce file size without significant quality loss.',
        category: 'image-tools',
        icon: 'fas fa-compress',
        url: 'tools/image-tools/image-compressor.html'
    },
    {
        id: 'image-cropper',
        name: 'Image Cropper',
        description: 'Crop images to desired dimensions or aspect ratios easily.',
        category: 'image-tools',
        icon: 'fas fa-crop',
        url: 'tools/image-tools/image-cropper.html'
    },
    {
        id: 'image-to-base64',
        name: 'Image to Base64 Converter',
        description: 'Convert images to Base64 encoded strings for use in CSS/HTML.',
        category: 'image-tools',
        icon: 'fas fa-code',
        url: 'tools/image-tools/image-to-base64.html'
    },
    {
        id: 'webp-to-png',
        name: 'WebP to PNG Converter',
        description: 'Convert WebP images to PNG format with perfect quality.',
        category: 'image-tools',
        icon: 'fas fa-exchange-alt',
        url: 'tools/image-tools/webp-to-png.html'
    },
    {
        id: 'gif-maker',
        name: 'GIF Maker',
        description: 'Create animated GIFs from multiple images or video files.',
        category: 'image-tools',
        icon: 'fas fa-film',
        url: 'tools/image-tools/gif-maker.html'
    },
    {
        id: 'qr-code-generator',
        name: 'QR Code Generator',
        description: 'Generate customizable QR codes for URLs, text, and contact information.',
        category: 'image-tools',
        icon: 'fas fa-qrcode',
        url: 'tools/image-tools/qr-code-generator.html'
    },
    {
        id: 'screenshot-to-pdf',
        name: 'Screenshot to PDF Converter',
        description: 'Convert screenshots or images to PDF documents easily.',
        category: 'image-tools',
        icon: 'fas fa-file-pdf',
        url: 'tools/image-tools/screenshot-to-pdf.html'
    },

    // SEO Tools
    {
        id: 'meta-tag-generator',
        name: 'Meta Tag Generator',
        description: 'Generate SEO-friendly meta tags for your website.',
        category: 'seo-tools',
        icon: 'fas fa-tags',
        url: 'tools/seo-tools/meta-tag-generator.html'
    },
    {
        id: 'keyword-density-checker',
        name: 'Keyword Density Checker',
        description: 'Check and analyze keyword density in your website content.',
        category: 'seo-tools',
        icon: 'fas fa-percentage',
        url: 'tools/seo-tools/keyword-density-checker.html'
    },
    {
        id: 'sitemap-generator',
        name: 'Sitemap Generator',
        description: 'Create XML sitemaps for your website to improve search engine indexing.',
        category: 'seo-tools',
        icon: 'fas fa-sitemap',
        url: 'tools/seo-tools/sitemap-generator.html'
    },
    {
        id: 'robots-txt-generator',
        name: 'Robots.txt Generator',
        description: 'Generate robots.txt files to control search engine crawling.',
        category: 'seo-tools',
        icon: 'fas fa-robot',
        url: 'tools/seo-tools/robots-txt-generator.html'
    },
    {
        id: 'google-index-checker',
        name: 'Google Index Checker',
        description: 'Check if your website pages are indexed by Google search engine.',
        category: 'seo-tools',
        icon: 'fab fa-google',
        url: 'tools/seo-tools/google-index-checker.html'
    },
    {
        id: 'domain-authority-checker',
        name: 'Domain Authority Checker',
        description: 'Check the Domain Authority (DA) score of any website.',
        category: 'seo-tools',
        icon: 'fas fa-chart-line',
        url: 'tools/seo-tools/domain-authority-checker.html'
    },
    {
        id: 'backlink-checker',
        name: 'Backlink Checker',
        description: 'Check and analyze backlinks pointing to your website.',
        category: 'seo-tools',
        icon: 'fas fa-link',
        url: 'tools/seo-tools/backlink-checker.html'
    },
    {
        id: 'page-speed-checker',
        name: 'Page Speed Checker',
        description: 'Check and analyze website loading speed and performance.',
        category: 'seo-tools',
        icon: 'fas fa-tachometer-alt',
        url: 'tools/seo-tools/page-speed-checker.html'
    },
    {
        id: 'xml-sitemap-validator',
        name: 'XML Sitemap Validator',
        description: 'Validate XML sitemaps for errors and compliance with standards.',
        category: 'seo-tools',
        icon: 'fas fa-check-circle',
        url: 'tools/seo-tools/xml-sitemap-validator.html'
    },
    {
        id: 'mobile-friendly-test',
        name: 'Mobile-Friendly Test',
        description: 'Check if your website is mobile-friendly and responsive.',
        category: 'seo-tools',
        icon: 'fas fa-mobile-alt',
        url: 'tools/seo-tools/mobile-friendly-test.html'
    },

    // Text Tools
    {
        id: 'word-counter',
        name: 'Word Counter',
        description: 'Count words, characters, sentences, and paragraphs in your text.',
        category: 'text-tools',
        icon: 'fas fa-calculator',
        url: 'tools/text-tools/word-counter.html'
    },
    {
        id: 'character-counter',
        name: 'Character Counter',
        description: 'Count characters with and without spaces in your text.',
        category: 'text-tools',
        icon: 'fas fa-text-width',
        url: 'tools/text-tools/character-counter.html'
    },
    {
        id: 'case-converter',
        name: 'Case Converter',
        description: 'Convert text to UPPERCASE, lowercase, Title Case, and more.',
        category: 'text-tools',
        icon: 'fas fa-font',
        url: 'tools/text-tools/case-converter.html'
    },
    {
        id: 'plagiarism-checker',
        name: 'Plagiarism Checker',
        description: 'Check your text for plagiarism and duplicate content.',
        category: 'text-tools',
        icon: 'fas fa-copy',
        url: 'tools/text-tools/plagiarism-checker.html'
    },
    {
        id: 'grammar-checker',
        name: 'Grammar Checker',
        description: 'Check your text for grammar, spelling, and punctuation errors.',
        category: 'text-tools',
        icon: 'fas fa-spell-check',
        url: 'tools/text-tools/grammar-checker.html'
    },
    {
        id: 'text-to-speech',
        name: 'Text to Speech',
        description: 'Convert text to natural-sounding speech in multiple languages.',
        category: 'text-tools',
        icon: 'fas fa-volume-up',
        url: 'tools/text-tools/text-to-speech.html'
    },
    {
        id: 'speech-to-text',
        name: 'Speech to Text',
        description: 'Convert spoken words to written text in real-time.',
        category: 'text-tools',
        icon: 'fas fa-microphone',
        url: 'tools/text-tools/speech-to-text.html'
    },
    {
        id: 'url-encoder-decoder',
        name: 'URL Encoder & Decoder',
        description: 'Encode and decode URLs for safe transmission over the internet.',
        category: 'text-tools',
        icon: 'fas fa-link',
        url: 'tools/text-tools/url-encoder-decoder.html'
    },
    {
        id: 'fancy-text-generator',
        name: 'Fancy Text Generator',
        description: 'Generate stylish and decorative text for social media profiles.',
        category: 'text-tools',
        icon: 'fas fa-feather-alt',
        url: 'tools/text-tools/fancy-text-generator.html'
    },
    {
        id: 'random-text-generator',
        name: 'Random Text Generator',
        description: 'Generate random Lorem Ipsum text for design and layout purposes.',
        category: 'text-tools',
        icon: 'fas fa-random',
        url: 'tools/text-tools/random-text-generator.html'
    },

    // Developer Tools
    {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Format and validate JSON data with syntax highlighting.',
        category: 'developer-tools',
        icon: 'fas fa-code',
        url: 'tools/developer-tools/json-formatter.html'
    },
    {
        id: 'html-to-markdown',
        name: 'HTML to Markdown Converter',
        description: 'Convert HTML code to Markdown format easily.',
        category: 'developer-tools',
        icon: 'fab fa-markdown',
        url: 'tools/developer-tools/html-to-markdown.html'
    },
    {
        id: 'css-minifier',
        name: 'CSS Minifier',
        description: 'Minify CSS code to reduce file size and improve loading speed.',
        category: 'developer-tools',
        icon: 'fab fa-css3',
        url: 'tools/developer-tools/css-minifier.html'
    },
    {
        id: 'js-minifier',
        name: 'JavaScript Minifier',
        description: 'Minify JavaScript code to improve website performance.',
        category: 'developer-tools',
        icon: 'fab fa-js',
        url: 'tools/developer-tools/js-minifier.html'
    },
    {
        id: 'sql-formatter',
        name: 'SQL Formatter',
        description: 'Format SQL queries for better readability and debugging.',
        category: 'developer-tools',
        icon: 'fas fa-database',
        url: 'tools/developer-tools/sql-formatter.html'
    },
    {
        id: 'htaccess-redirect-generator',
        name: 'HTACCESS Redirect Generator',
        description: 'Generate .htaccess redirect rules for your website.',
        category: 'developer-tools',
        icon: 'fas fa-exchange-alt',
        url: 'tools/developer-tools/htaccess-redirect-generator.html'
    },
    {
        id: 'markdown-to-html',
        name: 'Markdown to HTML Converter',
        description: 'Convert Markdown to HTML code with customizable options.',
        category: 'developer-tools',
        icon: 'fab fa-html5',
        url: 'tools/developer-tools/markdown-to-html.html'
    },
    {
        id: 'color-picker',
        name: 'Color Code Picker',
        description: 'Select and convert colors between HEX, RGB, HSL, and CMYK formats.',
        category: 'developer-tools',
        icon: 'fas fa-palette',
        url: 'tools/developer-tools/color-picker.html'
    },
    {
        id: 'base64-encoder-decoder',
        name: 'Base64 Encoder & Decoder',
        description: 'Encode and decode text to and from Base64 format.',
        category: 'developer-tools',
        icon: 'fas fa-file-code',
        url: 'tools/developer-tools/base64-encoder-decoder.html'
    },
    {
        id: 'ip-lookup',
        name: 'IP Address Lookup',
        description: 'Get detailed information about any IP address.',
        category: 'developer-tools',
        icon: 'fas fa-network-wired',
        url: 'tools/developer-tools/ip-lookup.html'
    },

    // Math & Calculators
    {
        id: 'percentage-calculator',
        name: 'Percentage Calculator',
        description: 'Calculate percentages, percentage increases, and decreases.',
        category: 'calculators',
        icon: 'fas fa-percent',
        url: 'tools/calculators/percentage-calculator.html'
    },
    {
        id: 'age-calculator',
        name: 'Age Calculator',
        description: 'Calculate exact age in years, months, days, hours, and minutes.',
        category: 'calculators',
        icon: 'fas fa-birthday-cake',
        url: 'tools/calculators/age-calculator.html'
    },
    {
        id: 'bmi-calculator',
        name: 'BMI Calculator',
        description: 'Calculate Body Mass Index (BMI) and weight status.',
        category: 'calculators',
        icon: 'fas fa-weight',
        url: 'tools/calculators/bmi-calculator.html'
    },
    {
        id: 'loan-calculator',
        name: 'Loan EMI Calculator',
        description: 'Calculate loan EMI, total interest, and payment schedule.',
        category: 'calculators',
        icon: 'fas fa-money-bill-wave',
        url: 'tools/calculators/loan-calculator.html'
    },
    {
        id: 'scientific-calculator',
        name: 'Scientific Calculator',
        description: 'Perform advanced mathematical calculations with scientific functions.',
        category: 'calculators',
        icon: 'fas fa-calculator',
        url: 'tools/calculators/scientific-calculator.html'
    },
    {
        id: 'discount-calculator',
        name: 'Discount Calculator',
        description: 'Calculate discounts, final prices, and amount saved.',
        category: 'calculators',
        icon: 'fas fa-tags',
        url: 'tools/calculators/discount-calculator.html'
    },
    {
        id: 'currency-converter',
        name: 'Currency Converter',
        description: 'Convert between different currencies with real-time exchange rates.',
        category: 'calculators',
        icon: 'fas fa-dollar-sign',
        url: 'tools/calculators/currency-converter.html'
    },
    {
        id: 'time-zone-converter',
        name: 'Time Zone Converter',
        description: 'Convert time between different time zones around the world.',
        category: 'calculators',
        icon: 'fas fa-clock',
        url: 'tools/calculators/time-zone-converter.html'
    },
    {
        id: 'binary-decimal-converter',
        name: 'Binary to Decimal Converter',
        description: 'Convert numbers between binary, decimal, hexadecimal, and octal.',
        category: 'calculators',
        icon: 'fas fa-binary',
        url: 'tools/calculators/binary-decimal-converter.html'
    },
    {
        id: 'tip-calculator',
        name: 'Tip Calculator',
        description: 'Calculate tip amount and total bill for restaurants and services.',
        category: 'calculators',
        icon: 'fas fa-utensils',
        url: 'tools/calculators/tip-calculator.html'
    },

    // Unit Converters
    {
        id: 'length-converter',
        name: 'Length Converter',
        description: 'Convert between meters, feet, inches, kilometers, miles, and more.',
        category: 'unit-converters',
        icon: 'fas fa-ruler',
        url: 'tools/unit-converters/length-converter.html'
    },
    {
        id: 'weight-converter',
        name: 'Weight Converter',
        description: 'Convert between kilograms, pounds, ounces, grams, and more.',
        category: 'unit-converters',
        icon: 'fas fa-balance-scale',
        url: 'tools/unit-converters/weight-converter.html'
    },
    {
        id: 'speed-converter',
        name: 'Speed Converter',
        description: 'Convert between km/h, mph, m/s, knots, and more.',
        category: 'unit-converters',
        icon: 'fas fa-tachometer-alt',
        url: 'tools/unit-converters/speed-converter.html'
    },
    {
        id: 'temperature-converter',
        name: 'Temperature Converter',
        description: 'Convert between Celsius, Fahrenheit, and Kelvin.',
        category: 'unit-converters',
        icon: 'fas fa-temperature-high',
        url: 'tools/unit-converters/temperature-converter.html'
    },
    {
        id: 'volume-converter',
        name: 'Volume Converter',
        description: 'Convert between liters, gallons, cups, pints, and more.',
        category: 'unit-converters',
        icon: 'fas fa-flask',
        url: 'tools/unit-converters/volume-converter.html'
    },
    {
        id: 'data-storage-converter',
        name: 'Data Storage Converter',
        description: 'Convert between bytes, kilobytes, megabytes, gigabytes, and more.',
        category: 'unit-converters',
        icon: 'fas fa-database',
        url: 'tools/unit-converters/data-storage-converter.html'
    },
    {
        id: 'energy-converter',
        name: 'Energy Converter',
        description: 'Convert between joules, calories, kilowatt-hours, and more.',
        category: 'unit-converters',
        icon: 'fas fa-bolt',
        url: 'tools/unit-converters/energy-converter.html'
    },
    {
        id: 'pressure-converter',
        name: 'Pressure Converter',
        description: 'Convert between pascals, bars, atmospheres, psi, and more.',
        category: 'unit-converters',
        icon: 'fas fa-compress-arrows-alt',
        url: 'tools/unit-converters/pressure-converter.html'
    },
    {
        id: 'fuel-efficiency-converter',
        name: 'Fuel Efficiency Converter',
        description: 'Convert between mpg, km/l, l/100km, and more.',
        category: 'unit-converters',
        icon: 'fas fa-gas-pump',
        url: 'tools/unit-converters/fuel-efficiency-converter.html'
    },
    {
        id: 'angle-converter',
        name: 'Angle Converter',
        description: 'Convert between degrees, radians, gradians, and more.',
        category: 'unit-converters',
        icon: 'fas fa-drafting-compass',
        url: 'tools/unit-converters/angle-converter.html'
    },

    // Security & Encryption Tools
    {
        id: 'md5-generator',
        name: 'MD5 Hash Generator',
        description: 'Generate MD5 hash from text or files securely.',
        category: 'security-tools',
        icon: 'fas fa-fingerprint',
        url: 'tools/security-tools/md5-generator.html'
    },
    {
        id: 'sha256-generator',
        name: 'SHA256 Hash Generator',
        description: 'Generate SHA256 hash from text or files for enhanced security.',
        category: 'security-tools',
        icon: 'fas fa-shield-alt',
        url: 'tools/security-tools/sha256-generator.html'
    },
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Generate strong, secure passwords with customizable options.',
        category: 'security-tools',
        icon: 'fas fa-key',
        url: 'tools/security-tools/password-generator.html'
    },
    {
        id: 'random-string-generator',
        name: 'Random String Generator',
        description: 'Generate random strings for tokens, IDs, and encryption keys.',
        category: 'security-tools',
        icon: 'fas fa-random',
        url: 'tools/security-tools/random-string-generator.html'
    },
    {
        id: 'url-shortener',
        name: 'URL Shortener',
        description: 'Shorten long URLs for easier sharing and tracking.',
        category: 'security-tools',
        icon: 'fas fa-link',
        url: 'tools/security-tools/url-shortener.html'
    },
    {
        id: 'ip-geolocation',
        name: 'IP Geolocation Finder',
        description: 'Find the geographical location of any IP address.',
        category: 'security-tools',
        icon: 'fas fa-map-marker-alt',
        url: 'tools/security-tools/ip-geolocation.html'
    },
    {
        id: 'ssl-checker',
        name: 'SSL Certificate Checker',
        description: 'Check and verify SSL certificates for websites.',
        category: 'security-tools',
        icon: 'fas fa-lock',
        url: 'tools/security-tools/ssl-checker.html'
    },
    {
        id: 'whois-lookup',
        name: 'Whois Lookup',
        description: 'Look up domain registration information and ownership details.',
        category: 'security-tools',
        icon: 'fas fa-search',
        url: 'tools/security-tools/whois-lookup.html'
    },
    {
        id: 'http-headers-checker',
        name: 'HTTP Headers Checker',
        description: 'Check HTTP headers of any website for security analysis.',
        category: 'security-tools',
        icon: 'fas fa-server',
        url: 'tools/security-tools/http-headers-checker.html'
    },
    {
        id: 'privacy-policy-generator',
        name: 'Privacy Policy Generator',
        description: 'Generate compliant privacy policies for websites and apps.',
        category: 'security-tools',
        icon: 'fas fa-file-contract',
        url: 'tools/security-tools/privacy-policy-generator.html'
    },

    // Social Media Tools
    {
        id: 'youtube-thumbnail-downloader',
        name: 'YouTube Thumbnail Downloader',
        description: 'Download high-quality thumbnails from YouTube videos.',
        category: 'social-media-tools',
        icon: 'fab fa-youtube',
        url: 'tools/social-media-tools/youtube-thumbnail-downloader.html'
    },
    {
        id: 'instagram-photo-downloader',
        name: 'Instagram Photo Downloader',
        description: 'Download photos and images from Instagram posts.',
        category: 'social-media-tools',
        icon: 'fab fa-instagram',
        url: 'tools/social-media-tools/instagram-photo-downloader.html'
    },
    {
        id: 'twitter-video-downloader',
        name: 'Twitter Video Downloader',
        description: 'Download videos from Twitter posts and tweets.',
        category: 'social-media-tools',
        icon: 'fab fa-twitter',
        url: 'tools/social-media-tools/twitter-video-downloader.html'
    },
    {
        id: 'facebook-video-downloader',
        name: 'Facebook Video Downloader',
        description: 'Download videos from Facebook posts and pages.',
        category: 'social-media-tools',
        icon: 'fab fa-facebook',
        url: 'tools/social-media-tools/facebook-video-downloader.html'
    },
    {
        id: 'tiktok-video-downloader',
        name: 'TikTok Video Downloader',
        description: 'Download videos from TikTok without watermarks.',
        category: 'social-media-tools',
        icon: 'fab fa-tiktok',
        url: 'tools/social-media-tools/tiktok-video-downloader.html'
    },
    {
        id: 'youtube-tags-extractor',
        name: 'YouTube Tags Extractor',
        description: 'Extract SEO tags from any YouTube video.',
        category: 'social-media-tools',
        icon: 'fas fa-tags',
        url: 'tools/social-media-tools/youtube-tags-extractor.html'
    },
    {
        id: 'hashtag-generator',
        name: 'Hashtag Generator',
        description: 'Generate relevant hashtags for Instagram, Twitter, and other platforms.',
        category: 'social-media-tools',
        icon: 'fas fa-hashtag',
        url: 'tools/social-media-tools/hashtag-generator.html'
    },
    {
        id: 'social-media-post-generator',
        name: 'Social Media Post Generator',
        description: 'Generate engaging posts for various social media platforms.',
        category: 'social-media-tools',
        icon: 'far fa-comment-dots',
        url: 'tools/social-media-tools/social-media-post-generator.html'
    },
    {
        id: 'emoji-keyboard',
        name: 'Emoji Keyboard',
        description: 'Find and copy emojis to use in social media posts and messages.',
        category: 'social-media-tools',
        icon: 'far fa-smile',
        url: 'tools/social-media-tools/emoji-keyboard.html'
    },
    {
        id: 'twitter-character-counter',
        name: 'Twitter Character Counter',
        description: 'Count characters for Twitter with visual limit indicators.',
        category: 'social-media-tools',
        icon: 'fas fa-text-width',
        url: 'tools/social-media-tools/twitter-character-counter.html'
    },

    // Miscellaneous Tools
    {
        id: 'barcode-generator',
        name: 'Barcode Generator',
        description: 'Generate various barcode types for products and inventory.',
        category: 'misc-tools',
        icon: 'fas fa-barcode',
        url: 'tools/misc-tools/barcode-generator.html'
    },
    {
        id: 'meme-generator',
        name: 'Meme Generator',
        description: 'Create custom memes with your own images and text.',
        category: 'misc-tools',
        icon: 'far fa-laugh-squint',
        url: 'tools/misc-tools/meme-generator.html'
    },
    {
        id: 'resume-builder',
        name: 'Resume Builder',
        description: 'Create professional resumes with customizable templates.',
        category: 'misc-tools',
        icon: 'far fa-file-alt',
        url: 'tools/misc-tools/resume-builder.html'
    },
    {
        id: 'invoice-generator',
        name: 'Invoice Generator',
        description: 'Generate professional invoices for business transactions.',
        category: 'misc-tools',
        icon: 'fas fa-file-invoice-dollar',
        url: 'tools/misc-tools/invoice-generator.html'
    },
    {
        id: 'business-name-generator',
        name: 'Business Name Generator',
        description: 'Generate creative business name ideas for your startup.',
        category: 'misc-tools',
        icon: 'far fa-building',
        url: 'tools/misc-tools/business-name-generator.html'
    },
    {
        id: 'lottery-number-generator',
        name: 'Lottery Number Generator',
        description: 'Generate random lottery numbers for various lottery games.',
        category: 'misc-tools',
        icon: 'fas fa-ticket-alt',
        url: 'tools/misc-tools/lottery-number-generator.html'
    },
    {
        id: 'coin-flip',
        name: 'Flip a Coin Simulator',
        description: 'Simulate coin flips for random decision making.',
        category: 'misc-tools',
        icon: 'fas fa-coins',
        url: 'tools/misc-tools/coin-flip.html'
    },
    {
        id: 'random-number-generator',
        name: 'Random Number Generator',
        description: 'Generate random numbers within specified ranges.',
        category: 'misc-tools',
        icon: 'fas fa-dice',
        url: 'tools/misc-tools/random-number-generator.html'
    },
    {
        id: 'dice-roller',
        name: 'Dice Roller Simulator',
        description: 'Simulate rolling dice with different sides and quantities.',
        category: 'misc-tools',
        icon: 'fas fa-dice-d20',
        url: 'tools/misc-tools/dice-roller.html'
    },
    {
        id: 'internet-speed-test',
        name: 'Internet Speed Test',
        description: 'Test your internet connection download and upload speeds.',
        category: 'misc-tools',
        icon: 'fas fa-tachometer-alt',
        url: 'tools/misc-tools/internet-speed-test.html'
    },
    {
        id: 'daily-planner',
        name: 'Daily Planner Creator',
        description: 'Create customizable daily planners and schedules.',
        category: 'misc-tools',
        icon: 'far fa-calendar-alt',
        url: 'tools/misc-tools/daily-planner.html'
    },
    {
        id: 'wedding-invitation-generator',
        name: 'Wedding Invitation Generator',
        description: 'Create beautiful wedding invitations with custom templates.',
        category: 'misc-tools',
        icon: 'fas fa-envelope-open-text',
        url: 'tools/misc-tools/wedding-invitation-generator.html'
    },
    {
        id: 'story-plot-generator',
        name: 'Story Plot Generator',
        description: 'Generate random story plots and ideas for writers.',
        category: 'misc-tools',
        icon: 'fas fa-book',
        url: 'tools/misc-tools/story-plot-generator.html'
    },
    {
        id: 'ebook-creator',
        name: 'E-book Creator',
        description: 'Create and format e-books in EPUB and MOBI formats.',
        category: 'misc-tools',
        icon: 'fas fa-tablet-alt',
        url: 'tools/misc-tools/ebook-creator.html'
    },
    {
        id: 'ai-chatbot-demo',
        name: 'AI Chatbot Demo',
        description: 'Try a simple AI chatbot powered by machine learning.',
        category: 'misc-tools',
        icon: 'fas fa-robot',
        url: 'tools/misc-tools/ai-chatbot-demo.html'
    },
    {
        id: 'ip-tracker',
        name: 'IP Address Tracker',
        description: 'Track the location and details of any IP address.',
        category: 'misc-tools',
        icon: 'fas fa-map-marked-alt',
        url: 'tools/misc-tools/ip-tracker.html'
    },
    {
        id: 'fake-address-generator',
        name: 'Fake Address Generator',
        description: 'Generate random fake addresses for testing purposes.',
        category: 'misc-tools',
        icon: 'fas fa-map-pin',
        url: 'tools/misc-tools/fake-address-generator.html'
    },
    {
        id: 'electric-bill-calculator',
        name: 'Calculator for Electric Bills',
        description: 'Calculate electricity costs based on usage and rates.',
        category: 'misc-tools',
        icon: 'fas fa-bolt',
        url: 'tools/misc-tools/electric-bill-calculator.html'
    },
    {
        id: 'leap-year-checker',
        name: 'Leap Year Checker',
        description: 'Check if a year is a leap year or not.',
        category: 'misc-tools',
        icon: 'fas fa-calendar-check',
        url: 'tools/misc-tools/leap-year-checker.html'
    },
    {
        id: 'numerology-calculator',
        name: 'Name to Numerology Calculator',
        description: 'Calculate numerology numbers from names and birthdates.',
        category: 'misc-tools',
        icon: 'fas fa-star',
        url: 'tools/misc-tools/numerology-calculator.html'
    }
];

// Function to populate tool cards on page load
document.addEventListener('DOMContentLoaded', function() {
    populateToolCards();
});

/**
 * Populate tool cards in their respective category sections
 */
function populateToolCards() {
    // Group tools by category
    const categories = {
        'image-tools': [],
        'seo-tools': [],
        'text-tools': [],
        'developer-tools': [],
        'calculators': [],
        'unit-converters': [],
        'security-tools': [],
        'social-media-tools': [],
        'misc-tools': []
    };
    
    // Sort tools into categories
    toolsData.forEach(tool => {
        if (categories[tool.category]) {
            categories[tool.category].push(tool);
        }
    });
    
    // Populate each category section
    for (const [category, tools] of Object.entries(categories)) {
        const container = document.querySelector(`#${category} .tool-cards`);
        if (!container) continue;
        
        tools.forEach(tool => {
            const toolCard = createToolCard(tool);
            container.appendChild(toolCard);
        });
    }
}

/**
 * Create a tool card element
 * @param {Object} tool - The tool data
 * @returns {HTMLElement} - The tool card element
 */
function createToolCard(tool) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col';
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card h-100 tool-card';
    cardDiv.setAttribute('data-tool-id', tool.id);
    
    const cardImg = document.createElement('div');
    cardImg.className = 'card-img-top';
    cardImg.innerHTML = `<i class="${tool.icon}"></i>`;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = tool.name;
    
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = tool.description;
    
    const cardButton = document.createElement('a');
    cardButton.className = 'btn btn-primary';
    cardButton.href = tool.url;
    cardButton.textContent = 'Use Tool';
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBody);
    
    colDiv.appendChild(cardDiv);
    
    return colDiv;
} 