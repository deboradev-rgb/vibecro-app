#!/bin/bash

# Script de vérification post-migration

echo "🔍 Vérification de la migration Next.js → Vite..."
echo ""

# Vérifications
checks_passed=0
checks_total=0

check_file() {
  local file=$1
  local name=$2
  checks_total=$((checks_total+1))
  
  if [ -f "$file" ]; then
    echo "✅ $name"
    checks_passed=$((checks_passed+1))
  else
    echo "❌ $name (manquant: $file)"
  fi
}

# Fichiers de configuration
echo "📋 Configuration Vite:"
check_file "vite.config.ts" "vite.config.ts"
check_file "tsconfig.json" "tsconfig.json"
check_file "index.html" "index.html"

echo ""
echo "📦 Fichiers d'entrée:"
check_file "src/main.tsx" "Point d'entrée React (main.tsx)"
check_file "src/App.tsx" "Composant App avec routing"

echo ""
echo "📄 Pages principales:"
check_file "src/pages/HomePage.tsx" "HomePage"
check_file "src/pages/ServicesPage.tsx" "ServicesPage"
check_file "src/pages/PortfolioPage.tsx" "PortfolioPage"
check_file "src/pages/ContactPage.tsx" "ContactPage"
check_file "src/pages/AboutPage.tsx" "AboutPage"

echo ""
echo "🧩 Composants clés:"
check_file "src/components/layout/Header.tsx" "Header (React Router)"
check_file "src/components/layout/Footer.tsx" "Footer (React Router)"
check_file "src/components/providers/ThemeWrapper.tsx" "ThemeProvider"
check_file "src/components/layout/GlobalThemeToggle.tsx" "GlobalThemeToggle"

echo ""
echo "📚 Documentation:"
check_file "MIGRATION.md" "Documentation migration"
check_file "SETUP.md" "Guide de configuration"

echo ""
echo "=== RÉSUMÉ ==="
echo "Vérifications: $checks_passed/$checks_total réussies"

if [ $checks_passed -eq $checks_total ]; then
  echo "✅ Migration complète! Vous pouvez commencer par: npm install && npm run dev"
  exit 0
else
  echo "⚠️  Certains fichiers manquent. Vérifiez la configuration."
  exit 1
fi
