// @ts-check
import React from "react";
import { useState, useEffect } from "react";
import Blog from "../components/Blog";
import Search from "../components/Search";
import { BlogData } from "../data/BlogData";
import Fuse from 'fuse.js';

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [blogs, setBlogs] = useState(BlogData);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };


  const updateInput = async (search) => {
    const options = {
      useExtendedSearch: true,
      keys: ['title', 'subTitle', 'content', 'hashtags.value'],
      includeScore: true,
    };
    const fuse = new Fuse(blogs, options);
    const searchResult = fuse.search(`'${search}`);

    if (search !== "" && searchResult.length > 0) {
      setLoading(true);
      // @ts-ignore
      setFilteredBlogs(searchResult);
      setTimeout(() => {
        setLoading(false);
      }, 150);
    } else {
      setFilteredBlogs([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateInput(search);
    if (!search || search === "") {
      setLoading(false);
      setBlogs(BlogData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);


  const searchedBlogs = filteredBlogs.map((sblog) => {
    // @ts-ignore
    return sblog.item;
  });

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
          {loading ? <div className="text-center">Loading Blogs...</div> : (
            searchedBlogs && searchedBlogs.length > 0 ? (
              <Blog blogData={searchedBlogs} />
            ) : (
              <Blog blogData={blogs} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Blogs;