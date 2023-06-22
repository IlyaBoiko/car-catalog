import { BrowserRouter, Routes, Route } from "react-router-dom"
import CarDetail from "../screens/car-detail/CarDetail"
import Home from "../screens/home/Home"


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CarDetail />} path="/car/:id" />

            <Route element={<div>Not found</div>} pathname="*" />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
