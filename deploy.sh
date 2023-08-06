echo "Switching to branch main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i "~/Downloads/My Web Server.pem" -r build/* ec2-user@13.215.174.53:/usr/share/nginx/html/13.215.174.53

echo "Done!"