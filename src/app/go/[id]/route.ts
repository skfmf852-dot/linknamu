import { redirect } from "next/navigation";
import profile from "@/data/profile.json";
import { incrementClick } from "@/lib/mongodb";

export async function GET(_req: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;

  // profile.json에 있는 id만 허용 → 임의 주소로 보내는 악용을 막는다.
  const link = profile.links.find((l) => l.id === id);
  if (!link) return new Response("Not found", { status: 404 });

  await incrementClick(link.id);
  redirect(link.url);
}
