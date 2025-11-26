# 🎯 Portfolio

A modern, responsive portfolio website built with **Angular 20** and **SCSS**. Showcase your projects, skills, and professional experience with an elegant and interactive user interface.

## ✨ Features

- **Responsive Design** - Mobile-first approach with SCSS styling
- **Multi-language Support** - i18n support for English, German, and French
- **Modern Angular Stack** - Built with Angular 20+ and latest best practices
- **Component-Based Architecture** - Modular, reusable components
- **Contact Form** - Email integration using PHP backend
- **Projects Showcase** - Display your portfolio projects with cards
- **Testimonials Section** - Share client feedback and reviews
- **Skills Display** - Highlight your professional skills
- **Social Links** - Integration with social media profiles
- **Unit Testing** - Comprehensive test suite with Karma/Jasmine

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI v20+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DeveloperRucel07/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests |
| `ng serve` | Serve with Angular CLI |

## 🎨 Styling

The project uses **SCSS** for styling with:
- Centralized color variables in `_color.scss`
- Reusable mixins in `_mixins.scss`
- Component-scoped styles for maintainability
- Responsive design patterns

## 🌐 Multi-Language Support

Translation files are located in `src/assets/i18n/`:
- `en.json` - English
- `de.json` - German
- `fr.json` - French

## 📧 Contact Form

The contact form uses a PHP backend (`sendMail.php`) to handle email submissions. Ensure your server supports PHP for full functionality.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

The project uses:
- **Jasmine** - Testing framework
- **Karma** - Test runner
- **Chrome Launcher** - Browser for tests

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript settings
- `tsconfig.spec.json` - Test-specific TypeScript settings
- `angular.json` - Angular CLI configuration

## 📱 Responsive Breakpoints

The design follows mobile-first principles with SCSS mixins for responsive layouts across:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

## 🚢 Production Build

Create a production build:
```bash
npm run build
```

The compiled output will be in the `dist/portfolio` directory, ready for deployment.

## 📄 Legal Pages

- **Privacy Policy** - `/privacy-policy`
- **Legal Notice** - `/legal-notice`


Built with ❤️ using Angular 20