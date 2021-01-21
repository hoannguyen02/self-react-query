import { useQuery } from "react-query";

export default Simple;

function Simple() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading ...";

  if (error) return "An error has occurred:" + error.message;

  return (
    <div>
      <h1> {data && data.name} </h1>
    </div>
  );
}
