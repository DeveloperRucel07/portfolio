source ~/.bashrc

git add .
git commit -m "$@"
git push

ng build

git ftp push --force \
  --user $FTP_USER \
  --passwd $FTP_PASSWORD \
  --syncroot dist/portfolio/browser \
  $FTP_HOST_PORTFOLIO

