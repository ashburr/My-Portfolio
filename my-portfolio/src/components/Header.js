import React from "react";

const Header = () => {
  return (
    <React.StrictMode>
      <header
        style={{
          backgroundColor: "#A348FA",
          position: "fixed",
          width: "100%",
          height: "60px",
          top: 0,
        }}
      >
        <h1 style={{ margin: 0 }}>A heading here</h1>
      </header>
    </React.StrictMode>
  );
};

export default Header;
