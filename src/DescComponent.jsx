import React from 'react';

const galleryInfo = [
  {
    name:"Bill Wyland (Founder & Owner)",
    description:"Located on Front Street in Lahaina, Hawaii on the spectacular island of Maui. Bill Wyland Galleries showcases a wide variety of more than 25 world-renowned local and international artists. Owner and founder Bill Wyland hand selected the best new and established talent of the Pacific and placed them under one roof in the historic Lahaina theater building. The immense gallery now houses over 25 different world-renowned international and local artists. "
  }
];

const DescComponent = () => {
  return (
    <div className="flex flex-wrap md:mt-12">
        <div className="w-full sm:w-auto text-black mb-4 sm:mb-0 sm:mr-4">
            <div className="flex items-center">
                <div className="flex-1 mr-2">
                    <h2 className="text-2xl font-semibold">{galleryInfo[0].name}</h2>
                    <p className="text-sm mt-2">{galleryInfo[0].description}</p>
                </div>
                <div>
                    <a href="" className="bg-blue-500 text-white rounded-lg px-4 py-2 inline-block">
                        Ask My Twin Now!
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DescComponent;