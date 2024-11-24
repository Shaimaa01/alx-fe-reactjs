import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying details for blog post ID: {id}</p>
    </div>
  );
}

export default BlogPost;
