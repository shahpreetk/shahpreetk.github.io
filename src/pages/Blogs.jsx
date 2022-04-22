// @ts-check
import Blog from "../components/Blog";
import { BlogData } from "../data/BlogData";

const Blogs = () => {
  return (
    <>
      <main className="grid col-start-6">
        <div className="py-6 ml-4 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Blogs &amp; References</h1>
          </div>
          <Blog blogData={BlogData} />
        </div>
      </main>
    </>
  );
};

export default Blogs;