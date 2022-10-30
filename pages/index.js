import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next-Restful-WebSocket-Redux app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-blue-500 font-medium">Hello from Next.js</p>
      </main>
    </div>
  );
}
