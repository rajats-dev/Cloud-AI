import { SignUp } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <SignUp
        appearance={{
          baseTheme: neobrutalism,
          elements: {
            formButtonPrimary: "bg-slate-800 hover:bg-slate-600",
          },
        }}
      />
    </div>
  );
}
