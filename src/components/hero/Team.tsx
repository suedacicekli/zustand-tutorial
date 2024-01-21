import React from "react";

function Team() {
  return (
    <div className="flex flex-col mt-8">
      <div className="container max-w-7xl px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className=" text-4xl font-bold mb-8">Rigel</h1>

            <p className=" text-lg font-light">
              With over 100 years of combined experience, we've got a
              well-seasoned team at the helm.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://avatars.githubusercontent.com/u/88403704?v=4"
                />
              </a>

              <div className="text-center mt-6">
                <h1 className=" text-xl font-bold mb-1">Sueda Çiçekli</h1>

                <div className="font-light mb-2">Frontend Developer</div>

                <div
                  className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                  <a
                    href="#"
                    className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://media.licdn.com/dms/image/C4D03AQGNDhGPz8rmfQ/profile-displayphoto-shrink_800_800/0/1655464261661?e=1711584000&v=beta&t=mXTu5ynE56ur-NySxkpD1sD5hIxDHOYwaenImMK94yk"
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-xl font-bold mb-1">Kenji Milton</h1>

                <div className=" font-light mb-2">Team Memeber</div>

                <div
                  className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                  <a
                    href="#"
                    className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                />
              </a>

              <div className="text-center mt-6">
                <h1 className="text-xl font-bold mb-1">Doesn't matter</h1>

                <div className=" font-light mb-2">Will be fired</div>

                <div
                  className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                  <a
                    href="#"
                    className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>

                  <a
                    href="#"
                    className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
