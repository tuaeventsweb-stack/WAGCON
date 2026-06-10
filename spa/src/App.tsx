import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Pages
import HomePage from './pages/Home'
const About    = lazy(() => import('./pages/about'))
const Agenda   = lazy(() => import('./pages/agenda'))
const Contact  = lazy(() => import('./pages/contact'))
const Exhibit  = lazy(() => import('./pages/exhibit'))
const Gallery  = lazy(() => import('./pages/gallery'))
const Partners = lazy(() => import('./pages/partners'))
const Speakers = lazy(() => import('./pages/speakers'))
const Tickets  = lazy(() => import('./pages/tickets'))
const Venues   = lazy(() => import('./pages/venues'))

function Loading() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#FF6B35] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<About />} />
          <Route path="/agenda"   element={<Agenda />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/exhibit"  element={<Exhibit />} />
          <Route path="/gallery"  element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/tickets"  element={<Tickets />} />
          <Route path="/venues"   element={<Venues />} />
          <Route path="*"         element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
