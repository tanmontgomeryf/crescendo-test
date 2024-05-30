import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes";
import { useSpecials } from "../hooks/useSpecials";

import { IoClose } from "react-icons/io5";

const Modal = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { recipes } = useRecipes();
  const { specials } = useSpecials();

  const recipe = recipes?.find((recipe) => recipe.uuid === id);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const onDismiss = () => navigate(-1);

  return (
    <div className="bg-black fixed z-50 top-0 left-0 h-screen bg-opacity-50 flex items-center text-sm  w-full">
      <div className="max-w-screen-md min-w-[345px] mx-auto w-[calc(100%-28px)]">
        <div className="flex flex-col p-6 bg-white relative bottom-0 rounded-md">
          <IoClose
            className="self-end text-lg cursor-pointer hover:text-sky-400 "
            onClick={onDismiss}
            size={24}
          />

          <section className="sm:flex gap-x-6">
            <img src={recipe?.images?.small} />
            <div className="flex flex-col w-full justify-between">
              <div>
                <h2 className="text-xl mt-2 sm:mt-0 tracking-wider">
                  {recipe?.title}
                </h2>
                <p className="text-[10px]">{recipe?.description}</p>
              </div>

              <div>
                {Array(3)
                  .fill()
                  .map((_, i) => {
                    const values = [
                      { title: "Cooking Time", value: recipe?.cookTime },
                      { title: "Prep Time", value: recipe?.prepTime },
                      { title: "Serving", value: recipe?.servings },
                    ];
                    const value = values[i];
                    return (
                      <React.Fragment key={value.title}>
                        <p className="text-[10px] font-bold inline mr-1">{`${value?.title}:`}</p>
                        <p className="text-[10px] inline mr-6">
                          {value?.value}
                        </p>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </section>

          <section className="flex mt-5 gap-x-2">
            <div className="w-2/5">
              <h3 className="text-md uppercase tracking-wider">Ingredients:</h3>
              <ul className="list-disc list-inside">
                {recipe?.ingredients?.map((ingredient) => {
                  const promo = specials?.find(
                    (special) => special?.ingredientId === ingredient?.uuid
                  );
                  return (
                    <li key={ingredient?.name} className="leading-none">
                      <p className="text-[10px] inline capitalize">
                        {ingredient?.name}
                      </p>
                      {promo && (
                        <ul className="ml-3 leading-none">
                          <li>
                            <p className="text-[10px] mr-3 inline">○</p>
                            <p className="text-[10px] inline capitalize">
                              {promo.title}
                            </p>
                          </li>
                          <li>
                            <p className="text-[10px] mr-3 inline">○</p>
                            <p className="text-[10px] inline capitalize">
                              {promo.text}
                            </p>
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-3/5">
              <h3 className="text-md uppercase tracking-wider">Directions:</h3>
              <ul className="list-disc list-inside leading-none">
                {recipe?.directions?.map((direction, i) => (
                  <li key={i} className="mt-1">
                    <p className="text-[10px] inline capitalize">
                      {direction?.instructions}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <footer className="self-end mt-10 mb-5">
            <p className="text-[10px] font-bold inline italic">Post Date: </p>
            <p className="text-[10px] inline mr-3 italic">{recipe?.postDate}</p>

            <p className="text-[10px] font-bold inline italic">Edit Date: </p>
            <p className="text-[10px] inline italic">{recipe?.editDate}</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
