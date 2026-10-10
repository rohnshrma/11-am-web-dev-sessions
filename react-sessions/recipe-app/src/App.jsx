import "./App.css";

/*
  STARTER SKELETON - there is NO React logic in this file on purpose.

  Everything below is plain, hard-coded markup so you can see how the
  finished app should look. Your job (see ASSIGNMENT.md) is to:
    1. Cut this markup up into components inside src/components/
    2. Replace the hard-coded recipes with real state
    3. Make Create, Read, Update and Delete actually work

  The class names are already styled in App.css. Keep them and the
  design will "just work" as you build.
*/

const App = () => {
  return (
    <div className="app">
      {/* ---------- becomes <Header /> ---------- */}
      <header className="header">
        <h1>Recipe Box</h1>
        <p>Save the dishes you love. Cook them again.</p>
      </header>

      <main className="layout">
        {/* ---------- becomes <RecipeForm /> ----------
            While editing a recipe:
              - add the class "is-editing" to the form
              - change the title to "Edit Recipe"
              - change the submit button text to "Update Recipe"
              - show the Cancel button (hide it the rest of the time) */}
        <form className="recipe-form">
          <h2 className="form-title">Add a Recipe</h2>

          <div className="field">
            <label htmlFor="title">Recipe name</label>
            <input id="title" type="text" name="title" placeholder="e.g. Masala Omelette" />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="cookTime">Cook time (mins)</label>
              <input id="cookTime" type="number" name="cookTime" placeholder="15" min="1" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="3"
              placeholder="2 eggs, 1 onion, green chilli, salt..."
            />
          </div>

          <div className="field">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="4"
              placeholder="Whisk the eggs, chop everything, cook on medium heat..."
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Recipe
            </button>
            <button type="button" className="btn btn-ghost">
              Cancel
            </button>
          </div>
        </form>

        <section className="recipes-section">
          <div className="recipes-toolbar">
            <h2>My Recipes</h2>
            <span className="count">2 recipes</span>
          </div>

          {/* ---------- BONUS: category filter ----------
              The chip that is currently selected gets the class "active". */}
          <div className="filters">
            <button className="chip active">All</button>
            <button className="chip">Breakfast</button>
            <button className="chip">Lunch</button>
            <button className="chip">Dinner</button>
            <button className="chip">Dessert</button>
          </div>

          {/* ---------- becomes <Recipes /> ----------
              When there are no recipes, show this instead of the list:
              <h3 className="empty-state">No recipes yet. Add your first one!</h3> */}
          <ul className="recipes">
            {/* ---------- becomes <Recipe /> (one per recipe) ----------
                Add the class "is-editing" to the card that is being edited. */}
            <li className="recipe-card">
              <div className="recipe-card__top">
                <span className="tag">Breakfast</span>
                <span className="time">15 mins</span>
              </div>
              <h3>Masala Omelette</h3>
              <p className="label">Ingredients</p>
              <p>2 eggs, 1 onion, green chilli, coriander, salt</p>
              <p className="label">Instructions</p>
              <p>Whisk the eggs with everything chopped in, then cook on medium heat.</p>
              <div className="card-actions">
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
              </div>
            </li>

            <li className="recipe-card">
              <div className="recipe-card__top">
                <span className="tag">Dessert</span>
                <span className="time">40 mins</span>
              </div>
              <h3>Gajar Halwa</h3>
              <p className="label">Ingredients</p>
              <p>Carrots, milk, sugar, ghee, cardamom, cashews</p>
              <p className="label">Instructions</p>
              <p>Grate the carrots, cook in milk until thick, then add sugar and ghee.</p>
              <div className="card-actions">
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
