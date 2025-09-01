
import Link from "next/link";


export default function ModelLayout({ children }) {
  return (
        <section className="modelLayoutContainer">
          <div className="ModelContainer">
            <section className="categoryList">
               <ul>
                <li>
                    <Link href="/3d-models/category1">All</Link>
                </li>
                <li>
                    <Link href="/3d-models/category2">3D PRINTER</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3">ART</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3">EDUCATION</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3">FASHION</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3">HOBBY & DIY</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3">HOUSEHOLD</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3">MANIATURES</Link>
                </li>
                <li>
                    <Link href="/3d-models/category3">TOOLS</Link>
                </li>
                 <li>
                    <Link href="/3d-models/category3">TOYS & GAMES</Link>
                </li>
               </ul>
            </section>
            {children}
          </div>
        </section>
       
   
  );
}
