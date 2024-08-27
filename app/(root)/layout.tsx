import LeftSideBar from "@/components/LeftSideBar";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSideBar />
        {children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  );
}
