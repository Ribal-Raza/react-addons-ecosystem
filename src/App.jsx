import { CounterLayout } from "./components";
import { CounterProvider } from "./context/CounterContext";

const App = () => {
  return (
    <div>
      <CounterProvider>
        <CounterLayout />
      </CounterProvider>
    </div>
  );
};

export default App;
