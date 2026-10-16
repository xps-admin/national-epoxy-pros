import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home, Image, Mail } from 'lucide-react'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import RequestQuote from './pages/RequestQuote.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
          <h1 className="text-lg font-bold mb-4 px-2">NATIONAL EPOXY PROS</h1>
          <Link to="/home" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Home className="w-4 h-4" />
            Home
          </Link>
          <Link to="/gallery" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Image className="w-4 h-4" />
            Gallery
          </Link>
          <Link to="/request-quote" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Mail className="w-4 h-4" />
            Get a Quote
          </Link>
        </nav>
        <main className="flex-1 overflow-auto p-8">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/request-quote" element={<RequestQuote />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}