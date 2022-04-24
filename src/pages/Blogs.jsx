// @ts-check
import { useState, useEffect } from "react";
import Blog from "../components/Blog";
import Search from "../components/Search";
import { BlogData } from "../data/BlogData";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState(BlogData);

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const updateInput = (/** @type {string} */ search) => {
    const filteredBlogs = blogs.filter((blog) => blog.hashtags.includes(search) || blog.title.includes(search) || blog.subTitle.includes(search) || blog.content.includes(search));
    if (filteredBlogs.length > 0) {
      setBlogs(filteredBlogs);
    }
  };

  useEffect(() => {
    updateInput(search);
    if (!search) {
      setBlogs(BlogData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <main className="grid col-start-6">
        <div className="py-6 ml-4 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Blogs &amp; References</h1>
          </div>
          <div className="max-w-2xl px-2 md:px-8 py-4">
            <Search search={search} searchChange={searchChange} />
          </div>
          <Blog blogData={blogs} />
        </div>
      </main>
    </>
  );
};

export default Blogs;