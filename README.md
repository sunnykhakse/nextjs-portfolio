# Next.js Portfolio

A modern portfolio website built with Next.js, showcasing your projects and employment history.

## Project Structure

```
nextjs-portfolio/
├── pages/              # Next.js page components
│   ├── _app.js        # App wrapper and global configuration
│   └── index.js       # Home page
├── public/            # Static assets
├── styles/            # CSS stylesheets
│   ├── globals.css    # Global styles
│   └── Home.module.css # Home page styles
├── data/              # Data files
│   ├── employment.json # Employment history
│   └── projects.json   # Projects data
└── package.json       # Project dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js 14.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server

## Data Management

- **employment.json** - Contains your employment history and work experience
- **projects.json** - Contains your portfolio projects and showcases

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- CSS Modules - Component-scoped styling

## License

This project is open source and available under the MIT License.
