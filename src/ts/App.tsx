import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext";
import { ThemeProvider } from "./ThemeContext";
import Pages from "./Pages/Pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <GlobalProvider>
            <ThemeProvider>
              <Pages />
            </ThemeProvider>
          </GlobalProvider>
        </Router>
      </QueryClientProvider>
    </>
  );
};
const container: HTMLElement | null = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
}
