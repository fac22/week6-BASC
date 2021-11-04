import React from 'react';

// Filter by: Category, Size, Colour, Price range
// Sort by price (size)

export default function CategoryFilter({
  categoryArray,
  category,
  setCategory,
}) {
  // console.log(categoryArray);
  return (
    <fieldset>
      <legend>Filter by Category:</legend>
      <label htmlFor="all">
        <input
          type="radio"
          name="categories"
          id="all"
          value="All"
          checked={'All' === category}
          onChange={(e) => setCategory(e.target.value)}
        />
        All
      </label>
      {categoryArray.map((cat) => {
        return (
          <label key={cat.id} htmlFor={cat.id}>
            <input
              type="radio"
              name="categories"
              id={cat.id}
              value={cat.category_name}
              checked={cat.category_name === category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {cat.category_name}
          </label>
        );
      })}
    </fieldset>
  );
}
