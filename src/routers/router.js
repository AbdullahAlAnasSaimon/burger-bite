import CountryDetails from "../components/CountryDetails/CountryDetails";
import MealDetails from "../components/MealDetails/MealDetails";
import Menu from "../components/Menu/Menu";
import Traditional from "../components/Traditional/Traditional";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../components/Main/Main");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/menu/traditional',
        loader: async () =>{
          return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        },
        element: <Traditional></Traditional>
      },
      {
        path: 'menu/traditional/:countryName',
        loader: async ({params}) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.countryName}`);
        },
        element: <CountryDetails></CountryDetails>
      },
      {
        path: 'menu/traditional/:countryName/:mealId',
        loader: async ({params}) => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`);
        },
        element: <MealDetails></MealDetails>
      }
    ]
  },
  {path: '*', element: <h1 className="text-5xl text-red-500 text-center">Ops! 404 Not Found!</h1>}
])