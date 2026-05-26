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
- Node.js 20.9.0 or higher
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

## Docker Setup

### Prerequisites
- Docker
- Docker Compose

### Running with Docker

#### Production Build
```bash
docker-compose up --build
```

The application will be available at [http://localhost:3000](http://localhost:3000).

#### Development with Hot-Reload
To use the development Dockerfile with hot-reload capabilities:

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

Or update the `docker-compose.yml` to use the development service and run:
```bash
docker-compose up --build
```

### Docker Files

- **Dockerfile** - Multi-stage production build
- **Dockerfile.dev** - Development image with hot-reload support
- **docker-compose.yml** - Production and development service configuration
- **.dockerignore** - Files excluded from Docker build

### Common Docker Commands

```bash
# Build the image
docker build -t nextjs-portfolio .

# Run a container
docker run -p 3000:3000 nextjs-portfolio

# View running containers
docker ps

# Stop a container
docker stop <container_id>

# View logs
docker logs <container_id>
```

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
