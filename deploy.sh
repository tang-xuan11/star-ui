rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:tang-xuan11/star-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://tangyinxuan.top/star-ui-website/