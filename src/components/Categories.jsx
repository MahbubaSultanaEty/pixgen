import { Button, Drawer, DrawerDialog } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { GrDrawer } from 'react-icons/gr';

const Categories = async() => {
    const res = await fetch("https://pixgen-amber-eight.vercel.app/category.json");
    const categories = await res.json();
    console.log(categories);
    return (
  <div className=" flex gap-4 flex-wrap">
    
      {/* Sidebar content here */}
                    {
                        categories.map(c => <Link key={c.id} href={`?category=${c.name}`}><Button variant='outline'>{ c.name}</Button></Link>)
      }  
  </div>

    );
};

export default Categories;