# 🚀 Deployment Guide - Lumgoo Portfolio

This guide covers the complete deployment process for the Lumgoo portfolio website from local development to production on Google Cloud Platform.

## 📋 Prerequisites

### Local Development

- Node.js 18+ and npm
- Docker and Docker Compose
- Git

### Production Deployment

- Google Cloud SDK (`gcloud`)
- kubectl (Kubernetes CLI)
- Docker
- GCP Project with billing enabled

## 🏗️ Architecture Overview

### Development Environment

```
Developer → Docker Compose → Local Containers
├── lumgoo-dev (Next.js dev server on port 3000)
└── nginx (Static file serving on port 80)
```

### Production Environment

```
Internet → GCP Load Balancer → GKE Cluster → NGINX Pods
├── Ingress Controller (SSL/TLS termination)
├── Kubernetes Services
└── Container Registry (Docker images)
```

## 🔧 Local Development Setup

### 1. Standard Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:3000
```

### 2. Docker Development

```bash
# Build and start with Docker Compose
docker-compose up lumgoo-dev

# Access at http://localhost:3000
```

### 3. Production Testing Locally

```bash
# Build and test production image
docker build -t lumgoo:test .
docker run -d -p 8080:80 --name lumgoo-test lumgoo:test

# Access at http://localhost:8080
# Health check: http://localhost:8080/health

# Clean up
docker stop lumgoo-test && docker rm lumgoo-test
```

## 🐳 Docker Configuration

### Production Dockerfile

- **Multi-stage build** for optimized image size
- **Node.js 20 Alpine** for building
- **NGINX Alpine** for serving static files
- **Security headers** and performance optimization
- **Health check endpoint** at `/health`

### Files Structure

```
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Local orchestration
├── nginx.conf              # NGINX configuration
└── .dockerignore           # Build optimization
```

### Image Sizes

- **Development**: ~500MB (includes dev tools)
- **Production**: ~25MB (optimized NGINX + static files)

## ☸️ Kubernetes Configuration

### Cluster Resources

```
k8s/
├── namespace.yaml          # lumgoo namespace
├── deployment.yaml         # App deployment + service
└── ingress.yaml           # Load balancer + SSL
```

### Resource Specifications

- **Replicas**: 3 pods for high availability
- **CPU**: 100m request, 200m limit per pod
- **Memory**: 128Mi request, 256Mi limit per pod
- **Health Checks**: Liveness and readiness probes

## 🌐 Google Cloud Platform Setup

### 1. Project Setup

```bash
# Set your project ID
export PROJECT_ID="your-gcp-project-id"
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable container.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud services enable compute.googleapis.com
```

### 2. Artifact Registry Setup

```bash
# Create repository for Docker images
gcloud artifacts repositories create lumgoo-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Lumgoo portfolio images"

# Configure Docker authentication
gcloud auth configure-docker us-central1-docker.pkg.dev
```

### 3. GKE Cluster Setup

```bash
# Create GKE cluster
gcloud container clusters create lumgoo-cluster \
    --zone=us-central1-a \
    --num-nodes=3 \
    --machine-type=e2-micro \
    --enable-autorepair \
    --enable-autoupgrade

# Get kubectl credentials
gcloud container clusters get-credentials lumgoo-cluster \
    --zone=us-central1-a
```

### 4. Install NGINX Ingress Controller

```bash
# Install NGINX Ingress Controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

# Wait for external IP
kubectl get service ingress-nginx-controller -n ingress-nginx
```

### 5. Install Cert-Manager (for SSL)

```bash
# Install cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.1/cert-manager.yaml

# Create Let's Encrypt issuer
cat <<EOF | kubectl apply -f -
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: your-email@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

## 🚀 Deployment Process

### 1. Build and Push Image

```bash
# Make script executable
chmod +x deploy/build-and-push.sh

# Update PROJECT_ID in script
vim deploy/build-and-push.sh

# Build and push to registry
./deploy/build-and-push.sh
```

### 2. Deploy to Kubernetes

```bash
# Update PROJECT_ID in deployment YAML
vim k8s/deployment.yaml

# Make script executable
chmod +x deploy/deploy-to-gke.sh

# Update configuration in script
vim deploy/deploy-to-gke.sh

# Deploy to GKE
./deploy/deploy-to-gke.sh
```

### 3. Configure Domain (DNS)

```bash
# Get external IP
kubectl get ingress lumgoo-ingress -n lumgoo

# Update DNS records at your domain provider:
# A record: lumgoo.com → EXTERNAL_IP
# CNAME record: www.lumgoo.com → lumgoo.com
```

## 🔍 Monitoring and Troubleshooting

### Health Checks

```bash
# Check application health
curl https://lumgoo.com/health

# Check pods
kubectl get pods -n lumgoo

# Check logs
kubectl logs -l app=lumgoo -n lumgoo --tail=50
```

### Common Issues

#### Build Failures

```bash
# Check build logs
docker build -t lumgoo:debug . --no-cache

# Common fixes:
# 1. Update .dockerignore
# 2. Check file paths in Dockerfile
# 3. Verify dependencies in package.json
```

#### Deployment Issues

```bash
# Check deployment status
kubectl describe deployment lumgoo-deployment -n lumgoo

# Check service endpoints
kubectl get endpoints -n lumgoo

# Check ingress configuration
kubectl describe ingress lumgoo-ingress -n lumgoo
```

#### SSL Certificate Issues

```bash
# Check certificate status
kubectl describe certificaterequest -n lumgoo
kubectl describe certificate lumgoo-tls -n lumgoo

# Check cert-manager logs
kubectl logs -n cert-manager -l app=cert-manager
```

## 📊 Performance Optimization

### Production Optimizations

- **Static file caching**: 1 year cache for assets
- **Gzip compression**: Enabled for all text content
- **CDN ready**: Static assets can be served via CDN
- **HTTP/2**: Enabled via NGINX
- **Security headers**: CSP, HSTS, and frame protection

### Monitoring Metrics

- **Response time**: < 200ms for static content
- **Uptime**: 99.9% availability target
- **Resource usage**: < 100MB RAM per pod
- **Build time**: < 2 minutes from commit to deployment

## 🔄 CI/CD Integration

### GitHub Actions Integration

The deployment can be automated using GitHub Actions:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GKE
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: google-github-actions/setup-gcloud@v1
        with:
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          project_id: ${{ secrets.GCP_PROJECT_ID }}
      - run: ./deploy/build-and-push.sh
      - run: ./deploy/deploy-to-gke.sh
```

## 🔒 Security Considerations

### Container Security

- **Non-root user**: NGINX runs as non-root
- **Minimal base image**: Alpine Linux for smaller attack surface
- **No secrets in image**: Environment variables for configuration
- **Regular updates**: Automated security updates for base images

### Kubernetes Security

- **Network policies**: Restrict pod-to-pod communication
- **RBAC**: Role-based access control for service accounts
- **Secret management**: Kubernetes secrets for sensitive data
- **Pod security standards**: Enforce security contexts

### Application Security

- **HTTPS only**: SSL/TLS termination at ingress
- **Security headers**: XSS, CSRF, and clickjacking protection
- **Content Security Policy**: Restrict resource loading
- **Rate limiting**: Prevent abuse and DDoS attacks

## 💰 Cost Optimization

### GCP Resource Costs (Estimated Monthly)

- **GKE Cluster**: $50-100 (3 x e2-micro nodes)
- **Load Balancer**: $15-20
- **Artifact Registry**: $1-5
- **Total**: ~$75-150/month

### Cost Reduction Tips

- Use **e2-micro** instances for development
- Enable **cluster autoscaling**
- Use **preemptible instances** for non-critical workloads
- Monitor usage with **GCP Billing alerts**

## 📚 Additional Resources

### Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GKE Documentation](https://cloud.google.com/kubernetes-engine/docs)
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [Cert-Manager Documentation](https://cert-manager.io/docs/)

### Support

- **Application Issues**: Check logs and health endpoints
- **Infrastructure Issues**: GCP Support or Stack Overflow
- **SSL Issues**: Let's Encrypt Community Forum

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Maintainer**: Lumgoo Team
