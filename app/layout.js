import "./globals.css";
import BgDecor from "@/components/Ui/BgDecor";
import Header from "@/components/Ui/header";
import { Quicksand } from "next/font/google";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} overflow-auto px-4 pt-3 pb-10 sm:py-1 sm:px-6 md:px-10 md:py-6`}
      >
        <BgDecor />
        <Header />

        {children}
      </body>
    </html>
  );
}
