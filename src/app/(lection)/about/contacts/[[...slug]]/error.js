"use client";

import Link from "next/link";
import { usePathname, useRouter  } from "next/navigation";

const Error = () => {
    const pathname = usePathname();
    pathname === '/'

    const router = useRouter();
    console.log(router)
  return (
    <div>
      contacts error
      <Link href='/'>Go to home page</Link>
    </div>
  );
};

export default Error;
