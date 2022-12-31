import { AppRouter } from "./AppRouter";
import { AppProvider } from "./Components/Context/AppProvider";

function App() {

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App;
