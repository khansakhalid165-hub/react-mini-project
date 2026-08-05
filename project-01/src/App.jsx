import './App.css'
import Accordian from './components/accordian/Index'

function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/80 ring-1 ring-slate-200">
        <header className="mb-8">
          
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Travel FAQ Accordion</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Click a question to expand the answer. This UI uses Tailwind utility classes for layout, spacing, and colors.</p>
        </header>

        <Accordian />
      </div>
    </main>
  )
}

export default App
