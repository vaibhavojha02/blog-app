
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
