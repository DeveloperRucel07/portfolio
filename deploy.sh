source ~/.bashrc

ng build

cd dist/portfolio/browser

git add .
git commit -m "$@"
git push

git ftp init \
  --user $FTP_USER \
  --passwd $FTP_PASSWORD \
  --syncroot dist/portfolio/browser \
  $FTP_HOST_PORTFOLIO

