import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Bem vindo ao Portal de Receitas</h1>
      <Link href="/recipes">Ver Receitas</Link>
    </div>
  );
}
