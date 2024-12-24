import React from "react";
import Image from "next/image";


const App = () => {
  return (
    <div lang="en" data-theme="">
      <header className="mx-[10vw] my-8 flex justify-between content-center items-center">
        <div>
          <a href="/" className="cursor">
          <Image
      src={"/img/[removal.ai]_d87dda1d-7b7d-4254-98d5-c321eaa7133e-foxreview_logo_be-2.png"}
      width={77}
      height={77}
      alt="FoxReview Logo"
    />
          </a>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[20vw]"
          />
        </div>

        <div className="flex gap-4 items-center">
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>

          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path
                d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
              />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
              />
            </svg>
          </label>
        </div>
      </header>

      <main>
        <section className="flex justify-center gap-20 mb-32">
          <article className="grid grid-cols-2 cursor-pointer rounded-lg items-center gap-4 w-96 h-[60vh] bg-gray-800 py-10 px-6 shadow-lg overflow-hidden">
            {[200, 202, 203, 204, 205, 206, 207, 208].map((num) => (
              <img
                key={num}
                className="rounded-lg"
                src={`https://unsplash.it/${num}`}
                alt="placeholder"
              />
            ))}
          </article>

          <article className="w-[35%]">
            <div className="card bg-base-100 h-[60vh] shadow-xl">
              <figure className="flex flex-col gap-10">
                <img
                  className="w-auto h-[20vw] "
                  src="/img/[removal.ai]_1b24e30a-d932-42e4-8ae5-890c7887cd45-rectangle-16.png"
                  alt="Headset"
                />
                <div className="join">
                  {[1, 2, 3, 4].map((item) => (
                    <button key={item} className={`join-item btn ${item === 1 ? "btn-active" : ""}`}>
                      {item}
                    </button>
                  ))}
                </div>
              </figure>
              
              <div className="card-body">
                <h2 className="card-title">
                  SteelSeries Arctis 7 - Gaming Headset
                </h2>
                <p>More info ...</p>

                <div className="flex items-center justify-between">
                  <div className="rating">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <input
                          key={index}
                          type="radio"
                          name="rating-2"
                          className={`mask mask-star-2 bg-orange-400 ${
                            index === 1 ? "checked" : ""
                          }`}
                        />
                      ))}
                  </div>

                  <div className="card-actions justify-end items items-center gap-5">
                    <label className="swap swap-flip text-5xl">
                      <input type="checkbox" />
                      <div className="swap-on">❤️</div>
                      <div className="swap-off">♡</div>
                    </label>
                    <img
                      className="w-auto h-[44px]"
                      src="/img/share (3).png"
                      alt="Share"
                    />
                    <button className="btn btn-active btn-primary bg-orange-500 text-white border-0">
                      Primary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-8 cursor-pointer rounded-lg items-center w-96 h-[60vh] bg-gray-800 py-10 px-6 shadow-lg">
            {["Amazon", "Target", "Walmart"].map((store, index) => (
              <div key={store} className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  {store}
                </div>
                <div className="collapse-title text-xl font-medium flex justify-end">
                  {index === 0 ? "$199" : index === 1 ? "$179" : "$219"}
                </div>
                <div className="collapse-content">
                  <button className="btn btn-sm bg-orange-500 text-white border-0">
                    Visit Site
                  </button>
                </div>
              </div>
            ))}
          </article>
        </section>

        <section className="flex justify-center mb-32">
          <article className="flex gap-4">
            {[
              "coin",
              "chat bubble",
              "youtube",
              "tiktok",
              "internet",
              "vs",
              "alarm",
              "tag",
            ].map((icon) => (
              <button
                key={icon}
                className="btn btn-outline w-40 h-28"
              >
                <img src={`/img/icons-bot/${icon}.png`} alt={icon} />
              </button>
            ))}
          </article>
        </section>
      </main>

      <footer className="footer footer-center bg-base-200 text-white text-primary-content p-10">
        <aside>
          <img
            src="/img/[removal.ai]_d87dda1d-7b7d-4254-98d5-c321eaa7133e-foxreview_logo_be-2.png"
            alt="Logo"
          />
          <p className="font-bold">
            FoxReview UG
            <br />
            Providing reliable tech since 2023
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Add SVG Social Links */}
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
