import Image from "next/image";

export default function Background({
    backdrop_path,
    title,
  }: {
    backdrop_path: string;
    title: string;
  }) {
    return (
      <div className="z-0 h-[80vh] w-full">
        <Image
          className="absolute h-full w-full object-cover object-center"
          fill={true}
          src={'https://image.tmdb.org/t/p/original' + backdrop_path}
          alt={title}
        />
      </div>
    );
  }