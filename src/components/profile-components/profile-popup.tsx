import { FunctionComponent } from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { format } from "date-fns";

export const ProfilePopupComponent: FunctionComponent<{
  data: profileData;
}> = ({ data }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg absolute left-0">
      <div
        className="w-full aspect-video aspect-square rounded-t-lg bg-cover bg-[red] mr-4"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      ></div>

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
          />
        </svg>

        <h1 className="mx-3 text-lg font-semibold text-white">
          Cooking since{" "}
          {data.joinedFrom
            ? format(new Date(data.joinedFrom), "dd MMM yyyy")
            : ""}
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          {data.name ?? ""}
        </h1>

        <p className="py-2 text-gray-700">{data.about ?? ""}</p>
      </div>
    </div>
  );
};
export default ProfilePopupComponent;
