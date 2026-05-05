"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const photoDetailsPage = async ({ params }) => {
  
   const userData = authClient.useSession();
    const user = userData.data?.user;
      //   console.log(user);
      if (!user) {
          redirect("/signin")
      }
    const { id } = await params;
    // console.log(id);
    const res = await fetch("https://pixgen-amber-eight.vercel.app/data.json");
    const photos = await res.json();
    // console.log(photos);
    const photo = photos.find(p => p.id == id);
    console.log(photo);
    return (
        <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Image Section */}
      <div className="relative w-full max-w-md h-[300px] mx-auto">
  <Image
    src={photo.imageUrl}
    alt={photo.title}
    fill
    sizes="(max-width: 768px) 100vw, 400px"
    className="object-cover rounded-xl"
  />
</div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          
          {/* Title + Category */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{photo.title}</h1>
            <p className="text-sm text-purple-400 mb-4">
              {photo.category}
            </p>

            {/* Prompt */}
            <p className="text-zinc-300 leading-relaxed mb-6">
              {photo.prompt}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
              <div>
                <p className="text-zinc-500">Model</p>
                <p className="text-white">{photo.model}</p>
              </div>
              <div>
                <p className="text-zinc-500">Resolution</p>
                <p className="text-white">{photo.resolution}</p>
              </div>
              <div>
                <p className="text-zinc-500">Likes</p>
                <p className="text-white">{photo.likes}</p>
              </div>
              <div>
                <p className="text-zinc-500">Downloads</p>
                <p className="text-white">{photo.downloads}</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8">
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {photo.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-zinc-800 rounded-full text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
                ❤️ Like
              </button>
              <button className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
                ⬇ Download
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default photoDetailsPage;