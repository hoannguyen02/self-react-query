import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Simple from "./simple";
import { useState } from "react";
import Posts from "./posts";
import Post from "./post";

const queryClient = new QueryClient();

function App() {
  const [postId, setPostId] = useState(-1);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Simple /> */}
      {postId === -1 ? (
        <Posts setPostId={setPostId} />
      ) : (
        <Post postId={postId} setPostId={setPostId} />
      )}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
export default App;
