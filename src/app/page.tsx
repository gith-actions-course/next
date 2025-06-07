import Link from "next/link";
import flagsmith from "@/utlis/flagsmith";
export const revalidate = 0;
export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World 3</h2>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="search" />}
    </main>
  );
}
