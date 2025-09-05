import { Albert_Sans, Montserrat_Alternates, Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image"
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap"
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap"
});

export const metadata = {
  title: "Print Forge",
  description: "Print Forge is a creative platform specializing in high-quality 3D printing and design solutions. It empowers individuals and businesses to bring their ideas to life by transforming digital models into tangible products with precision and detail. From prototypes to custom designs, Print Forge bridges creativity and technology, making innovation accessible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserratAlternates.variable} ${albertSans.variable} ${inter.variable}`}>
        <section className="container">
          <div className="print-forge-container">
            <header className="header">
              <Link href="/" className="home-link">
               <Image
                className="print-forge-logo"
                src="/printforge-logo.svg"
                alt="Print Forge Logo"
                width={150}
                height={50}
                priority
              />
              </Link>
             
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link href="/3d-models" className="nav-link">3D MODELS</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link about">ABOUT</Link>
                  </li>
                </ul>
              </nav>
            </header>
            {children}
          </div>
        </section>
       
      </body>
    </html>
  );
}
