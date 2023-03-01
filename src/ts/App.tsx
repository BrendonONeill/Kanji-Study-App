import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
const App = () => {
  return (
    <>
    <Router>
      <Pages />
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
