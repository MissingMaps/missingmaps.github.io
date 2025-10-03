#!/bin/bash
# Automated test suite for Jekyll Polyglot multilingual functionality

set -e  # Exit on any error

SITE_DIR="_site"
BASE_URL="http://localhost:3000"

echo "🧪 Starting Missing Maps Multilingual Test Suite"
echo "=================================================="

# Test 1: Build verification
echo "📦 Test 1: Jekyll build verification"
bundle exec jekyll build --config _config.yml > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Jekyll build successful"
else
    echo "❌ Jekyll build failed"
    exit 1
fi

# Test 2: Language directory structure
echo "🌐 Test 2: Language directory structure"
LANGUAGES=("en" "fr" "es" "cs")
for lang in "${LANGUAGES[@]}"; do
    if [ "$lang" = "en" ]; then
        # English is at root
        if [ -f "$SITE_DIR/index.html" ]; then
            echo "✅ English root index.html exists"
        else
            echo "❌ English root index.html missing"
            exit 1
        fi
    else
        # Other languages in subdirs
        if [ -f "$SITE_DIR/$lang/index.html" ]; then
            echo "✅ $lang/index.html exists"
        else
            echo "❌ $lang/index.html missing"
            exit 1
        fi
        
        if [ -f "$SITE_DIR/$lang/about/index.html" ]; then
            echo "✅ $lang/about/index.html exists"
        else
            echo "❌ $lang/about/index.html missing"
            exit 1
        fi
    fi
done

# Test 3: Translation content verification
echo "🔤 Test 3: Translation content verification"

# Test English (root)
actual=$(grep -o 'class="title feature-header">[^<]*' "$SITE_DIR/about/index.html" | cut -d'>' -f2)
if [ "$actual" = "About" ]; then
    echo "✅ en/about title: '$actual'"
else
    echo "❌ en/about title mismatch. Expected: 'About', Got: '$actual'"
    exit 1
fi

# Test French
actual=$(grep -o 'class="title feature-header">[^<]*' "$SITE_DIR/fr/about/index.html" | cut -d'>' -f2)
if [ "$actual" = "À propos" ]; then
    echo "✅ fr/about title: '$actual'"
else
    echo "❌ fr/about title mismatch. Expected: 'À propos', Got: '$actual'"
    exit 1
fi

# Test Spanish
actual=$(grep -o 'class="title feature-header">[^<]*' "$SITE_DIR/es/about/index.html" | cut -d'>' -f2)
if [ "$actual" = "Acerca de" ]; then
    echo "✅ es/about title: '$actual'"
else
    echo "❌ es/about title mismatch. Expected: 'Acerca de', Got: '$actual'"
    exit 1
fi

# Test Czech
actual=$(grep -o 'class="title feature-header">[^<]*' "$SITE_DIR/cs/about/index.html" | cut -d'>' -f2)
if [ "$actual" = "O Missing Maps" ]; then
    echo "✅ cs/about title: '$actual'"
else
    echo "❌ cs/about title mismatch. Expected: 'O Missing Maps', Got: '$actual'"
    exit 1
fi

# Test 4: Feed generation
echo "📡 Test 4: Feed generation verification"
for lang in "${LANGUAGES[@]}"; do
    if [ "$lang" = "en" ]; then
        feed_path="$SITE_DIR/feed.xml"
    else
        feed_path="$SITE_DIR/$lang/feed.xml"
    fi
    
    if [ -f "$feed_path" ]; then
        echo "✅ $lang feed.xml exists"
    else
        echo "❌ $lang feed.xml missing"
        exit 1
    fi
done

# Test 5: Asset exclusion verification
echo "🚫 Test 5: Asset exclusion verification"
EXCLUDED_ITEMS=("node_modules" "package.json" "gulpfile.cjs")
for item in "${EXCLUDED_ITEMS[@]}"; do
    if [ ! -e "$SITE_DIR/$item" ]; then
        echo "✅ $item properly excluded"
    else
        echo "❌ $item should be excluded but exists in _site"
        exit 1
    fi
done

# Test 6: Polyglot configuration validation
echo "⚙️  Test 6: Polyglot configuration validation"
if grep -q "parallel_localization: true" _config.yml; then
    echo "✅ Parallel localization enabled"
else
    echo "❌ Parallel localization not enabled"
    exit 1
fi

if grep -q 'languages: \["en", "fr", "cs", "es"\]' _config.yml; then
    echo "✅ All languages configured"
else
    echo "❌ Language configuration issue"
    exit 1
fi

echo ""
echo "🎉 All tests passed! Multilingual functionality is working correctly."
echo "=================================================="