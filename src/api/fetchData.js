export const foodCategories = `https://www.themealdb.com/api/json/v1/1/categories.php`;
// const fetchFood = async () => {
//   setLoading(false);
//   const response = await axios.get(url);
//   setData(response.data.categories);
//   setLoading(true);
// };

export const foodMealbyName = (name) =>
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

export const foodRandom = "https://www.themealdb.com/api/json/v1/1/random.php";

export const foodById = (id) =>
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

export const foodByCategory = (category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

export const foodIngredients = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;

export const foodByIngredient = (ingredient) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
