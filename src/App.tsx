import { Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  )
}

export default App
