import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { createTheme, ThemeProvider } from "@mui/material";
import './App.css'

const theme = createTheme({
  
    palette: {
      primary: {
        main: "#00695f",
      secondary: {
        main: "#00a152",
    },}
  
  
}});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="container" >
      <Header />
      <MainContainer />
    </div>
    </ThemeProvider>
  );
}

export default App;
