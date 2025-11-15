import { MainContent } from "./components/MainLayout";
import { ThemeProvider } from "./components/ThemeContext";


const App = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default App;