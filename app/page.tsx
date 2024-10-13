"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return (
    <>
      <div className="bg-transparent flex justify-center items-center h-screen text-7xl">
        Welome
      </div>
    </>
  );
}
