import { useQuery } from "react-query";
import axios from "axios";

export default Post;

function Post({ postId, setPostId }) {
  const { status, data, error } = usePost(postId);
  return (
    <>
      <button onClick={() => setPostId(-1)}> Back</button>
      {!postId || status === "loading" ? (
        <div>Loading</div>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
        </>
      )}
    </>
  );
}

function usePost(postId) {
  return useQuery(["post", postId], () => getPostById(postId), {
    enabled: !!postId,
  });
}

async function getPostById(id) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
}
