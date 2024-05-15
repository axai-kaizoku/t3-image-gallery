"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <>
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <Link href="/">
          <div>Gallery</div>
        </Link>
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh();
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}