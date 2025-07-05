#!/bin/bash

set -e

# Configuration
PROJECT_ID="your-gcp-project-id"
REGION="us-central1"
REPOSITORY="lumgoo-repo"
IMAGE_NAME="lumgoo"
IMAGE_TAG=${1:-"latest"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Building and pushing Docker image to GCP Artifact Registry${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI not found. Please install it first.${NC}"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker not found. Please install it first.${NC}"
    exit 1
fi

# Set the project
echo -e "${YELLOW}📋 Setting GCP project: $PROJECT_ID${NC}"
gcloud config set project $PROJECT_ID

# Configure Docker to use gcloud as a credential helper
echo -e "${YELLOW}🔧 Configuring Docker for GCP${NC}"
gcloud auth configure-docker $REGION-docker.pkg.dev

# Build the Docker image
echo -e "${YELLOW}🏗️  Building Docker image${NC}"
docker build -t $IMAGE_NAME:$IMAGE_TAG .

# Tag the image for GCP Artifact Registry
FULL_IMAGE_NAME="$REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:$IMAGE_TAG"
echo -e "${YELLOW}🏷️  Tagging image: $FULL_IMAGE_NAME${NC}"
docker tag $IMAGE_NAME:$IMAGE_TAG $FULL_IMAGE_NAME

# Push the image to GCP Artifact Registry
echo -e "${YELLOW}📤 Pushing image to GCP Artifact Registry${NC}"
docker push $FULL_IMAGE_NAME

echo -e "${GREEN}✅ Image successfully pushed to: $FULL_IMAGE_NAME${NC}"
echo -e "${GREEN}🎉 Build and push completed successfully!${NC}"

# Clean up local images
echo -e "${YELLOW}🧹 Cleaning up local images${NC}"
docker rmi $IMAGE_NAME:$IMAGE_TAG
docker rmi $FULL_IMAGE_NAME

echo -e "${GREEN}🌟 Deployment image ready for Kubernetes!${NC}" 