import Breadcrumbs from '@/app/ui/breadcrumbs';
import Lector from '@/app/ui/lector/lector';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const id = params.id;
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: 'Movie',
            href: `/movie`,
          },
          {
            label: `${id}`,
            href: `/movie/${id}`,
            active: true,
          },
        ]}
      />
      <Lector id ={`${id}`} mediaType='movie' />
      <>
        {children}
      </>
    </>
  );
}
