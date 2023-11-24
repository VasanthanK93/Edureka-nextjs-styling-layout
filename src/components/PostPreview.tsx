"use client";
import { Post } from "../interfaces/post";
import axios from 'axios';
import Link from "next/link";
import "./style.scss";

async function getPost() : Promise<Post[]>{
  const response = await axios.get('http://localhost:3600/posts');
  if (!response) {
      throw new Error("Unable to fetch data");
  }

  return response.data;
}

const PostPreview = async () => {
  const postData =  await getPost()
    return (
      <div>
      {postData.map((post) => (
        <div key={post.slug} className="postPreview">
        <Link href={`posts/${post.slug}`} className="title">{post.title}
        </Link>
        <p className="excerpt">{post.excerpt}</p>
      </div>
      ))}
      <style jsx>
        {`
          @import "./style.scss";
        `}
      </style>
    </div>
    )
}

export default PostPreview;