import Categories from '@/components/Categories';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async({searchParams}) => {
       const res = await fetch("https://pixgen-amber-eight.vercel.app/data.json");
    const photos = await res.json();
    // console.log(photos);

  const { category } = await searchParams;
  const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos;

    return (
      <div className='px-2 py-8 bg-pink-50'>       
<>
  <style>
    {`
      @keyframes slideFromRight {
        0% {
          transform: translateX(100px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideFromLeft {
        0% {
          transform: translateX(-100px);
          opacity: 0;
          width: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
          width: 100%;
        }
      }
    `}
  </style>

  <div className="flex flex-col items-center">
    
    {/* H1 */}
    <h1 className="text-3xl font-bold animate-[slideFromRight_0.8s_ease-out_forwards]">
      All Photos
    </h1>

    {/* Divider */}
    <div className="mt-2 h-[3px] bg-black animate-[slideFromLeft_4s_ease-out_forwards] my-3"></div>

  </div>
        </>
        <Categories/>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 m-4'>
                {
                    filteredPhotos.map(photo => <PhotoCard key={photo.id} photo={ photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;