#!/bin/bash
# Update system
sudo yum update -y

# Install Apache
sudo yum install -y httpd

# Start Apache service
sudo systemctl start httpd
sudo systemctl enable httpd

# Deploy web app files
echo "<h1>Deployed via Auto Scaling Group</h1>" | sudo tee /var/www/html/index.html
