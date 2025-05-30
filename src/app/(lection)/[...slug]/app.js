"use client";

import dynamic from "next/dynamic";

const AppDynamic= dynamic(() => import('../../../components/app/app'), {
    ssr: false,
});

export const ClientOnlyApp = () => {
  return <AppDynamic/>
};
