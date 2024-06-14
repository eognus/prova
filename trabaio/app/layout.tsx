import Link from "@/node_modules/next/link";
import "./globals.css";
import Recipe from './page';
import Recipes from "./recipes/page";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header>
          <h1 className="text-3xl font-bold underline ">App de Receitas</h1>
        </header>
        <main>{ children }</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
