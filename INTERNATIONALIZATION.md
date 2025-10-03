# Missing Maps Jekyll Polyglot Internationalization System

## Overview

This document describes the modernized internationalization (i18n) system for the Missing Maps website, which uses Jekyll Polyglot to support multiple languages efficiently.

## Architecture

### Before (Legacy System)
- **65+ duplicate HTML files** across 4 language directories (`/en/`, `/fr/`, `/es/`, `/cs/`)
- Manual URL parsing for locale detection
- Maintenance nightmare with code duplication

### After (Jekyll Polyglot System)
- **13 centralized templates** in `/app/` root directory
- **Automatic language generation** by Jekyll Polyglot plugin
- **Single source of truth** for page structure
- **Data-driven translations** via `_data/{lang}.yml` files

## Languages Supported

| Language | Code | URL Pattern | Data File |
|----------|------|-------------|-----------|
| English  | `en` | `/` (root)  | `_data/en.yml` |
| French   | `fr` | `/fr/`      | `_data/fr.yml` |
| Spanish  | `es` | `/es/`      | `_data/es.yml` |
| Czech    | `cs` | `/cs/`      | `_data/cs.yml` |

## Key Components

### 1. Configuration (_config.yml)

```yaml
# Jekyll Polyglot Configuration
languages: ["en", "fr", "cs", "es"]
default_lang: "en"
exclude_from_localization: ["assets", "scripts", "styles", "images", "favicon.ico", "robots.txt", "humans.txt", "CNAME", "Process-1.svg"]
parallel_localization: true

plugins:
  - jekyll-polyglot
```

### 2. Page Templates

All page templates are located in `/app/` root:
- `index.html` - Homepage
- `about.html` - About page  
- `advanced.html` - Advanced tutorials
- `beginner.html` - Beginner tutorials
- `blog.html` - Blog listing
- `categories.html` - Category view
- `events.html` - Events page
- `field.html` - Field mapping
- `host.html` - Host page
- `mapswipe.html` - MapSwipe
- `statistics.html` - Statistics
- `tags.html` - Tag view
- `validate.html` - Validation

### 3. Locale Detection

The `_includes/get_locale.html` include sets the locale variable:

```liquid
{% assign locale = site.active_lang %}
```

### 4. Translation Data

Translations are stored in YAML files under `_data/`:

**Structure Example (`_data/en.yml`):**
```yaml
about:
  title: "About"
  who_we_are:
    title: "Who we are"
    text1: "Missing Maps is a project..."
  objectives:
    title: "Objectives"
    text1: "To map areas where people live..."
```

**Usage in Templates:**
```liquid
<h1>{{site.data[locale].about.title}}</h1>
<p>{{site.data[locale].about.who_we_are.text1}}</p>
```

### 5. Language Switcher

Updated to work with Jekyll Polyglot in `_includes/header.html`:

```liquid
{% for lang in site.languages %}
  {% if lang == site.default_lang %}
    <a href="{{site.baseurl}}{{page.url | remove_first: '/' | remove_first: locale | prepend: '/'}}">
      <div class="nav-item item-centered">{{lang}}</div>
    </a>
  {% else %}
    <a href="{{site.baseurl}}/{{lang}}{{page.url | remove_first: '/' | remove_first: locale | prepend: '/'}}">
      <div class="nav-item item-centered">{{lang}}</div>
    </a>
  {% endif %}
{% endfor %}
```

## Build Process

### Development
```bash
npm run serve
# Builds site with Jekyll Polyglot and starts development server
```

### Production Build
```bash
npm run build
# Optimized build with SASS compression and asset optimization
```

### Testing
```bash
./test-multilingual.sh
# Runs comprehensive multilingual functionality tests
```

## Generated Output

Jekyll Polyglot automatically generates:

```
_site/
├── index.html              # English homepage
├── about/                  # English about page
├── assets/                 # Shared assets
├── fr/
│   ├── index.html         # French homepage  
│   ├── about/             # French about page
│   └── feed.xml           # French RSS feed
├── es/
│   ├── index.html         # Spanish homepage
│   ├── about/             # Spanish about page  
│   └── feed.xml           # Spanish RSS feed
└── cs/
    ├── index.html         # Czech homepage
    ├── about/             # Czech about page
    └── feed.xml           # Czech RSS feed
```

## Performance Optimizations

### Jekyll Configuration
- **Incremental builds**: `incremental: true`
- **SASS compression**: `style: compressed`
- **Parallel localization**: `parallel_localization: true`
- **Liquid optimization**: `strict_filters: true`

### Build Exclusions
- `node_modules/`
- `package.json`
- `gulpfile.cjs`
- `.sass-cache/`
- `.jekyll-cache/`

## Adding New Languages

1. **Add language code** to `_config.yml`:
   ```yaml
   languages: ["en", "fr", "cs", "es", "de"]  # Added German
   ```

2. **Create translation file** `_data/de.yml`:
   ```yaml
   about:
     title: "Über uns"
     # ... translations
   ```

3. **Rebuild site**: Jekyll Polyglot will automatically generate `/de/` routes

## Adding New Pages

1. **Create template** in `/app/`:
   ```html
   ---
   layout: default
   permalink: /newpage/
   id: newpage
   ---
   {% include get_locale.html %}
   {% include header.html %}
   <h1>{{site.data[locale].newpage.title}}</h1>
   ```

2. **Add translations** to all `_data/{lang}.yml` files:
   ```yaml
   newpage:
     title: "New Page Title"
   ```

## Troubleshooting

### Common Issues

**Language pages not generating:**
- Check `languages` array in `_config.yml`
- Ensure page templates are in `/app/` root, not subdirectories
- Verify `jekyll-polyglot` plugin is installed and listed

**Translations not showing:**
- Check `locale` variable is set via `{% include get_locale.html %}`
- Verify translation keys exist in `_data/{lang}.yml`
- Ensure correct Liquid syntax: `{{site.data[locale].key}}`

**Build errors:**
- Run `bundle exec jekyll build --trace` for detailed error info
- Check for YAML syntax errors in `_data/` files
- Verify all required translations exist for each language

### Debugging Commands

```bash
# Full build with error details
bundle exec jekyll build --trace

# Test translations
./test-multilingual.sh

# Check generated structure
ls -la _site/*/

# Verify specific language content
grep "feature-header" _site/fr/about/index.html
```

## Migration from Legacy System

The migration eliminated:
- **52 duplicate English files** (moved to templates)
- **4 language directories** (auto-generated now)
- **Old locale detection logic** (replaced with Polyglot)
- **Manual URL construction** (handled by plugin)

### Benefits Achieved
- 🚀 **80% reduction in code duplication**
- 🔧 **Simplified maintenance** (single templates)
- 🌐 **Consistent translation system**
- ⚡ **Improved build performance**
- 🧪 **Automated testing coverage**

## Support & Maintenance

For issues or questions:
1. Check this documentation
2. Run test suite: `./test-multilingual.sh`
3. Review Jekyll Polyglot docs: https://github.com/untra/polyglot
4. Check build logs for specific errors

---

*Last updated: October 2025*
*System version: Jekyll Polyglot v1.11.0*