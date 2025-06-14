import Link from "next/link";
import flagsmith from "@/utlis/flagsmith";
export const revalidate = 0;
export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p> text new</p>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="search" />}
    </main>
  );
}
