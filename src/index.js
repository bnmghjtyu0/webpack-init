import "../public/assets/css/global.css";
import "../public/assets/css/index.scss"
const recipe = {
  leatherStripe: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};
const recipe2 = {
  ...recipe,
  id: 1,
};

console.log(recipe);
