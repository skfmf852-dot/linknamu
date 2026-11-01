import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  image: string;
};

export default function ProfileHeader({ name, bio, image }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-32 w-32 rounded-full border-2 border-foreground/30 bg-foreground/5"
        />
      )}
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-foreground/70">{bio}</p>
      </div>
    </header>
  );
}
