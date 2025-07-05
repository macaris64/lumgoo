# 📦 Frontend Production Deployment Roadmap (PDR)

**Project Name:** lumgoo
**Domain:** [https://lumgoo.com](https://lumgoo.com)
**Type:** Personal Portfolio Website
**Technologies:** React, Next.js, TypeScript, MobX, Jest
**Deployment Target:** Google Cloud (GKE)

---

## ✅ 1. Project Structure & Page Layout

### Landing Page

- Slide section: animated transitions using dummy images (e.g., Swiper.js)
- Projects Preview: highlight projects in card layout
- About Me Summary: short bio with link to detailed page

### Other Pages

- `/projects`: List of all projects with filtering and detail links
- `/about`: Extended resume, tech stack tags, contact info

---

## ⚙️ 2. Technologies & Tooling

- **Next.js (React + TypeScript)**
- **MobX**: Global state management
- **Jest + React Testing Library**: Testing framework
- **ESLint + Prettier**: Linting and formatting
- **Makefile**: CLI commands (test, lint, coverage, build, run)
- **GitHub Actions**: CI pipeline (lint, test, coverage, build)
- **All source code and comments must be in English.**

---

## 📝 3. Development Rules

- Main branches (`main` / `master`) are protected; direct push is not allowed
- All contributions must be via Pull Request (PR)
- Merge strategy: **Squash and Merge** only
- CI pipeline must pass before PRs can be merged
- Minimum test coverage is 75%; below this will cause CI to fail
- PR template is mandatory: must include description, screenshots, and test status

---

## 🚀 4. Roadmap

### Docker Integration

- [x] Dockerfile for production build and export is prepared
- [x] NGINX serves static export from Next.js
- [x] `.dockerignore` excludes unnecessary files from the image
- [x] Docker image pushed to GCP Artifact Registry
- [x] Docker build/test integrated into CI pipeline

### Phase 1: Initial Setup

- [x] Initialized with `create-next-app` and TypeScript
- [x] Configured MobX with root store and context
- [x] Created routes: `/`, `/projects`, `/about`
- [x] Implemented dummy slider component and page content

### Phase 2: Testing & Lint Infrastructure

- [x] Setup Jest and React Testing Library
- [x] Wrote Given-When-Then style test cases
- [x] Added coverage threshold rule: minimum 75%
- [x] ESLint and Prettier configured and added to scripts

### Phase 3: CI/CD

- [x] GitHub Actions pipeline: lint → test → coverage → build
- [x] CI passing is required to merge PR
- [x] Coverage badge integrated
- [x] Branch protection enabled

### Phase 4: Docker & GCP Deployment

- [x] Dockerfile serves Next.js static export via NGINX
- [x] Docker image pushed to GCP Artifact Registry
- [x] Kubernetes deployment, service, ingress YAML files created
- [x] Domain routed via Godaddy, TLS via Let's Encrypt

---

## ✨ 5. Quality Standards

| Criteria             | Target      |
| -------------------- | ----------- |
| Test coverage        | ≥ 75%       |
| ESLint errors        | 0           |
| Merge strategy       | Squash only |
| CI pipeline duration | < 3 minutes |

---

## 🛠️ Makefile Example

```makefile
start:
	npm run dev

test:
	npm run test

lint:
	npx eslint .

coverage:
	npm run test -- --coverage

build:
	npm run build
```

---

## 🧪 Test Style (Given / When / Then)

```tsx
// example.test.tsx

describe("ExampleComponent", () => {
  it("renders the correct title", () => {
    // Given
    const title = "Hello World";

    // When
    render(<ExampleComponent title={title} />);

    // Then
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
```

---

## 📁 Config Files & Environment Management

### .env and .env.example

- `.env`: Contains actual secrets and environment variables (excluded from Git)
- `.env.example`: Reference template for expected variables

```env
# .env.example
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=
```

### GCP Integration

- Environment variables managed via `.env`
- CI/CD pipeline auto-loads variables for deploy
- Optionally integrated with Google Secret Manager

---

## 📄 README.md Contents (Planned)

- Project Overview
- Technologies Used
- Installation Steps
- CLI Commands (npm + makefile)
- Environment Variables
- Test & Lint Instructions
- CI/CD Pipeline Summary
- Deployment Guide (Docker & GCP)

---

## 🚫 .gitignore Rules

```gitignore
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Next.js
.next/
out/

# Test & Coverage
coverage/
*.lcov

# Build outputs
dist/
build/

# TypeScript
*.tsbuildinfo

# MacOS
.DS_Store

# IDE
.idea/
.vscode/
*.swp
*.swo

# Cursor
.cursor/
.cursor-config.json

# Memory bank
memory-bank.json

# Google Cloud & Auth
*.key.json
*.gcloud/
.gcloud/

# Logs
logs/
*.log

# Misc
*.cache
```

---

This document outlines the full technical foundation and engineering principles of the "lumgoo" frontend project. It will be continuously updated as the project evolves. Ready to start setup? 🚀
