import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import { db } from "~/server/db";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div className="flex w-48 flex-col" key={image.id + "" + index}>
            <img src={image.url} alt="" />
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
