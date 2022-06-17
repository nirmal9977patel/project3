function navbar() {
    return `
    <div id="topheading">
    <p class="massage">Delivering in Mumbai and Delhi | Same day delivery!</p>
    </div>
    <div id="bottumheading">
      <div class="leftheading">
          <div class="dropdown">
             <button class="dropbtn">SHOP</button>
               <div class="dropdown-content">
                <a href="index.html">ALL FRUTIS</a>
                <a href="index.html">FRESH CUTS</a>
                <a href="index.html">FRUTIS COMBOS</a>
                <a href="index.html">GRAPE FAMILY BY KIMAYE</a>
                <a href="">GIFTS BY KIMAYE</a>
                <a href="">RETURN AND REPLACEMENT</a>
                <a href="">COMMUNITY BUYING</a>
              </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">LEARN </button>
            <div class="dropdown-content">
                <a href="">OUR STORY</a>
                <a href="whykimaye.html">WHY KIMAYE</a>
                <a href="">TRACEABLITY</a>
                <a href="">BEYOND FRUTIS</a>
               
            </div>
          </div>
      
          <a href="grow.html"><button class="dropbtn">GROW</button></a>
    </div>
   <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x@2x.png?v=1596288204" alt="" id="headingimg">
    <div class="leftheading">
        <div ><span><i class="fa-solid fa-location-check"></i></span> Mumbai</div>
                <a href=""><button class="dropbtn">SEARCH</button></a>
                <a href=""><button class="dropbtn">SIGN-UP</button></a>
                <a href="signup.html"><button class="dropbtn">ADD-CART</button></a>
         
    </div>
</div>
`;
}
export default navbar;

