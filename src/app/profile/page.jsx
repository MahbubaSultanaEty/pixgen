"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
//   console.log(user);
  return (
    <div className="my-12">
      <Card className="max-w-8/12 mx-auto flex flex-col items-center">
              <Avatar className="h-20 w-20 max-w-96 mx-auto">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
          />
                  <Avatar.Fallback>{ user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <h2 className="text-xl font-bold text-blue-900">{user?.name}</h2>
              <p className="text-xs font-semibold text-zinc-700 p-2 bg-zinc-100 rounded">{user?.email}</p>
              
              <UpdateUserModal/>
      </Card>
    </div>
  );
};

export default ProfilePage;
