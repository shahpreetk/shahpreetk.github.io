// import NotFound from '@theme-original/NotFound';
import Link from "@docusaurus/Link";
import "./index.css";
import Layout from "@theme/Layout";

export default function NotFoundWrapper() {
  return (
    <>
      <Layout
        title="Page Not Found"
        description="Frontend | HTMLS, CSS, React.js | Backend | Java, Nodejs, Express | Fullstack Web Developer | Kitty lover."
      >
        <h1 className="title">Page Not Found</h1>
        <div className="imgStyle">
          <img src="/img/Cat_404.png" alt="404" />
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button className="btnStyle">Go Home</button>
          </Link>
          <Link to="/blog">
            <button className="btnStyle btnStyleOutline">
              Or Read my Latest Blogs
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
