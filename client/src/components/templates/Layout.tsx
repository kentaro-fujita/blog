import React, { Fragment } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="flex-1 lg:mt-20">
        <section className="container px-4 py-10 lg:w-3/5 mx-auto">
          {children}
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
