# Architecture Refactoring - SOLID Principles

This portfolio has been refactored to follow **SOLID principles** and modern React patterns for maintainability, scalability, and reusability.

## Directory Structure

```
nextjs-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── HeroSection.js
│   │   ├── PhilosophySection.js
│   │   ├── SkillsSection.js
│   │   ├── ProjectsSection.js
│   │   ├── ExperienceSection.js
│   │   ├── ContactSection.js
│   │   ├── Footer.js
│   │   ├── BackgroundGlow.js
│   │   └── index.js        # Barrel exports
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.js     # Theme management
│   │   ├── useScrolled.js  # Scroll detection
│   │   └── index.js        # Barrel exports
│   ├── constants/          # Static data and configuration
│   │   ├── content.js      # Page content strings
│   │   ├── navigation.js   # Navigation links
│   │   ├── skills.js       # Skills data
│   │   └── index.js        # Barrel exports
│   └── lib/                # Utility functions
│       └── dataLoader.js   # Data loading utilities
├── pages/
│   ├── index.js            # Main page (clean, composition-based)
│   └── _app.js
├── styles/
├── data/
├── public/
└── REFACTORING.md          # This file
```

## SOLID Principles Applied

### 1. **Single Responsibility Principle (SRP)**
Each component/hook has a single, well-defined responsibility:
- `Navbar.js` - Navigation UI only
- `useTheme.js` - Theme management logic only
- `HeroSection.js` - Hero section rendering only
- Each small component like `PhilosophyCard` handles one card

### 2. **Open/Closed Principle (OCP)**
Components are **open for extension, closed for modification**:
- Content is externalized in `constants/` files
- Easy to add new sections or modify content without changing component code
- `SKILLS_DATA`, `NAV_LINKS`, `ABOUT` cards can be extended without touching components

### 3. **Liskov Substitution Principle (LSP)**
Components can be substituted with compatible implementations:
- Section components (HeroSection, SkillsSection, etc.) follow the same interface
- Easy to swap implementations or add variants

### 4. **Interface Segregation Principle (ISP)**
Components accept only the props they need:
- `Navbar` receives: `scrolled`, `isDark`, `onToggleTheme`
- `ProjectCard` receives only: `role`, `title`, `description`, `metrics`, `tech`
- No bloated prop interfaces

### 5. **Dependency Inversion Principle (DIP)**
Components depend on abstractions, not concrete implementations:
- `ProjectsSection` depends on props interface, not specific data sources
- `useTheme` provides an abstraction for theme management
- `dataLoader` abstracts data fetching

## Key Improvements

### Before (Monolithic)
```jsx
export default function Home() {
  // 300+ lines
  // All logic mixed in one component
  // Inline data definitions
  // Hard to test, reuse, or maintain
}
```

### After (Modular)
```jsx
// pages/index.js
import Navbar from '../src/components/Navbar';
import { useTheme } from '../src/hooks/useTheme';
import { PROFILE } from '../src/constants/content';

export default function Home({ projects, experience }) {
  const { isDark, toggleTheme, isLoaded } = useTheme();
  const scrolled = useScrolled();
  
  return (
    <div>
      <Navbar scrolled={scrolled} isDark={isDark} onToggleTheme={toggleTheme} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      {/* ... other sections ... */}
    </div>
  );
}
```

## Benefits

✅ **Testability** - Components and hooks are isolated and easy to unit test  
✅ **Reusability** - Components can be used in different pages/contexts  
✅ **Maintainability** - Changes to one section don't affect others  
✅ **Scalability** - Easy to add new sections or features  
✅ **Readability** - Clear component hierarchy and responsibility  
✅ **Performance** - Potential for code splitting and optimization  

## Data Flow

```
pages/index.js
  ├── getStaticProps() → loads data via dataLoader
  └── Renders:
      ├── <Navbar />
      ├── <HeroSection />
      ├── <SkillsSection /> (manages internal state)
      ├── <ProjectsSection projects={data} />
      ├── <ExperienceSection experience={data} />
      └── <ContactSection />
```

## Custom Hooks

### `useTheme()`
Manages theme switching with localStorage persistence:
```jsx
const { isDark, toggleTheme, isLoaded } = useTheme();
```

### `useScrolled()`
Detects scroll position for navbar styling:
```jsx
const scrolled = useScrolled();
```

## Static Data Organization

- **`constants/content.js`** - Page titles, descriptions, philosophy text
- **`constants/navigation.js`** - Navigation and contact links
- **`constants/skills.js`** - Skills by category
- **`lib/dataLoader.js`** - JSON data loading (projects, employment)

All content can be updated without touching component code.

## Adding New Features

### To add a new section:
1. Create `components/MySection.js`
2. Add content to `constants/content.js`
3. Import and use in `pages/index.js`

### To modify content:
- Edit files in `constants/` or `data/` folders
- No component code changes needed

### To extract component logic:
1. Create a custom hook in `hooks/` for shared logic
2. Use in multiple components
3. Easy testing and reuse

## Next Steps (Optional Enhancements)

- Add unit tests using Jest/React Testing Library
- Add prop validation with PropTypes or TypeScript
- Create Storybook for component documentation
- Add more granular component composition
- Implement error boundaries
- Add loading states for data fetching
