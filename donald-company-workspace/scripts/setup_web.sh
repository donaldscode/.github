#!/bin/bash

# Copy generated artifacts to web directory
echo "Setting up web demo with generated artifacts..."

# Create public directory if it doesn't exist
mkdir -p web/public/whitepapers

# Copy generated artifacts
cp outputs/technical_blog.md web/public/whitepapers/
cp outputs/investor_memo.txt web/public/whitepapers/
cp outputs/slide_deck.md web/public/whitepapers/
cp outputs/senior_ml_job.md web/public/whitepapers/

# Copy canonical data for reference
cp canonical.json web/public/

echo "✅ Web demo setup complete!"
echo "📁 Artifacts copied to web/public/whitepapers/"
echo "🚀 Run 'cd web && bun install && bun dev' to start the demo"