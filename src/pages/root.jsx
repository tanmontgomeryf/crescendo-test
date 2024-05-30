import Card from "../containers/card";
import { useRecipes } from "../hooks/useRecipes";

const Root = () => {
  const { recipes, isLoading, isError } = useRecipes();

  if (isLoading || isError)
    return (
      <div className="flex flex-grow w-screen justify-center items-center">
        {isLoading ? "Loading..." : "Unexpected Error..."}
      </div>
    );

  return (
    <div className="flex flex-grow flex-col gap-y-12 my-4 sm:gap-y-10 sm:my-10">
      {recipes?.map((recipe, i) => {
        const isEven = i % 2 === 0;
        return (
          <Card
            key={recipe?.uuid}
            recipe={recipe}
            orientation={isEven ? "left" : !isEven ? "right" : undefined}
          />
        );
      })}
    </div>
  );
};

export default Root;
