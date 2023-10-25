import React, {useState} from "react";
import Recipe from "./Recipe";
import RecipeCard from "./RecipeCard";
import Challenge1 from "./Challenge1";

function RecipeContainer({ apiRecipes, search, onAddRecipeClick, effortAmount }) {
    const [timeFilter, setTimeFilter] = useState("")
    const base = apiRecipes.baseUri
    
    const handleFilter = () => {
        const timeFiltered = apiRecipes.results.filter(result => result.readyInMinutes <= parseInt(timeFilter))
        console.log(timeFiltered)
        
        return null
        // console.log(timeFilter)
    }

    const recipesToDisplay = apiRecipes.results.filter(result => result.title.toLowerCase().includes(search.toLowerCase()))
    const returnRecipes = recipesToDisplay.map(recipe=>{
        return <Recipe 
                    key={recipe.id} 
                    id={recipe.id} 
                    name={recipe.title} 
                    image={base + recipe.image} 
                    effort={recipe.readyInMinutes}
                    link={recipe.sourceUrl}
                    onAddRecipeClick={onAddRecipeClick}
                    effortAmount={effortAmount}
                />
    })

    return(
        <div id="recipe-container" className="container">
            <Challenge1 timeFilter={timeFilter} setTimeFilter={setTimeFilter} handleFilter={handleFilter} />
            {}
        </div>
    )
}

export default RecipeContainer;