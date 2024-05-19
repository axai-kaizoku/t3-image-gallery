import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
