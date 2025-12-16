import { Inter, Outfit, Poppins } from "next/font/google"; // Using Inter for body, Outfit for headings
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "APROMED — Conseil & Promotion Pharmaceutique en Tunisie",
  description: "Agence spécialisée en conseil, promotion pharmaceutique et communication scientifique. Partenaire stratégique des laboratoires.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
