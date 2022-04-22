// @ts-check
import { LinkIcon } from '@heroicons/react/solid';
import { BLOGS } from "../constants/routes";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Blog = ({ blogData }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <div className="py-4">
          {blogData.map((eachBlog) => (
            <div key={eachBlog.id} className={classNames((eachBlog.id) % 2 === 0 ? 'bg-slate-100' : 'bg-gray-100', "shadow overflow-hidden sm:rounded-lg mb-4")}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{eachBlog.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{eachBlog.subTitle}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                      {eachBlog.content}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex-1 flex items-center text-sm font-medium text-gray-500 border-gray-700 border-b">
                      <p>References</p>
                      <p className="ml-auto mr-0.5 flex-shrink-0">Updated: {eachBlog.date}</p>
                    </div>
                    {eachBlog.references.map((reference) => reference && (
                      <dd key={reference.id} className="mt-1 text-sm text-gray-900">
                        <ul className="border-b-2 border-gray-200 divide-y divide-gray-200">
                          <li key={reference.id} className="pr-4 py-2 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                              <span className="flex-1 w-0 truncate">{reference.title}</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a target="_blank" rel="noreferrer" href={reference.link} className="font-medium text-purple-600 hover:text-purple-400">
                                <LinkIcon className="flex-shrink-0 h-5 w-5 inline-block" aria-hidden="true" />
                                Link
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    ))}
                  </div>
                  <div className="items-center text-sm font-medium text-gray-500 mt-0 pt-0">
                    {eachBlog.hashtags.map(hashtag =>
                      <span key={hashtag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-purple-100 text-purple-800 mr-2">
                        <a href={`${BLOGS}/${hashtag}`}>#{hashtag}</a>
                      </span>
                    )}
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;