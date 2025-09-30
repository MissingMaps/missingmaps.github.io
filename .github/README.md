# GitHub Actions Workflows

This directory contains the CI/CD workflows for the Missing Maps website.

## Workflows

### 📦 `deploy.yml` - CI/CD Pipeline
- **Triggers**: Push to `main`, `master`, or `publish` branches; Pull requests
- **Purpose**: Build and deploy the site to GitHub Pages
- **Features**:
  - Ruby and Node.js environment setup
  - Dependency caching
  - JavaScript linting
  - Jekyll build with Gulp
  - Automated deployment to GitHub Pages (publish branch only)

### 🧪 `test.yml` - Pull Request Tests
- **Triggers**: Pull requests to main branches
- **Purpose**: Test builds and validate changes
- **Features**:
  - Build verification
  - Asset generation checks
  - Lint validation

### 🔒 `security.yml` - Security and Dependency Checks
- **Triggers**: Weekly schedule, dependency file changes, manual trigger
- **Purpose**: Monitor security and dependency health
- **Features**:
  - NPM security audit
  - Ruby security audit with bundler-audit
  - Outdated dependency checks
  - Code linting and formatting validation

## Dependabot Configuration

The `.github/dependabot.yml` file configures automated dependency updates:
- **NPM packages**: Weekly updates on Sundays
- **Ruby gems**: Weekly updates on Sundays  
- **GitHub Actions**: Weekly updates on Sundays
- **Grouping**: Development vs production dependencies
- **Auto-assignment**: PRs assigned to maintainers

## Migration from Travis CI

This setup replaces the previous Travis CI configuration with modern GitHub Actions:
- ✅ Improved security with GitHub's built-in secrets management
- ✅ Better integration with GitHub features
- ✅ More granular control over workflows
- ✅ Built-in GitHub Pages deployment
- ✅ Automated dependency management

## Required Secrets

No additional secrets are required - GitHub Actions uses built-in `GITHUB_TOKEN` for deployment.

## Branch Strategy

- **`publish`**: Production deployment branch (auto-deploys to GitHub Pages)
- **`main`/`master`**: Development branch (tests only)
- **Feature branches**: Pull request testing only