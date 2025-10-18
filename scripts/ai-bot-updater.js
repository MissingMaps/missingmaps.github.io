// Advanced version that fetches from external sources
const https = require('https');
const fs = require('fs');

async function fetchAIBotLists() {
  // Community-maintained lists of AI bots
  const sources = [
    // Add URLs to maintained bot lists here
    // 'https://raw.githubusercontent.com/ai-robots-txt/ai-robots-txt/main/robots.txt',
    // 'https://darkvisitors.com/robots-txt-builder' // API endpoint if available
  ];
  
  // Fallback comprehensive list
  const fallbackBots = [
    'GPTBot', 'ChatGPT-User', 'ChatGPT', 'CCBot', 'anthropic-ai',
    'ClaudeBot', 'Claude-Web', 'Google-Extended', 'Bard', 'Gemini',
    'PerplexityBot', 'YouBot', 'Bytespider', 'FacebookBot',
    'Meta-ExternalAgent', 'Meta-ExternalFetcher', 'OAI-SearchBot',
    'SearchGPT', 'Omgilibot', 'Omgili', 'FriendlyCrawler',
    'VelenPublicWebCrawler', 'Webzio-Extended', 'SerpstatBot',
    'Diffbot', 'ImagesiftBot', 'SiteAuditBot', 'AllenAI', 'OpenAI',
    'AI2Bot', 'iaskspider', 'img2dataset', 'cohere-ai',
    'DataForSeoBot', 'PetalBot', 'XAI-Bot', 'GrokBot', 'AnthropicBot',
    'MistralBot', 'InflectionBot', 'CharacterBot', 'ReplicateBot', 'HuggingBot'
  ];
  
  return fallbackBots; // For now, use fallback list
}

async function generateUpdatedRobotsTxt() {
  const aiBots = await fetchAIBotLists();
  
  const content = `# robotstxt.org/

# Allow general web crawlers
User-agent: *
Allow: /

# Block AI Training Bots
# Auto-updated: ${new Date().toISOString().split('T')[0]}
# Total blocked: ${aiBots.length} AI bots
${aiBots.map(bot => `
User-agent: ${bot}
Disallow: /`).join('')}

# Reference to sitemap
Sitemap: https://www.missingmaps.org/sitemap.xml
`;

  return content;
}

module.exports = { generateUpdatedRobotsTxt };