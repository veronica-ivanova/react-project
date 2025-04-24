"use client";

import Link from "next/link";
import { Modal } from "../modal/modal";

export const HomePage = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link href="/restaurants">to restaurants</Link>
      <Modal>
        <div>modal</div>
      </Modal>
    </div>
  );
};
