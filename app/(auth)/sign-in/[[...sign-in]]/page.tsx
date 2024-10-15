import { SignIn } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <SignIn
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
