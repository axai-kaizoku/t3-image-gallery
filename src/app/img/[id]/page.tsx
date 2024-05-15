export default function Image({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div>{photoId}</div>;
}
