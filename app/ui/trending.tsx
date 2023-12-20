import { getTrendings, getUpcoming } from '../lib/data';
import Gallery from './gallery';

export default async function Trending({ type }: { type: 'tv' | 'movie' }) {
  let medias = await getTrendings('day', type);
  return <Gallery medias={medias} type={type} />;
}

export async function Upcomings({ type }: { type: 'movie' | 'tv' }) {
  const upcomings = await getUpcoming(type);
  return <Gallery medias={upcomings} type="movie" />;
}
