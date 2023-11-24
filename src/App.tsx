function App() {
  return (
    <>
      <div>
        <nav className="flex justify-between p-4">
          <img src="./assets/images/logo.svg" alt="" />
          <img src="./assets/images/icon-menu.svg" alt="" />
        </nav>

        <div className="mx-4 grid justify-center gap-4 lg:grid-cols-3">
          <div>
            <img src="./assets/images/image-web-3-mobile.jpg" alt="" />
          </div>
          <div>
            <h1 className=" text-5xl font-bold">
              The Bright Future of Web 3.0?
            </h1>
          </div>
          <div>
            <p className="mb-4 text-gray-500">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mb-4 bg-orange-600 px-8 py-2 uppercase tracking-[.2rem] text-white">
              Read more
            </button>
          </div>

          <div className=" my-4 bg-slate-950 p-4 text-white">
            <h2 className="text-4xl text-orange-300">New</h2>
            <div className="border-b py-4">
              <h3 className="mb-2 text-xl font-bold">
                Hydrogen VS Electric Cars
              </h3>
              <p className="mb-2 text-gray-500">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="border-b py-4">
              <h3 className="mb-2 text-xl font-bold">
                The Downsides of AI Artistry
              </h3>
              <p className="mb-2 text-gray-500">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="py-4 pb-0">
              <h3 className="mb-2 text-xl font-bold">
                Is VC Funding Drying Up?
              </h3>
              <p className="mb-2 text-gray-500">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>

          {/* 1 2 3 section */}
          <div className="my-4 mb-16 grid gap-8">
            {/* <div className="grid grid-cols-2"> */}
            <div className="flex">
              <img
                className="row-span-3 h-36"
                src="./assets/images/image-retro-pcs.jpg"
                alt=""
              />
              <div className="ml-4">
                <h2 className="mb-4 text-3xl font-bold text-gray-500">01</h2>
                <h3 className="mb-4 text-lg font-bold">Reviving Retro PCs</h3>
                <p className="text-gray-500">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                className="row-span-3 h-36"
                src="./assets/images/image-top-laptops.jpg"
                alt=""
              />
              <div className="ml-4">
                <h2 className="mb-4 text-3xl font-bold text-gray-500">02</h2>
                <h3 className="mb-4 text-lg font-bold">
                  Top 10 Laptops of 2022
                </h3>
                <p className="text-gray-500">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                className="row-span-3 h-36"
                src="./assets/images/image-gaming-growth.jpg"
                alt=""
              />
              <div className="ml-4">
                <h2 className="mb-4 text-3xl font-bold text-gray-500">03</h2>
                <h3 className="mb-4 text-lg font-bold">The Growth of Gaming</h3>
                <p className="text-gray-500">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
