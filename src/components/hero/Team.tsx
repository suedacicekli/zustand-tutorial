function Team() {
  return (
    <div className="sm:ml-64">
      <div className="flex flex-col mt-8">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className=" text-4xl font-bold mb-8 ">Rigel</h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="h-28 rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://media.licdn.com/dms/image/C4D03AQGvu1mMe9qpvg/profile-displayphoto-shrink_800_800/0/1652634665339?e=2147483647&v=beta&t=3nNmpH-jOUClQQ7jOnDwEK6-mSl-y4W1FQiDdxFU_tM"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className=" text-xl font-bold mb-1">Sueda Çiçekli</h1>

                  <div className="font-light mb-2">Frontend Developer</div>

                  <div
                    className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                    <a
                      href="https://www.linkedin.com/in/suedacicekli/"
                      target="_blank"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                      <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                    </a>

                    <a
                      href="https://github.com/suedacicekli"
                      target="_blank"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                      <i className="mdi mdi-github text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="h-28 rounded-2xl min-w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://media.licdn.com/dms/image/C4D03AQGNDhGPz8rmfQ/profile-displayphoto-shrink_800_800/0/1655464261661?e=1711584000&v=beta&t=mXTu5ynE56ur-NySxkpD1sD5hIxDHOYwaenImMK94yk"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-xl font-bold mb-1">Büşra Kosnak</h1>

                  <div className=" font-light mb-2">Frontend Developer</div>

                  <div
                    className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                    <a
                      href="https://www.linkedin.com/in/busrakosnak/"
                      target="_blank"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                      <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                    </a>

                    <a
                      href="https://github.com/busra4"
                      target="_blank"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                      <i className="mdi mdi-github text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="h-28 rounded-2xl min-w-full drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://media.licdn.com/dms/image/D4D03AQHTX_K2ydyFoA/profile-displayphoto-shrink_800_800/0/1670777924778?e=2147483647&v=beta&t=PjhCXXqQpSecxe_dDsQ54b06NJ7YmDzPJYP8rgVUKDI"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-xl font-bold mb-1">İrem Gündoğan</h1>

                  <div className=" font-light mb-2">Frontend Developer</div>

                  <div
                    className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                    <a
                      href="https://www.linkedin.com/in/iremgundogann"
                      target="_blank"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                      <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                    </a>

                    <a
                      href="https://github.com/iremgndgn"
                      target="_blank"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                      <i className="mdi mdi-github text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
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
