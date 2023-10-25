import React, {useState} from "react";
import Recipe from "./Recipe";
import RecipeCard from "./RecipeCard";
import Challenge1 from "./Challenge1";

function RecipeContainer({ apiRecipes, search, onAddRecipeClick, effortAmount }) {
    const [timeFilter, setTimeFilter] = useState("")
    const [showTime, setShowTime] = useState(false)

    const base = apiRecipes.baseUri
    
    function handleFilter() {
        // console.log(returnRecipes)
        if (timeFilter === "") {
            setShowTime(false)
        }
        setShowTime(true)
    }

    const timeFiltered = apiRecipes.results.filter(result => result.readyInMinutes <= parseInt(timeFilter))
    const categoryFiltered = apiRecipes.results.filter(result => result.title.toLowerCase().includes(search.toLowerCase()))
    const recipesToDisplay = showTime ? timeFiltered : categoryFiltered

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
            {returnRecipes}
        </div>
    )
}

export default RecipeContainer;