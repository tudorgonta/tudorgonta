import Layout from "./components/Layout";
import GlobalStyle from "./globalStyles";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
    <>
      <GlobalStyle />
      <Layout />
    </>
    )
  );
}

export default App;
