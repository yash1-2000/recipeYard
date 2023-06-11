import { FunctionComponent, useState } from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import ProfilePopupComponent from "./profile-popup";

export const PostProfileComponent: FunctionComponent<{ data: profileData }> = ({
  data,
}) => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowProfilePopup(true)}
      onMouseLeave={() => setShowProfilePopup(false)}
    >
      <div>
        <address className="flex items-center pb-2 not-italic">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
            <div
              className="w-16 aspect-square rounded-full bg-cover bg-[red] mr-4"
              style={{ backgroundImage: `url(${data.imageUrl})` }}
            ></div>
            <div>
              <a
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900 "
              >
                {data.name ?? ""}
              </a>

              <div className="flex gap-4 mt-2 text-lg text-gray-900">
                <a
                  href={data.instagram ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <BsInstagram />
                </a>
                <a
                  href={data.twitter ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <AiOutlineTwitter />
                </a>
                <a
                  href={data.linkedin ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </address>
      </div>
      {showProfilePopup && <ProfilePopupComponent data={data} />}
    </div>
  );
};
export default PostProfileComponent;
