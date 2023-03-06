import React from "react";
import "./App.css";
import AuthWrapper from "./layouts/AuthWrapper";
import NavigationLayout from "./layouts/NavigationLayout";

const App = () => {
  return (
    <AuthWrapper>
      <NavigationLayout>
        <div>
          <p>Instagram</p>
        </div>
      </NavigationLayout>
    </AuthWrapper>
  );
};

export default App;
