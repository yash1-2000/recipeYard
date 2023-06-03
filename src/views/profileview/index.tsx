import { useEffect, useState } from "react";
import ButtonComponent from "../../components/button-component/button-component";
import { useProfile } from "../../services/profile/profile-context";
import ProfilePicComp from "./profile-pic";
import {
  profileData,
  profileFormData,
} from "../../api/profile-api/profile-interface";
import { useForm } from "react-hook-form";
import { useAuth } from "../../services/auth/auth-context";
import { updateProfile } from "../../api/profile-api";

function Profile() {
  const {
    getCurrentProfileData,
    editProfileData,
    createProfileData,
    currentProfileData,
  } = useProfile();
  const { currentUser } = useAuth();

  const [profileFormState, setProfileFormState] = useState<profileData | null>(
    null
  );

  const getProfileFormData = (): profileFormData => {
    if (currentProfileData === null) {
      return {
        id: "",
        name: "",
        imageUrl: "",
        about: "",
        email: "",
        userId: currentUser ? currentUser.id : "",
        joinedFrom: "",
        linkedin: "",
        instagram: "",
        twitter: "",
      };
    } else {
      return {
        id: currentProfileData.id,
        name: currentProfileData.name ?? "",
        imageUrl: currentProfileData.imageUrl ?? "",
        about: currentProfileData.about ?? "",
        email: currentProfileData.email ?? "",
        userId: currentProfileData.userId,
        joinedFrom: currentProfileData.joinedFrom ?? "",
        linkedin: currentProfileData.linkedin ?? "",
        instagram: currentProfileData.instagram ?? "",
        twitter: currentProfileData.twitter ?? "",
      };
    }
  };

  const {
    register,
    getValues,
    trigger,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<profileFormData>({ defaultValues: getProfileFormData() });

  const handleProfileSubmit = async () => {
    const formValues = getValues();
    console.log(formValues);

    trigger();
    if (!isValid || !isDirty) {
      console.log("form invalid");
    } else {
      if (currentProfileData === null) {
        createProfileData(formValues);
      } else {
        editProfileData(formValues);
      }
      console.log("form is valid");
    }
  };

  // useEffect(() => {
  //   setProfileFormState(profileFormState);
  // }, [profileFormState]);

  return (
    <div>
      <section className="relative block"></section>{" "}
      <section className="relative lg:py-28 py-32 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative w-64 max-w-150-px top-0 flex justify-center">
                    <ProfilePicComp
                      handleProfileSubmit={handleProfileSubmit}
                      setValue={setValue}
                      getValues={getValues}
                      watch={watch}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1 md:mt-20"></div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-8 pt-8 md:mt-0 mt-24">
                <div>
                  <label className="text-secondary_text">Username</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    {...register("name")}
                  />
                </div>

                <div>
                  <label className="text-secondary_text">Email Address</label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    {...register("email")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10">
                <div>
                  <label className="text-secondary_text">instagram</label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    {...register("instagram")}
                  />
                </div>

                <div>
                  <label className="text-secondary_text">linkedin</label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    {...register("linkedin")}
                  />
                </div>

                <div>
                  <label className="text-secondary_text">twitter</label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                    {...register("twitter")}
                  />
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      about
                    </p>
                    <textarea
                      id="emailAddress"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none"
                      {...register("about")}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                {isDirty ? (
                  <ButtonComponent onClick={handleProfileSubmit}>
                    Update Profile
                  </ButtonComponent>
                ) : null}
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
