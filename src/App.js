import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Simple from "./simple";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Simple />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
export default App;
