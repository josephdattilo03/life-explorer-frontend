
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home"

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}/>
    </Routes>
    </BrowserRouter>
  )
}
