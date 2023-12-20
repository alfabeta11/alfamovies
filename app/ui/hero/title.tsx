export default function HeroTitle({ title }: { title: string }) {
    return (
      <h1 className="animate-[fadeIn_500ms] my-2 text-center text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200 md:text-left">
        {title}
      </h1>
    );
  }