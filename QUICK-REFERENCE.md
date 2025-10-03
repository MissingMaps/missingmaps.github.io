# Quick Reference: Jekyll Polyglot System

## Essential Commands

```bash
# Development
npm run serve                 # Start development server
./test-multilingual.sh       # Run tests
bundle exec jekyll build     # Manual build

# Adding translations
# 1. Edit _data/{lang}.yml files
# 2. Use {{site.data[locale].key}} in templates
# 3. Rebuild automatically detects changes
```

## File Structure

```
app/
├── _data/
│   ├── en.yml              # English translations
│   ├── fr.yml              # French translations  
│   ├── es.yml              # Spanish translations
│   └── cs.yml              # Czech translations
├── _includes/
│   ├── get_locale.html     # Sets locale variable
│   └── header.html         # Language switcher
├── index.html              # Homepage template
├── about.html              # About page template
└── *.html                  # Other page templates
```

## Language URLs

- English: `/` (root)
- French: `/fr/`
- Spanish: `/es/`  
- Czech: `/cs/`

## Translation Syntax

```liquid
<!-- Set locale -->
{% include get_locale.html %}

<!-- Use translations -->
<h1>{{site.data[locale].section.title}}</h1>
<p>{{site.data[locale].section.text}}</p>
```

## Quick Tests

```bash
# Verify all languages work
for lang in "" "fr/" "es/" "cs/"; do
  echo "${lang:-en}: $(grep 'feature-header' _site/${lang}about/index.html)"
done

# Check feed generation  
ls _site/*/feed.xml _site/feed.xml
```

## Adding New Content

1. **New page**: Create `newpage.html` in `/app/`
2. **Add translations**: Update all `_data/{lang}.yml` files  
3. **Test**: Run `./test-multilingual.sh`

## Common Patterns

```yaml
# _data/en.yml structure
section:
  title: "Section Title"
  text: "Section content"
  subsection:
    item1: "First item"
    item2: "Second item"
```

```liquid
<!-- Template usage -->
<h2>{{site.data[locale].section.title}}</h2>
<p>{{site.data[locale].section.text}}</p>
<ul>
  <li>{{site.data[locale].section.subsection.item1}}</li>
  <li>{{site.data[locale].section.subsection.item2}}</li>
</ul>
```