// @ts-check
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "../data/BlogData";
import Blog from "../components/Blog";

const EachBlog = () => {
  let params = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const matchedBlogs = BlogData.filter((blog) => {
      return blog.hashtags.map((hashtag) => {
        return hashtag.value;
      }).includes(params.blogId || "");
    });
    if (matchedBlogs.length > 0) {
      // @ts-ignore
      setBlog(matchedBlogs);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.blogId]);

  return (
    blog && blog.length > 0 ? (
      <main className="grid col-start-6">
        <div className="py-6 ml-4 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">#Tags</h1>
          </div>
          <Blog blogData={blog} />
        </div>
      </main>
    ) : (
      <main className="grid col-start-6">
        <div className="py-6 ml-4 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Sorry, No Blog Found 🙁</h1>
          </div>
        </div>
      </main>
    )
  );
};

export default EachBlog;