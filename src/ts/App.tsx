import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";
import { ThemeProvider } from "./ThemeContext";
import Pages from "./Pages/Pages";

const App = () => {
  return (
    <>
    <Router>
      <GlobalProvider>
      <ThemeProvider>
      <Pages />
      </ThemeProvider>
      </GlobalProvider>
    </Router>
    </>
  );
};
const container : HTMLElement | null = document.getElementById("root");
console.log(container)
if(container !== null)
{
  const root = createRoot(container);
  root.render(<App />);
}
