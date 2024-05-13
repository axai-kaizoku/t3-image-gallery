import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/bc7dae68-e731-497f-81ee-c841d3407506-jo3v7y.jpeg",
  "https://utfs.io/f/4a9c05f8-6294-4736-be14-57ce76ea9d17-1pinps.jpg",
  "https://utfs.io/f/1eef3470-9b88-46ed-8138-481f8e98c190-frlqja.jpg",
  "https://utfs.io/f/3758faa2-11b7-40b3-aaa9-51bd7fb7b32e-um5aj6.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="w-48" key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "" + index}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
