import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24 bg-white text-black">
      <h1 className="text-4xl font-bold">Welcome to Next.js</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm">
            Enter some text
          </label>
          <input type="text" name="name" className="border border-black rounded p-1" />
        </div>
        <button
          type="submit"
          className="shadow-lg hover:shadow-xl hover:bg-slate-300 transition-all bg-slate-200 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
