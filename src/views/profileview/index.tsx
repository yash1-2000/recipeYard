import { useState } from 'react';
import { MdFileUpload } from 'react-icons/md';
import ButtonComponent from '../../components/button-component/button-component';

function Profile() {
  const [uploadState, setUploadState] = useState(false);
  return (
    <div>
      <section className="relative block">
      </section>      <section className="relative lg:py-28 py-32 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative w-64 max-w-150-px top-0 flex justify-center">
                    <div
                      className="shadow-xl rounded-full h-auto border-none absolute -m-16 -ml-20 lg:-ml-16 -top-5 w-3/4 aspect-square bg-cover "
                      style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"})`,
                      }}
                      onMouseEnter={() => setUploadState(true)}
                      onMouseLeave={() => setUploadState(false)}
                    >
                      {
                        uploadState ? <label className='text-6xl text-white rounded-full h-full w-full flex items-center justify-center bg-[#1f202170] cursor-pointer' htmlFor="formId">
                          <input name="" type="file" id="formId" hidden />
                          <MdFileUpload />
                        </label> : null
                      }
                    </div>

                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1 md:mt-20">
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-8 pt-8 md:mt-0 mt-24">
                <div>
                  <label className="text-secondary_text" >Username</label>
                  <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                </div>

                <div>
                  <label className="text-secondary_text" >Email Address</label>
                  <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-10">
                <div>
                  <label className="text-secondary_text" >instagram</label>
                  <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                </div>

                <div>
                  <label className="text-secondary_text" >linkedin</label>
                  <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                </div>

                <div>
                  <label className="text-secondary_text" >twitter</label>
                  <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      about
                    </p>
                    <textarea id="emailAddress" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                  </div>
                </div>
              </div>
              <br />
              <div className='text-right'>
                <ButtonComponent >Update Profile</ButtonComponent>
              </div>
              <br /><br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
