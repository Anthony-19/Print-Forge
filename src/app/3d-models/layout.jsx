
import Link from "next/link";
import Image from "next/image"


export default function ModelLayout({ children }) {
  return (
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
       
   
  );
}
