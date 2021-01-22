import { useQuery, useQueryClient } from "react-query";

import axios from "axios";

export default Posts;
function Posts({ setPostId }) {
  const queryClient = useQueryClient();

  const { status, data, error, isFetching } = usePosts();

  return (
    <>
      <h1>Posts</h1>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div>
            {data.map((post) => (
              <p key={post.id}>
                <button
                  onClick={() => setPostId(post.id)}
                  style={
                    queryClient.getQueryData(["post", post.id])
                      ? { fontWeight: 700, color: "green" }
                      : {}
                  }
                >
                  {post.title}
                </button>
              </p>
            ))}
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </>
  );
}

function usePosts() {
  return useQuery("posts", async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return data;
  });
}
