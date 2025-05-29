# scalable-webapp-ec2-alb-as

# Scalable Web Application on AWS with EC2, ALB, and Auto Scaling Group

## Overview

This project demonstrates the deployment of a scalable and highly available web application on AWS using EC2 instances, an Application Load Balancer (ALB), and Auto Scaling Groups (ASG). Optional backend database support with Amazon RDS is included.

---

## Architecture Diagram

![Architecture Diagram](./architecture/architecture-diagram.png)

---

## Project Structure

- `architecture/`  
  Contains network and infrastructure diagrams.

- `web-app/`  
  Frontend web application files (HTML, CSS, JavaScript).

- `scripts/`  
  Bash scripts for setting up EC2 instances, configuring ALB, and managing Auto Scaling policies.

- `docs/`  
  Documentation and setup guides for different components:
  - `setup-guide.md` – Step-by-step AWS setup instructions.
  - `rds-setup.md` – Instructions for configuring Amazon RDS.
  - `monitoring-guide.md` – How to set up CloudWatch and SNS alerts.

---

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/scalable-webapp-ec2-alb-asg.git
   cd scalable-webapp-ec2-alb-asg
