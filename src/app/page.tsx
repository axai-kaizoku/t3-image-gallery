import { headers } from "next/headers";
import { db } from "~/server/db";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div className="flex w-48 flex-col" key={image.id + "" + index}>
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
