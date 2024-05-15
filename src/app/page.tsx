import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

async function Images() {
  const images = await getMyImages();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div className="flex h-48 w-48 flex-col" key={image.id}>
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                // style={{ objectFit: "contain" }}
                width={192}
                height={192}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default async function HomePage() {
  headers();

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
