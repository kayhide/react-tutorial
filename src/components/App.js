import React from "react";

import MainAppBar from "components/MainAppBar";
import AppRoutes from "components/AppRoutes";


function App(props) {
  return (
    <div>
      <MainAppBar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
};


export default App;
