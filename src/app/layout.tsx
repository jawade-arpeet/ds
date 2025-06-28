import React from "react";

import "@/styles/globals.css";
import { cn } from "@/lib/utils/cn";
import { fontRobotoSans } from "@/lib/font";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(fontRobotoSans.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
