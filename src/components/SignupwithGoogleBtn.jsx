'use client'
import Image from 'next/image';
import React from 'react';

const SignupwithGoogleBtn = () => {
    return (
      <button
    
      className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
    >
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          width={20}
          height={20}
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Continue with Google
      </span>
    </button>
    );
};

export default SignupwithGoogleBtn;