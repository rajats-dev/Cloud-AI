import { ToastContainer } from "react-toastify";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
