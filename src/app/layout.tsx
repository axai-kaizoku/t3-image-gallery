import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "~/components/TopNav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/provider";

export const metadata = {
  title: "T3 Gallery",
  description: "A basic gallery app using t3 tech",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable} dark`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll">{props.children}</main>
            </div>
            {props.modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
