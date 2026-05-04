import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async() => {
       const res = await fetch("https://pixgen-amber-eight.vercel.app/data.json");
    const photos = await res.json();
    console.log(photos);

    
    return (
        <div className='px-2 py-8 bg-pink-50'>
            <h2 className="text-3xl font-bold ">All Generations</h2>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-4 m-4'>
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={ photo} />)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;