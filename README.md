# 🚀 Lumgoo Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and MobX. Features a clean design, project showcase, and comprehensive testing suite.

[![CI/CD Pipeline](https://github.com/your-username/lumgoo/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/lumgoo/actions/workflows/ci.yml)
[![Test Coverage](https://codecov.io/gh/your-username/lumgoo/branch/main/graph/badge.svg)](https://codecov.io/gh/your-username/lumgoo)

## 🌟 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, MobX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Showcase**: Interactive project cards with filtering
- **Performance Optimized**: Static generation with image optimization
- **Test Coverage**: 90%+ test coverage with Jest and React Testing Library
- **CI/CD Pipeline**: Automated testing, linting, and deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **State Management**: MobX with React Context
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **UI Components**: Swiper.js for carousels
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Deployment**: Docker + Google Cloud Platform

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lumgoo.git
cd lumgoo

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Testing

```bash
npm test             # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Makefile Commands

```bash
make start           # Start development server
make test            # Run tests
make lint            # Run linter
make coverage        # Run tests with coverage
make build           # Build application
```

## 📁 Project Structure

```
lumgoo/
├── .github/                 # GitHub Actions and templates
│   ├── workflows/
│   │   └── ci.yml          # CI/CD pipeline
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── pull_request_template.md
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/
│   │   ├── projects/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # React components
│   │   ├── common/
│   │   └── layout/
│   ├── stores/             # MobX stores
│   │   ├── ProjectStore.ts
│   │   ├── RootStore.ts
│   │   └── StoreProvider.tsx
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── __tests__/              # Test files
├── public/                 # Static assets
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
└── next.config.js         # Next.js configuration
```

## 🧪 Testing

The project maintains high test coverage (90%+) with comprehensive unit and integration tests.

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Requirements

- Minimum 75% test coverage (enforced by CI)
- Given/When/Then test structure
- Component testing with React Testing Library
- Store testing with MobX utilities

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://lumgoo.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@lumgoo.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Development Setup

1. **Code Quality**: Pre-commit hooks ensure code quality
2. **TypeScript**: Strict mode enabled
3. **ESLint**: Custom rules for React and TypeScript
4. **Prettier**: Consistent code formatting

## 🚀 Deployment

### Docker

```bash
# Build Docker image
docker build -t lumgoo .

# Run container
docker run -p 3000:3000 lumgoo
```

### Production

The application is deployed on Google Cloud Platform with:

- **Container Registry**: Docker images
- **Kubernetes**: Orchestration
- **Cloud Load Balancer**: Traffic management
- **Let's Encrypt**: SSL certificates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write tests for new functionality
5. Ensure all tests pass (`npm run test:coverage`)
6. Run linting (`npm run lint`)
7. Commit your changes (`git commit -m 'Add amazing feature'`)
8. Push to the branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Pull Request Requirements

- ✅ All CI checks must pass
- ✅ Test coverage must be ≥ 75%
- ✅ No ESLint errors
- ✅ TypeScript compilation successful
- ✅ All PR template sections completed

## 📊 Quality Standards

| Metric           | Target  | Status   |
| ---------------- | ------- | -------- |
| Test Coverage    | ≥ 75%   | ✅ 92.7% |
| ESLint Errors    | 0       | ✅       |
| Build Time       | < 3 min | ✅       |
| Lighthouse Score | ≥ 90    | 🔄       |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Lumgoo**

- Portfolio: [https://lumgoo.com](https://lumgoo.com)
- Email: contact@lumgoo.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Open source community for the tools and libraries

---

Built with ❤️ using Next.js and TypeScript
