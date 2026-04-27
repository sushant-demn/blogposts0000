<div align="center">
  <h1>📝 BlogPosts Platform</h1>
  <p>A modern, full-stack blogging platform built with React, Vite, TypeScript, and Supabase.</p>
</div>

<br />

## 🌟 Overview

This project is a high-performance, fully responsive blogging application designed with a modern tech stack. Generated initially via [Lovable](https://lovable.dev), it integrates a robust Supabase backend with a sleek React frontend powered by Tailwind CSS and shadcn/ui. 

Whether you're writing, reading, or managing posts, the platform provides a seamless experience, including full markdown support for rich text rendering.

## 🚀 Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Backend & Database:** [Supabase](https://supabase.com/) (PostgreSQL, Authentication)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **State Management & Data Fetching:** [TanStack React Query](https://tanstack.com/query/latest)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Markdown Rendering:** `react-markdown`
- **Package Manager:** [Bun](https://bun.sh/) (or npm)

## ✨ Key Features

- **User Authentication:** Secure login and registration powered by Supabase Auth.
- **Rich Markdown Support:** Write and render blog posts with full markdown formatting.
- **Modern UI Components:** Beautiful, accessible, and customizable UI built with Radix UI and shadcn/ui.
- **Responsive Design:** Fully mobile-responsive layout using Tailwind CSS.
- **Toast Notifications:** Real-time user feedback using Sonner.
- **Light/Dark Mode:** Built-in theme switching support.

## 📁 Project Structure

```text
├── src/                # React frontend source code
│   ├── components/     # Reusable UI components (shadcn/ui, etc.)
│   ├── pages/          # Application routes/pages
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   └── main.tsx        # Application entry point
├── supabase/           # Supabase edge functions, migrations, and types
├── public/             # Static assets
├── .env                # Environment variables
└── package.json        # Project dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- [Bun](https://bun.sh/) (optional but recommended, as `bun.lockb` is included)
- A [Supabase](https://supabase.com/) account and project.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sushant-demn/blogposts0000.git
   cd blogposts0000
   ```

2. **Install dependencies:**
   Using Bun:
   ```bash
   bun install
   ```
   Or using npm:
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory (or update the existing one) with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port Vite provides) to see the app running.

## 🚀 Deployment

### Frontend
You can easily deploy the frontend to platforms like [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [Lovable](https://lovable.dev) with zero configuration. Simply connect your GitHub repository and set the build command to `npm run build` and the output directory to `dist`.

### Backend
Supabase handles the backend automatically. Ensure your database tables (e.g., `posts`, `users`) and Row Level Security (RLS) policies are correctly configured in your Supabase dashboard or via the migrations in the `supabase/` directory.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the platform:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📜 License

This project is open-source and available for use and modification.
