"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import styles from "./tab-link.module.css";

export const TabLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={classNames(styles.root, {
        [styles.isActive]: pathname === href,
      })}
    >
      {children}
    </Link>
  );
};
