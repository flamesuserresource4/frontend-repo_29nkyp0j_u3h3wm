import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import { Rocket, Linkedin, Github, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0077ff] text-white shadow-sm">
              <Rocket size={18} />
            </div>
            <div className="leading-tight">
              <div className="font-manrope text-lg font-bold">Optivex Solutions</div>
              <div className="text-xs text-gray-500">Intelligence. Innovation. Impact.</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Case Studies</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="#contact" className="rounded-lg bg-[#0077ff] px-4 py-2 text-white shadow-sm transition-colors hover:bg-blue-600">Get a Free Consultation</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <div id="work">
          <Showcase />
        </div>
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-manrope text-lg font-bold">Optivex Solutions</div>
            <p className="mt-1 text-sm text-gray-600">Empowering businesses with intelligent digital solutions.</p>
            <nav className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900">Home</a>
              <a href="#services" className="hover:text-gray-900">Services</a>
              <a href="#work" className="hover:text-gray-900">Case Studies</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="LinkedIn" href="#" className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50"><Linkedin size={18} /></a>
            <a aria-label="GitHub" href="#" className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50"><Github size={18} /></a>
            <a aria-label="Email" href="mailto:hello@optivex.ai" className="rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50"><Mail size={18} /></a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl px-6 text-xs text-gray-500 lg:px-8">© {new Date().getFullYear()} Optivex Solutions. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
