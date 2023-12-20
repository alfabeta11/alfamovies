import { media } from '../lib/definitions';
import Card from './card';

export default async function Gallery({
  medias,
  type,
}: {
  medias?: media[];
  type?: string;
}) {
  return (
    <div className="grid-auto justify-items-center gap-4 py-4">
      {medias?.map((media: media) => {
        return <Card media={media} key={media.id} mediaType={type} />;
      })}
    </div>
  ); 
};