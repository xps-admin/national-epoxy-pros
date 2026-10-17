import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LayoutDashboard, Hammer, FileText } from 'lucide-react'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import Quotes from './pages/Quotes.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
          <h1 className="text-lg font-bold mb-4 px-2">national epoxy pros</h1>
          <Link to="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link to="/projects" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Hammer className="w-4 h-4" />
            Projects
          </Link>
          <Link to="/quotes" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><FileText className="w-4 h-4" />
            Quotes
          </Link>
        </nav>
        <main className="flex-1 overflow-auto p-8">
          <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}