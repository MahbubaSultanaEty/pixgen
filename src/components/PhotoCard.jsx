import { Button, Card, Chip, Separator } from "@heroui/react";
import React from "react";
import Image from "next/image";
import { GiLoveLetter } from "react-icons/gi";
import { Love_Light } from "next/font/google";
import { AiFillLike } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="rounded-lg">
      <div className="relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          alt={photo.title}
          className="rounded"
          sizes="(min-width: 808px) 50vw, 100vw"
        />

        <div className="bg-yellow-100">
          <Chip className="absolute top-2 left-2" color="accent">
            <CiCircleInfo width={12} />
            <Chip.Label>{photo.category}</Chip.Label>
          </Chip>
        </div>
      </div>
      <div className="h-12">
        <h3 className="text-lg font-medium">{photo.title}</h3>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-1 items-center  p-1 ">
          <AiFillLike color="#bf2c6e" />
          {photo.likes}
        </div>
        <Separator orientation="vertical" />
        <div className="flex gap-1 items-center  p-1 ">
          <BiDownload color="#bf2c6e" />
          {photo.downloads}
        </div>
      </div>
      <Link href={`/all-photos/${photo.id}`}>
         <Button className="btn " variant="outline">
<TbListDetails />
      </Button>
      </Link>
    </Card>
  );
};

export default PhotoCard;
