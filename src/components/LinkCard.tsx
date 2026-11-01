type LinkCardProps = {
  id: string;
  title: string;
};

export default function LinkCard({ id, title }: LinkCardProps) {
  return (
    <a
      href={`/go/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/40 px-5 py-4 text-center font-medium shadow-[0_8px_24px_-12px_rgba(120,70,40,0.3)] backdrop-blur-md transition duration-200 hover:bg-white/60 active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
