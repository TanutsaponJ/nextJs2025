import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-5 mx-auto h-screen">
      <div className="flex flex-col gap-5 max-w-3 justify-center items-center h-full">
        <Link href="/about">
          <h1 className="text-3xl font-bold">Users</h1>
        </Link>
        <Link href="/blog/id">
          <h1 className="text-3xl font-bold">Comments</h1>
        </Link>
      </div>
    </div>
  );
};

export default page;
