import { Metadata } from "next";
import './main.css';
import Navbar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: {
    // absolute: `replace title`,  replaces all the metas
    default: "TricksterWeb",
    template: "%s | TricksterWeb"
  },
  description: "Default Description"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
