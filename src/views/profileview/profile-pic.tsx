import { useState, FunctionComponent } from "react";
import { MdFileUpload } from "react-icons/md";
import { deleteProfileImage, uploaProfileImage } from "../../api/storage-api";
import defaultProfilePic from "../../../public/images/defaultavatar.png";

const ProfilePicComp: FunctionComponent<{
  handleProfileSubmit: () => void;
  setValue: any;
  getValues: any;
  watch: any;
}> = ({ handleProfileSubmit, setValue, getValues, watch }) => {
  const [uploadState, setUploadState] = useState(false);

  const profileImg = watch("imageUrl");

  const uploadProfilePicandSaveProfile = async (file: any): Promise<void> => {
    if (file === null) return;
    const oldUrl = getValues().imageUrl;
    const result = await uploaProfileImage(file);

    if (result.state === "success") {
      if ("data" in result) {
        setValue("imageUrl", result.data, { shouldDirty: true });
        await handleProfileSubmit();
        await deleteProfileImage(oldUrl);
      }
    }
    return;
  };

  return (
    <div
      className="shadow-xl rounded-full h-auto border-none absolute -m-16 -ml-20 lg:-ml-16 -top-5 w-3/4 aspect-square bg-cover bg-center bg-[#4b5563]"
      style={{
        backgroundImage: `url(${
          profileImg === "" ? defaultProfilePic : profileImg
        })`,
      }}
      onMouseEnter={() => setUploadState(true)}
      onMouseLeave={() => setUploadState(false)}
    >
      {uploadState ? (
        <label
          className="text-6xl text-white rounded-full h-full w-full flex items-center justify-center bg-[#1f202170] cursor-pointer"
          htmlFor="formId"
        >
          <input
            name=""
            type="file"
            id="formId"
            hidden
            onChange={(e) =>
              uploadProfilePicandSaveProfile(
                e.target.files ? e.target.files[0] : null
              )
            }
          />
          <MdFileUpload />
        </label>
      ) : null}
    </div>
  );
};

export default ProfilePicComp;
