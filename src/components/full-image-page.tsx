import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  return (
    <>
      <Image src={image.url} alt={image.name} width={200} height={200} />
    </>
  );
}
