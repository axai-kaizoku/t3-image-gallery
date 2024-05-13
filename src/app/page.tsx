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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
