"use client";
import { Post } from "../../../src/interfaces/post";
import axios from "axios";
import "./style.scss";

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string): Promise<Post> {
  const response = await axios.get(`http://localhost:3600/posts/${slug}`);
  if (!response) {
    throw new Error("Unable to fetch data");
  }
  return response.data[0];
}

const Post = async ({ params }: Props) => {
  const postData = await getPost(params.slug)

  if (!postData) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <article className="post">
        <h1>{postData.title}</h1>
        <div className="content">{postData.content}</div>
      </article>
      <style jsx>
        {`
          @import "./style.scss";
        `}
      </style>
    </div>
  );
}

export default Post;