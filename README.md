# Static Job Listings 💼

![preview](/public/desktop-preview.jpg)

## Overview

A responsive and interactive job listings application built with Vue 3, TypeScript, and Tailwind CSS. This project is a solution to the Frontend Mentor challenge, demonstrating modern web development practices.

## 🚀 Features

- Dynamic job listing display
- Interactive tag-based filtering
- Responsive design for mobile and desktop
- Modern UI with hover states
- Semantic HTML structure

## 🛠 Technologies

- Vue 3
- TypeScript
- Tailwind CSS
- Vite
- Vue Composition API

## 📦 Prerequisites

- Node.js (v18+)
- npm or pnpm

## 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/mechitoua/static-job-listings.git
cd static-job-listings
```

2. Install dependencies

```bash
pnpm install
```

3. Run development server

```bash
pnpm run dev
```

## 🌐 Build for Production

```bash
pnpm run build
```

## 📂 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Vue components
│   ├── JobCard.vue   # Individual job listing component
│   └── FilterBar.vue # Filtering interface
├── composables/      # Vue composition functions
│   └── useJobFilters.ts  # Filtering logic
├── data/             # Static data
│   └── jobs.ts       # Job listings data
└── types/            # TypeScript type definitions
    └── job.ts        # Job interface
```

## 🎨 Design Highlights

- Mobile-first responsive design
- Flexible tag-based filtering system
- SVG logo integration
- Tailwind CSS for rapid styling

## 🖼️ Design Preview

| Desktop Design                                | Mobile Design with Filters                        |
| --------------------------------------------- | ------------------------------------------------- |
| ![Desktop Design](/public/desktop-design.jpg) | ![Mobile Design](/public/mobile-with-filters.jpg) |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m '✨ Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🏆 Challenge by

[Frontend Mentor](https://www.frontendmentor.io)
