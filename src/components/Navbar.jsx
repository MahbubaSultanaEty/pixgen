"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  // console.log(user);

  const handleSignOut = async() => {
    await authClient.signOut();
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={20}
            height={20}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-2 text-xs font-semibold md:text-sm md:gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        
        {!user &&
          <div className="flex gap-4 bg-blue-200 p-2 rounded">
            <ul className="flex items-center  text-sm gap-3">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <Separator orientation="vertical" />
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
            </ul>
            </div>
          }
        {user && 
          <div className="flex  gap-2 items-center">           
          <Image
            src={user?.image}
            width={20}
            height={20}
              alt="user avator"
              className="rounded-full h-8 w-8"
            />
            <Button
              onClick={handleSignOut}
              className="bg-blue-200" variant="outline">Log Out</Button>
          </div>
            
          }
        
      </nav>
    </div>
  );
};

export default Navbar;