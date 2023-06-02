import { useState } from "react";
import { MdFileUpload } from "react-icons/md";

function ProfilePicComp() {
  const [uploadState, setUploadState] = useState(false);
  return (
    <div
      className="shadow-xl rounded-full h-auto border-none absolute -m-16 -ml-20 lg:-ml-16 -top-5 w-3/4 aspect-square bg-cover "
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"})`,
      }}
      onMouseEnter={() => setUploadState(true)}
      onMouseLeave={() => setUploadState(false)}
    >
      {uploadState ? (
        <label
          className="text-6xl text-white rounded-full h-full w-full flex items-center justify-center bg-[#1f202170] cursor-pointer"
          htmlFor="formId"
        >
          <input name="" type="file" id="formId" hidden />
          <MdFileUpload />
        </label>
      ) : null}
    </div>
  );
}

export default ProfilePicComp;
