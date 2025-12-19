"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BackRedirect from "./BackRedirect";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="p-8 mb-8">
      <Link href="/">
        <Image
          src="/tnma.svg"
          alt="TNMA"
          width={80}
          height={26}
          className="-ml-1"
          priority
        />
      </Link>

      {pathname !== "/" ? (
        <BackRedirect />
      ) : (
        <div className="text-sm text-gray-500">
          <p>b. 03131996</p>
        </div>
      )}
    </header>
  );
};

export default Header;
