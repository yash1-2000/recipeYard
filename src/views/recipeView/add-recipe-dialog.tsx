import { FunctionComponent, ReactElement, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import ButtonComponent from "../../components/button-component/button-component";
import {
  recipeData,
  recipeFormData,
} from "../../api/recipe-api/recipe-interface";
import { useAuth } from "../../services/auth/auth-context";
import { useForm } from "react-hook-form";
import { useRecipe } from "../../services/recipes/recipe-context";
import { deleteRecipeImage, uploaRecipeImage } from "../../api/storage-api";

const getRecipeFormData = (
  userId: string,
  userName: string,
  recipe?: recipeData
): recipeFormData => {
  if (recipe) {
    return {
      id: recipe.id,
      postedBy: userId,
      title: recipe.title ?? "",
      description: recipe.description ?? "",
      ingredients: recipe.ingredients ?? "",
      steps: recipe.steps ?? "",
      isEditable: false,
      isVersion: true,
      versionOf: recipe.id,
      tags: [],
      reactions: [],
      recipeImg: recipe.recipeImg ?? "",
      authorName: userName,
      postedAt: "",
      acceptedSuggestion: "",
    };
  } else {
    return {
      id: "",
      postedBy: userId,
      title: "",
      description: "",
      ingredients: "",
      steps: "",
      isEditable: true,
      isVersion: false,
      versionOf: "",
      tags: [],
      reactions: [],
      recipeImg: "",
      authorName: userName,
      postedAt: "",
      acceptedSuggestion: "",
    };
  }
};

export const AddRecipeDialog: FunctionComponent<{
  closeDialog: () => void;
  recipe: recipeData;
}> = ({ closeDialog, recipe }): ReactElement => {
  const [uploadState, setUploadState] = useState(false);
  const { currentUser } = useAuth();
  const { addRecipe } = useRecipe();

  const {
    register,
    getValues,
    trigger,
    setValue,
    watch,
    formState: { isValid, isDirty },
  } = useForm<recipeFormData>({
    defaultValues: getRecipeFormData(
      currentUser ? currentUser.id : "",
      currentUser ? currentUser.name : "",
      recipe
    ),
  });

  const handleProfileSubmit = async () => {
    const formValues = getValues();
    console.log(formValues);

    trigger();
    if (!isValid || !isDirty) {
      console.log("form invalid");
    } else {
      await addRecipe(formValues);
      closeDialog();
    }
  };

  const recipeImg = watch("recipeImg");

  const uploadRecipeImg = async (file: any): Promise<void> => {
    if (file === null) return;
    const oldUrl = getValues().recipeImg;
    const result = await uploaRecipeImage(file);

    if (result.state === "success") {
      if ("data" in result && result.data !== undefined) {
        setValue("recipeImg", result.data, { shouldDirty: true });
        // await handleProfileSubmit();
        console.log("oldUrl before");
        await deleteRecipeImage(oldUrl);
        console.log("oldUrl after");
      }
    }
    return;
  };

  return (
    <div
      x-transition:enter="transition duration-300 ease-out"
      x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
      x-transition:leave="transition duration-150 ease-in"
      x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
      x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      className="fixed inset-0 z-100 overflow-y-auto grid h-screen place-items-center backdrop-blur-sm backdrop-grayscale bg-[#6f6d6d4f]"
    >
      {/* <div className="w-full bg-white lg:max-w-7xl"> */}
      <div className="relative w-[95%] w-full h-[80vh] overflow-auto my-8 bg-white lg:w-[80%]">
        <div
          className="sticky top-0 left-0 text-lg text-[#000000] cursor-pointer text-right p-2"
          onClick={() => closeDialog()}
        >
          X
        </div>
        <div className="w-5/6 my-8 mx-auto">
          <div
            className="w-full aspect-video bg-cover bg-[#4b5563]"
            style={{
              backgroundImage: `url(${recipeImg})`,
            }}
            onMouseEnter={() => setUploadState(true)}
            onMouseLeave={() => setUploadState(false)}
          >
            {uploadState ? (
              <label
                className="text-6xl text-white h-full w-full flex items-center justify-center bg-[#1f202170] cursor-pointer"
                htmlFor="imgUpload"
              >
                <input
                  name=""
                  type="file"
                  hidden
                  id="imgUpload"
                  onChange={(e) =>
                    uploadRecipeImg(e.target.files ? e.target.files[0] : null)
                  }
                />
                <MdFileUpload />
              </label>
            ) : null}
          </div>
          <br />
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">Title</p>
            <input
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("title")}
            />
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">
              Description
            </p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("description")}
            />
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">
              Ingredients
            </p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("ingredients")}
            />
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">Steps</p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("steps")}
            />
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">Tags</p>
            <textarea className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
          </div>
          <div className="flex items-center pl-4 mb-2 border border-gray-200 rounded">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              {...register("isEditable")}
            />
            <label className="w-full py-4 ml-2 text-lg leading-relaxed text-blueGray-700">
              Accept suggestions for this recipe.
            </label>
          </div>

          <div
            className={`text-right mt-4 ${
              !isDirty ? "pointer-events-none" : ""
            }`}
          >
            <ButtonComponent onClick={() => handleProfileSubmit()}>
              Create
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddRecipeDialog;
