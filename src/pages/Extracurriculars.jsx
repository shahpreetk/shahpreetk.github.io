import React from "react";

const Extracurriculars = () => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
        data-todo-x-data=""
        data-todo-x-init="$el.focus()"
      >
        <div className="py-8 xl:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
            <div
              className="xl:col-span-2 xl:pr-8

             xl:border-gray-200"
            >
              <div>
                <div>
                  <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Extracurriculars
                      </h1>
                    </div>
                  </div>

                  <div className="py-3 xl:pt-6 xl:pb-0">
                    <h2 className="sr-only">Description</h2>
                    <div className="prose max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, hic? Commodi cumque similique id tempora
                        molestiae deserunt at suscipit, dolor voluptatem,
                        numquam, harum consequatur laboriosam voluptas tempore
                        aut voluptatum alias?
                      </p>
                      <ul>
                        <li>
                          Tempor ultrices proin nunc fames nunc ut auctor vitae
                          sed. Eget massa parturient vulputate fermentum id
                          facilisis nam pharetra. Aliquet leo tellus.
                        </li>
                        <li>
                          Turpis ac nunc adipiscing adipiscing metus tincidunt
                          senectus tellus.
                        </li>
                        <li>
                          Semper interdum porta sit tincidunt. Dui suspendisse
                          scelerisque amet metus eget sed. Ut tellus in sed
                          dignissim.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Extracurriculars;