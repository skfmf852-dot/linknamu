import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import profile from "@/data/profile.json";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-10 px-4 py-12">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        image={profile.image}
      />
      <ul className="flex w-full flex-col gap-3">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard id={link.id} title={link.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}
