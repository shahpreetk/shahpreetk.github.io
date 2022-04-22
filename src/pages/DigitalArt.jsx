// @ts-check

import { DigitalArtData } from '../data/DigitalArtData';

const digitalArtData = DigitalArtData;

const DigitalArt = () => {
  return (
    <>
      <main className="grid col-start-6">
        <div className="py-6 ml-4 md:ml-60">
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Digital Art</h1>
          </div>
          <div className="max-w-7xl mx-auto px-2 md:px-8">
            <div className="py-4">
              <div className="bg-white">
                <div className="max-w-2xl mx-auto py-1 px-1 sm:py-1 sm:px-1 lg:max-w-7xl lg:px-1">
                  <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {digitalArtData.map((art) => (
                      <div key={art.id} className="relative group">
                        <div className="aspect-w-4 aspect-h-4 rounded-lg overflow-hidden bg-gray-100">
                          <img src={art.previewImg} alt={art.title} className="object-contain" />
                          <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                            <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                              View on Instagram
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                          <h3>
                            <a href={art.instagramUrl} target="_blank" rel="noreferrer">
                              <span aria-hidden="true" className="absolute inset-0" />
                              {art.title}
                            </a>
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DigitalArt;