echo "📝 Committing build..."
git add .
git commit -m "${1:-"Deploy build"}" || echo "No changes"

echo "🚀 Pushing deploy branch..."
git push origin deploy

echo "🌍 Uploading via FTP..."
git ftp push --force \
  --user "$FTP_USER" \
  --passwd "$FTP_PASSWORD" \
  "$FTP_HOST_PORTFOLIO"

echo "🔙 Switching back to main..."
git checkout main

echo "✅ Done!"