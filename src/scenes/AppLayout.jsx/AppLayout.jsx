import { Outlet } from "react-router-dom"
import Navbar from "scenes/navbar"

const AppLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default AppLayout
