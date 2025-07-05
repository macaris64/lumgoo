#!/bin/bash

set -e

# Configuration
PROJECT_ID="your-gcp-project-id"
CLUSTER_NAME="lumgoo-cluster"
ZONE="us-central1-a"
REGION="us-central1"
NAMESPACE="lumgoo"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Deploying Lumgoo to Google Kubernetes Engine${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI not found. Please install it first.${NC}"
    exit 1
fi

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ kubectl not found. Please install it first.${NC}"
    exit 1
fi

# Set the project
echo -e "${YELLOW}📋 Setting GCP project: $PROJECT_ID${NC}"
gcloud config set project $PROJECT_ID

# Get kubectl credentials for the cluster
echo -e "${YELLOW}🔧 Getting kubectl credentials for cluster: $CLUSTER_NAME${NC}"
gcloud container clusters get-credentials $CLUSTER_NAME --zone $ZONE --project $PROJECT_ID

# Create namespace if it doesn't exist
echo -e "${YELLOW}📋 Creating namespace: $NAMESPACE${NC}"
kubectl apply -f k8s/namespace.yaml

# Deploy the application
echo -e "${YELLOW}🚀 Deploying application...${NC}"
kubectl apply -f k8s/deployment.yaml -n $NAMESPACE

# Wait for deployment to be ready
echo -e "${YELLOW}⏳ Waiting for deployment to be ready...${NC}"
kubectl rollout status deployment/lumgoo-deployment -n $NAMESPACE --timeout=300s

# Apply ingress configuration
echo -e "${YELLOW}🌐 Configuring ingress...${NC}"
kubectl apply -f k8s/ingress.yaml -n $NAMESPACE

# Get deployment status
echo -e "${BLUE}📊 Deployment Status:${NC}"
kubectl get deployments -n $NAMESPACE
kubectl get pods -n $NAMESPACE
kubectl get services -n $NAMESPACE
kubectl get ingress -n $NAMESPACE

# Get external IP
echo -e "${BLUE}🌍 Getting external IP...${NC}"
EXTERNAL_IP=$(kubectl get ingress lumgoo-ingress -n $NAMESPACE -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

if [ -z "$EXTERNAL_IP" ]; then
    echo -e "${YELLOW}⏳ External IP not ready yet. It may take a few minutes.${NC}"
    echo -e "${YELLOW}Run the following command to check: kubectl get ingress lumgoo-ingress -n $NAMESPACE${NC}"
else
    echo -e "${GREEN}✅ External IP: $EXTERNAL_IP${NC}"
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}🌟 Your application should be available at: https://lumgoo.com${NC}"

# Show logs
echo -e "${BLUE}📋 Recent logs:${NC}"
kubectl logs -l app=lumgoo -n $NAMESPACE --tail=10 