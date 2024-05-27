"use client";

import AddForm from "@/components/AddForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24 bg-white text-black">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
      <AddForm />
    </main>
  );
}
