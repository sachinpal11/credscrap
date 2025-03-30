import React from "react";
import { BlinkBlur } from "react-loading-indicators";

function Loading() {
  return (
    <div className="absolute z-100 top-0 w-full h-full flex items-center justify-center bg-neutral-950/90 font-bold font-mono text-[30px]">
      <BlinkBlur color="#32cd32" size="medium" text="" textColor="" />
    </div>
  );
}

export default Loading;
