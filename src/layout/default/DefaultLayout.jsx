import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

function DefaultLayout() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Body */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default DefaultLayout