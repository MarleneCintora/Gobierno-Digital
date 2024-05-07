import React from "react";
import Catalog from "./Catalog";
import NavigationBreadcrumbs from "./NavigationBreadcrumbs";
import Footer from "./Footer";

export default function Home() {
  return (

    <div className="App">
      <div style={{ padding: "5px" }}>
        <NavigationBreadcrumbs/>
        <Catalog/>
        <Footer />
      </div>
    </div>
  );
};
