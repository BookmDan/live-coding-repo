import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function RecipeCard({ 
        id, 
        name, 
        image, 
        status, 
        meal, 
        notes, 
        effort, 
        link, 
        onDeleteFromBox, 
        setTitle,
        setImgLink,
        setRecipeLink,
        setEffort,
        setMeal,
        setStatus,
        setNotes     
    }){

        const history =useHistory()

    
    // State of 'Show More Details' button toggle
    const [showMore, setShowMore] = useState(false);

    // create li's for the 'Notes' section
    const noteLis= notes.map(n=>{
        return <li key={n}>{n}</li>
    })

    // Convert the 1-5 scale into # of Clock Emojis to display
    const effortEmojis = [...Array(effort)].map(()=>"⏰ ")

    // handles the backend fetch & passes ID up to App.js to render the DOM appropriately
    function handleDeleteFromBox(){
        onDeleteFromBox(id)
        fetch(`http://localhost:3000/recipes/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }

    function handleUpdateRecipe(){
        console.log(id);

        setMeal(meal)
        setTitle(name)
        setNotes(notes)
        setImgLink(image)
        setRecipeLink(link)
        setStatus(status)
        setEffort(effort)
        history.push("/add-recipe")
    
        // fetch(`http://localhost:3000/recipes/${id}`,{
        //     method: "PATCH",
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({

        //     })
        // })
        // .then(res=>res.json())
        // .then(updatedRecipe=>console.log(updatedRecipe));
    }


    // Return JSX
    return(
        <div id={id} className="recipe-card">
            <h2>{name}</h2>
            <img src={image} alt={name} className="img-card"></img>
            <h4>Effort to Prepare: {effortEmojis}</h4>
            <a href={link} target="_blank">Full Recipe</a>
            <br></br>
            <button onClick={()=>setShowMore(!showMore)}>{showMore ? "Hide Details" : "Show More Details"}</button>
            <div hidden={ showMore ? null : "disabled"} id="show-more">
                <h3>Meal: {meal}</h3>
                
                <h4>Status of Recipe: {status}</h4>
                <h4>Notes: </h4>
                <ul>
                    {noteLis}
                </ul>
                <button onClick={handleUpdateRecipe}>Edit Details</button>
                <br></br>
                <button onClick={handleDeleteFromBox}>Delete from My Recipe Box</button>
            </div>
        </div>
    )
}


export default RecipeCard;