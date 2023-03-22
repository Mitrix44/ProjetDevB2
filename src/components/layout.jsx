
import '../styles/variables.css'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import '../styles/layoutStyle.css'

function Layout () {
  return (
    <>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
