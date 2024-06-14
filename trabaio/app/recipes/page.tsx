import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import recipesData from "./../../recipes.json"
export type Recipe = {
    id: string,
    name: string,
    image: string,
    instructions: string[],
    ingredients: string[]
}

export default function Recipes() {
    return (
    <div>
    <h1 className="text-3xl font-bold underline"> Hello, Dashboard Page!</h1>
    <ul></ul>
        {recipesData.map((recipe) => (
            <ul>
            <li key={recipe.id}>
                <Link href={`/recipes/${recipe.id}`}><h2>Receita {recipe.id}</h2></Link>
            </li>
            <li key={recipe.name}>
                <Link href={`/recipes/${recipe.id}` }><h3>Nome: {recipe.name}</h3></Link>
                
            </li>
            <li>
                <Link href={`/recipes/${recipe.id}`}><h4>Ingredientes: {recipe.ingredients}</h4></Link>
                
            </li>
            <li>
                <Link href={`/recipes/${recipe.id}`}><h4>Instruções: {recipe.instructions}</h4></Link>
                
            </li>
                <Link href={`/recipes/${recipe.id}`}><Image src={recipe.image}
                width={200}
                height={200}
                alt = {recipe.name} /></Link>
                
            </ul>
        ))}
    </div>
    )
  }