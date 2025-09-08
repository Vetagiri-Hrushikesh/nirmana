# Nirmana IDE

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/nirmana/nirmana)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)](https://github.com/nirmana/nirmana)

**Nirmana** is a cross-platform, professional desktop IDE specifically designed for rapid visual app creation. Combining the power of a custom, high-performance UI framework (inspired by Visual Studio Code's core architecture) with the intuitive drag-and-drop workflow of modern no-code editors, Nirmana empowers both technical and non-technical creators to build sophisticated applications with ease.

## 🚀 Key Features

- **🎨 Drag-and-Drop Visual Editor** - Central canvas for constructing UIs by dragging components from a component library
- **🧩 Custom UI Framework** - Reusable, accessible UI components crafted in TypeScript using the DOM
- **📁 Project Explorer & Resource Management** - Left sidebar for managing all project screens, files, assets, and templates
- **⚙️ Properties & Inspector Panel** - Right panel dynamically shows properties and configuration for selected components
- **🔧 Logic/Workflow Editor** - Visual editor to create app logic, data flows, conditions, and event bindings
- **🤖 AI Assistant Panel** - Natural language-driven app building, code generation, and productivity enhancements
- **📦 Integrated Packaging & Deployment** - Built-in project builder using Electron Builder for cross-platform packaging
- **♿ Accessibility & Customization** - All panels designed for keyboard navigation and screen readers

## 🛠️ Technology Stack

- **Frontend**: TypeScript, Vite, Custom UI Framework
- **Desktop**: Electron 30+
- **Build System**: Gulp + Electron Builder
- **Package Manager**: npm
- **Testing**: Mocha, Playwright
- **Code Quality**: ESLint, TypeScript strict mode

## 📋 Prerequisites

- **Node.js**: v18.17.0 or later
- **npm**: v9.0.0 or later
- **Git**: Latest version

### Platform-Specific Requirements

#### Windows
- Visual Studio 2019 or 2022 (Community, Professional, or Enterprise)
- Windows 10/11 (x64 or ARM64)

#### macOS
- Xcode Command Line Tools
- macOS 10.15 or later (Intel or Apple Silicon)

#### Linux
- GCC/G++ compiler
- Python 3.x
- Ubuntu 18.04+ / CentOS 7+ / Fedora 30+

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/nirmana/nirmana.git
cd nirmana
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Development Mode
```bash
# Start development server with hot reload
npm run dev

# Or start Electron development mode
npm run dev:electron
```

### 4. Build the Application
```bash
# Build for current platform
npm run build

# Build for specific platforms
npm run build:web      # Web version
npm run build:electron # Electron version
```

### 5. Package the Application
```bash
# Package for current platform
npm run package

# Package for specific platforms
npm run package:mac    # macOS (DMG + ZIP)
npm run package:win    # Windows (NSIS + Portable)
npm run package:linux  # Linux (AppImage + DEB + RPM)

# Package for all platforms
npm run package:all
```

## 📁 Project Structure

```
nirmana/
├── src/                          # Main TypeScript source code
│   ├── nirmana/                  # Core nirmana framework
│   │   ├── base/                 # Foundation utilities
│   │   ├── platform/             # Platform services
│   │   ├── editor/               # Visual editor core
│   │   └── workbench/            # Main application UI
│   └── main.ts                   # Application entry point
├── build/                        # Build system
│   ├── gulpfile.js               # Main gulp configuration
│   ├── lib/                      # Build utilities
│   └── npm/                      # NPM scripts
├── extensions/                   # Built-in extensions
│   ├── component-library/        # Default component library
│   ├── templates/                # App templates
│   └── themes/                   # Built-in themes
├── resources/                    # Static resources
│   ├── icons/                    # Application icons
│   ├── themes/                   # Theme assets
│   └── templates/                # Template assets
├── scripts/                      # Development scripts
├── test/                         # Test infrastructure
└── docs/                         # Documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suites
npm run test-unit         # Unit tests
npm run test-integration  # Integration tests
npm run test-smoke        # UI tests
```

## 🔧 Development Scripts

### Core Development
- `npm run dev` - Start development server with hot reload
- `npm run watch` - Watch mode for continuous compilation
- `npm run compile` - Compile TypeScript and extensions
- `npm run build` - Build for production

### Packaging & Distribution
- `npm run package` - Package for current platform
- `npm run dist` - Create distribution packages
- `npm run clean` - Clean build artifacts

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run hygiene` - Run all hygiene checks
- `npm run precommit` - Pre-commit checks

### Extensions
- `npm run compile-extensions` - Compile built-in extensions
- `npm run bundle-components` - Bundle component library
- `npm run update-extensions` - Update extension dependencies

## 🏗️ Build System

Nirmana uses a hybrid build system combining:

- **Vite** - Fast development server and bundling
- **Gulp** - Complex build tasks and asset processing
- **Electron Builder** - Cross-platform packaging
- **TypeScript** - Type-safe development

### Gulp Tasks

```bash
# Use gulp directly
npm run gulp <task-name>

# Common gulp tasks
npm run gulp compile              # Compile everything
npm run gulp watch                # Watch mode
npm run gulp compile-extensions   # Compile extensions
npm run gulp bundle-components    # Bundle components
```

## 🎯 Architecture

Nirmana follows a layered architecture inspired by Visual Studio Code:

1. **Base Layer** (`src/nirmana/base/`) - Foundation utilities and cross-platform abstractions
2. **Platform Layer** (`src/nirmana/platform/`) - Platform services and dependency injection
3. **Editor Layer** (`src/nirmana/editor/`) - Visual editor implementation
4. **Workbench Layer** (`src/nirmana/workbench/`) - Main application UI and features

### Key Principles

- **Dependency Injection** - Service-based architecture
- **Contribution Model** - Extensible feature system
- **Layered Architecture** - Clear separation of concerns
- **Cross-platform Compatibility** - Platform-specific implementations
- **Extension System** - Plugin architecture for components

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Code Style

- Use TypeScript strict mode
- Follow ESLint configuration
- Write unit tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Visual Studio Code's architecture and build system
- Built with Electron and the amazing open-source community
- Special thanks to all contributors and supporters

## 📞 Support

- **Documentation**: [docs.nirmana.dev](https://docs.nirmana.dev)
- **Issues**: [GitHub Issues](https://github.com/nirmana/nirmana/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nirmana/nirmana/discussions)
- **Email**: support@nirmana.dev

---

**Made with ❤️ by the Nirmana Team**
