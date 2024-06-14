
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html>
        <body>
          <header>
            <h1 className="text-3xl font-bold underline ">Filho de de Receitas</h1>
          </header>
          <main>{ children }</main>
          <footer>
            <p>Footer</p>
          </footer>
        </body>
      </html>
    );
  }
  