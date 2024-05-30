import { Link, useLocation } from "react-router-dom";

const Card = ({ recipe, orientation }) => {
  const location = useLocation();

  const isOrientationLeft =
    orientation === "left" || !orientation ? true : false;

  return (
    <>
      <div className="w-[calc(100%-32px)] mx-auto sm:hidden ">
        <img src={recipe?.images?.medium} />
        <h2 className="text-xl mt-2 tracking-wider">{recipe?.title}</h2>
        <p className="mt-2 mb-6 text-xs">{recipe?.description}</p>
        <Link
          to={`/recipe/${recipe.uuid}`}
          className="py-1.5 px-3 bg-main rounded-md text-yellow text-xs hover:text-main hover:bg-yellow"
          state={{ backgroundLocation: location }}
        >
          View recipe
        </Link>
      </div>
      <div className="hidden sm:flex sm:gap-x-6 sm:w-[calc(100%-48px)] sm:min-w-[345px] sm:max-w-[620px] sm:mx-auto">
        {isOrientationLeft && (
          <>
            <img src={recipe?.images?.small} className="w-[200px] h-[130px]" />
            <div className="flex flex-col w-full justify-between">
              <div>
                <h2 className="text-xl tracking-wider">{recipe?.title}</h2>
                <p className="mt-2 text-xs">{recipe?.description}</p>
              </div>

              <Link
                to={`/recipe/${recipe.uuid}`}
                className="py-1.5 px-3  bg-main rounded-md text-yellow text-xs self-end hover:text-main hover:bg-yellow"
                state={{ backgroundLocation: location }}
              >
                View recipe
              </Link>
            </div>
          </>
        )}
        {!isOrientationLeft && (
          <>
            <div className="flex flex-col w-full justify-between">
              <div className="flex flex-col">
                <h2 className="text-xl self-end tracking-wider">
                  {recipe?.title}
                </h2>
                <p className="mt-2 text-xs self-end">{recipe?.description}</p>
              </div>

              <Link
                to={`/recipe/${recipe.uuid}`}
                className="py-1.5 px-3  bg-main rounded-md text-yellow text-xs self-start hover:text-main hover:bg-yellow"
                state={{ backgroundLocation: location }}
              >
                View recipe
              </Link>
            </div>
            <img
              src={recipe?.images?.small}
              className="w-[200px] h-[130px] bg-center"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Card;
