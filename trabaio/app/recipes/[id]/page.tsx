import Recipes, { Recipe } from "../page";
import Image from "@/node_modules/next/image"

export default function Page({params}: {params: Recipe}) {
    return(
        <div>
            <h1>Id da receita: {params.id}</h1>
            <h1>Nome da receita: {params.name}</h1>
            <h2>Intruções da receita: {params.instructions}</h2>
            <h3>Ingredientes da receita: {params.ingredients}</h3>
            <Image src={params.image}
                width={200}
                height={200}
                alt = {params.name} />
        </div>
    )
 }
 Image