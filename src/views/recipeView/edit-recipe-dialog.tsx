import {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdFileUpload } from "react-icons/md";
import ButtonComponent from "../../components/button-component/button-component";
import {
  recipeData,
  recipeFormData,
} from "../../api/recipe-api/recipe-interface";
import { useForm } from "react-hook-form";
import { useRecipe } from "../../services/recipes/recipe-context";
import { deleteRecipeImage, uploaRecipeImage } from "../../api/storage-api";

const getRecipeFormData = (data: recipeData): recipeFormData => {
  return {
    id: data.id,
    postedBy: data.postedBy ?? "",
    title: data.title ?? "",
    description: data.description ?? "",
    ingredients: data.ingredients ?? "",
    steps: data.steps ?? "",
    isEditable: data.isEditable === null ? true : data.isEditable,
    isVersion: data.isVersion === null ? false : data.isVersion,
    versionOf: data.versionOf ?? "",
    tags: data.tags ?? [],
    reactions: data.reactions ?? [],
    recipeImg: data.recipeImg ?? "",
    authorName: data.authorName ?? "",
    postedAt: data.postedAt ?? "",
    acceptedSuggestion: data.acceptedSuggestion ?? "",
  };
};

export const EditRecipeDialog: FunctionComponent<{
  closeDialog: () => void;
  getRecipeData: () => void;
  data: recipeData;
}> = ({ closeDialog, getRecipeData, data }): ReactElement => {
  const submitionStatus = useRef(false);

  const [uploadState, setUploadState] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const { editRecipe } = useRecipe();

  const { register, getValues, trigger, setValue, watch, formState } =
    useForm<recipeFormData>({
      defaultValues: getRecipeFormData(data),
    });

  const { errors, isValid, isDirty } = formState;

  const handleProfileSubmit = async () => {
    const formValues = getValues();
    console.log(formValues);

    trigger();
    if (!isValid || !isDirty) {
    } else {
      await editRecipe(formValues);
      await getRecipeData();
      submitionStatus.current = true;
      closeDialog();
    }
  };

  const recipeImg = watch("recipeImg");

  const uploadRecipeImg = async (file: any): Promise<void> => {
    if (file === null) return;
    const oldUrl = getValues().recipeImg.slice();
    setFiles((a) => [...a, oldUrl]);
    const result = await uploaRecipeImage(file);

    if (result.state === "success") {
      if ("data" in result && result.data !== undefined) {
        setValue("recipeImg", result.data, { shouldDirty: true });
      }
    }
    return;
  };

  useEffect(() => {
    return () => {
      if (submitionStatus.current) {
        console.log("submitted", files);
        const aa = files;
        console.log(aa);

        aa.forEach((url: string) => {
          deleteRecipeImage(url);
        });
      } else {
        const bb = files;
        console.log(bb);
        bb.push(getValues().recipeImg);
        bb.shift();
        console.log("not submitted", bb);
        bb.forEach((url: string) => {
          deleteRecipeImage(url);
        });
      }
    };
  }, [isDirty]);

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto grid h-screen place-items-center backdrop-blur-sm backdrop-grayscale bg-[#6f6d6d4f]">
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
              {...register("title", {
                required: "This field is required",
                validate: {
                  minLength: (v) =>
                    v.length < 301 || "Max limit is 300 characters",
                },
              })}
            />
            {errors?.title?.message && (
              <small className="text-[red]">{errors.title.message}</small>
            )}
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">
              Description
            </p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("description", {
                required: "This field is required",
                validate: {
                  minLength: (v) =>
                    v.length < 5001 || "Max limit is 5000 characters",
                },
              })}
            />
            {errors?.description?.message && (
              <small className="text-[red]">{errors.description.message}</small>
            )}
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">
              Ingredients
            </p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("ingredients", {
                required: "This field is required",
                validate: {
                  minLength: (v) =>
                    v.length < 25001 || "Max limit is 25000 characters",
                },
              })}
            />
            {errors?.ingredients?.message && (
              <small className="text-[red]">{errors.ingredients.message}</small>
            )}
          </div>
          <div className="w-full">
            <p className="text-lg leading-relaxed text-blueGray-700">Steps</p>
            <textarea
              className="block w-full px-4 py-2 mb-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
              {...register("steps", {
                required: "This field is required",
                validate: {
                  minLength: (v) =>
                    v.length < 30001 || "Max limit is 30000 characters",
                },
              })}
            />
            {errors?.steps?.message && (
              <small className="text-[red]">{errors.steps.message}</small>
            )}
          </div>
          <div
            className={`text-right mt-8 ${
              !isDirty ? "pointer-events-none" : ""
            }`}
          >
            <ButtonComponent onClick={() => handleProfileSubmit()}>
              Edit
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditRecipeDialog;
