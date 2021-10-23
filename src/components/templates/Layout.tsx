import React, { Fragment } from 'react'
import Foot from '../organisms/Footer'
import NavBar from '../organisms/NavBar'

export type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <main className="flex-1 lg:mt-20">
        <section className="container px-4 py-10 lg:w-9/12 mx-auto">
          {children}
        </section>
      </main>
      <Foot />
    </Fragment>
  )
}
export default Layout
