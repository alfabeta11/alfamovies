import Breadcrumbs from '@/app/ui/breadcrumbs';
import Lector from '@/app/ui/lector/lector';

export default function LectorLayout({
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
            label: 'TV Shows',
            href: `/tv`,
          },
          {
            label: `${id}`,
            href: `/tv/${id}`,
            active: true,
          },
        ]}
      />
      <Lector id ={`${id}`} mediaType='tv' />
      <>
        {children}
      </>
    </>
  );
}