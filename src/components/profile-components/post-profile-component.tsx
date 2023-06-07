import { FunctionComponent } from "react";
import { profileData } from "../../api/profile-api/profile-interface";
import { format } from "date-fns";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

export const PostProfileComponent: FunctionComponent<{ data: profileData }> = ({
  data,
}) => {
  return (
    <>
      <div className="mx-auto w-full format format-sm sm:format-base lg:format-lg bg-white px-4 md:px-12 lg:px-80 pb-4 pt-8">
        <address className="flex items-center mb-6 not-italic">
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
    </>
  );
};
export default PostProfileComponent;
