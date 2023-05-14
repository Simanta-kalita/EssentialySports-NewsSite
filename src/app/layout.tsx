import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./header";

const poppins = Roboto({
  weight: ["100", "300", "400", "500", "700",  "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Essentially Sports",
  description: "Essentially Sports | Nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex px-8 flex-col min-h-screen bg-gradient-to-tr from-[#c4a663] via-[#c4b64e] to-[#b7c93b] ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
