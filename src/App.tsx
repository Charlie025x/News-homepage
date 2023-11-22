function App() {
  return (
    <>
      <div>
        <nav className="flex justify-between p-4">
          <img src="./assets/images/logo.svg" alt="" />
          <img src="./assets/images/icon-menu.svg" alt="" />

        </nav>
        <div>
          <div><img src="./assets/images/image-web-3-mobile.jpg" alt="" /></div>
        </div>
        <div>
          <h1 className=" font-bold text-5xl">The Bright Future of Web 3.0?</h1>
        </div>
        <div>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className="text-white bg-orange-600 p-3 py-1">Read more</button>
        </div>

        <div className=" bg-slate-950 text-white">

         <h2>New</h2>
         <div>
           <h3>Hydrogen VS Electric Cars</h3>
           <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
         </div>
         <div>
           <h3>The Downsides of AI Artistry</h3>
           <p>What are the possible adverse effects of on-demand AI image generation?</p>
         </div>
         <div>
           <h3>Is VC Funding Drying Up?</h3>
           <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

         </div>
         
        <div className="">
          
          <div>
            <img src="./assets/images/image-retro-pcs.jpg" alt="" />
          <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
          <div>
            <img src="./assets/images/image-top-laptops.jpg" alt="" />
          <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
          <div>
            <img src="./assets/images/image-gaming-growth.jpg" alt="" />
          <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
           </div>
 
          </div>

      </div>
    </>
  );
}

export default App;
