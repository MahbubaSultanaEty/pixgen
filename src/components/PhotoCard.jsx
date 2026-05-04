import { Card, Chip, Separator } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { GiLoveLetter } from "react-icons/gi";
import { Love_Light } from "next/font/google";
import { AiFillLike } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="rounded-lg">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          alt={photo.title}
          className="rounded"
        />
         <Chip>
          <CiCircleInfo width={12} />
          <Chip.Label>New Feature</Chip.Label>
        </Chip>
      </div>
      <div className="h-12">
        <h3 className="text-lg font-medium">{photo.title}</h3>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-1 items-center  p-1 ">
          <AiFillLike  color="#bf2c6e"/>
          {photo.likes}
        </div>
        <Separator orientation="vertical"/>
        <div className="flex gap-1 items-center  p-1 ">
          <BiDownload  color="#bf2c6e"/>
          {photo.downloads}
        </div>
      </div>
    </Card>
  );
};

export default PhotoCard;
