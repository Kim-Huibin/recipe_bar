import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import styles from "./App.module.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.meals);
        setRecipes(response.meals);
      })
      .catch((e) => console.log(e));
    //when query value changes, useEffect will run
  }, [query]);

  const updateSearch = (e) => {
    //value of search will be updated when user type in
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    //query will be updated when search button is clicked.
    e.preventDefault();
    setQuery(search);
  };

  /**
    <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Recipe Bar</a>
          <form class="form-inline" action="" onSubmit={getSearch} style={{ marginTop: 3 + "rem" }}>
            <input class="form-control mr-sm-2" type="text" aria-label="Search" type="text"
                  value={search}
                  onChange={updateSearch}>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
    </nav>
   */

  return (
    <div className={styles.App}>
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" style={{fontSize:3+"rem", fontWeight:"bold"}}>Recipe Bar</a>
      <form class="form-inline" action="" onSubmit={getSearch} style={{ marginTop: 3 + "rem" }}>
        {/*user input will be saved in search and will updated */}
        <input
          class="form-control mr-sm-2"
          type="text"
          value={search}
          onChange={updateSearch}
          style={{ width: 20 + "rem", height: 3 + "rem", margin: 2 + "rem" }}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" className="btn btn-secondary">
          Search
        </button>
      </form>
      </nav>
      

      <div className={styles.recipes}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
            instruction={recipe.strInstructions}

            ingredient1={recipe.strIngredient1}
            measure1={recipe.strMeasure1}

            ingredient2={recipe.strIngredient2}
            measure2={recipe.strMeasure2}

            ingredient3={recipe.strIngredient3}
            measure3={recipe.strMeasure3}

            ingredient4={recipe.strIngredient4}
            measure4={recipe.strMeasure4}

            ingredient5={recipe.strIngredient5}
            measure5={recipe.strMeasure5}

            ingredient6={recipe.strIngredient6}
            measure6={recipe.strMeasure6}

            ingredient7={recipe.strIngredient7}
            measure7={recipe.strMeasure7}

            ingredient8={recipe.strIngredient8}
            measure8={recipe.strMeasure8}

            ingredient9={recipe.strIngredient9}
            measure9={recipe.strMeasure9}

            ingredient10={recipe.strIngredient10}
            measure10={recipe.strMeasure10}

            ingredient11={recipe.strIngredient11}
            measure11={recipe.strMeasure11}

            ingredient12={recipe.strIngredient12}
            measure12={recipe.strMeasure12}

            ingredient13={recipe.strIngredient13}
            measure13={recipe.strMeasure13}

            ingredient14={recipe.strIngredient14}
            measure14={recipe.strMeasure14}

            ingredient15={recipe.strIngredient15}
            measure15={recipe.strMeasure15}

            ingredient16={recipe.strIngredient16}
            measure16={recipe.strMeasure16}

            ingredient17={recipe.strIngredient17}
            measure17={recipe.strMeasure17}

            ingredient18={recipe.strIngredient18}
            measure18={recipe.strMeasure18}

            ingredient19={recipe.strIngredient19}
            measure19={recipe.strMeasure19}

            ingredient20={recipe.strIngredient20}
            measure20={recipe.strMeasure20}

          />
        ))}
      </div>
    </div>
  );
}

export default App;
