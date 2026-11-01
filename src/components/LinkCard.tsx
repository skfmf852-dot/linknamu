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
      className="block w-full rounded-xl border-2 border-foreground/30 px-5 py-4 text-center font-medium transition hover:bg-foreground/5 active:scale-[0.99]"
    >
      {title}
    </a>
  );
}
