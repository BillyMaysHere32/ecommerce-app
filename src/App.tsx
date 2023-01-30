import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
  <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/ecommerce-app/" element={<Home />} />
        <Route path="/ecommerce-app/store" element={<Store />} />
        <Route path="/ecommerce-app/about" element={<About />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App
