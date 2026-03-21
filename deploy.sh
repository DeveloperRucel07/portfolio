git add .
git commit -m "$@"
git push

ng build

git ftp init 

git ftp push --user $FTP_USER --passwd $FTP_PASSWORD --syncroot dist/portfolio/browser  $FTP_HOST

