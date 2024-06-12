// UpperNavbar static component
class UpperNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!--start Top header -->
    <div class="bg-slate-100 relative z-10">
      <div 
        class="md:flex max-w-[1800px] mx-auto px-4 h-[36px] justify-between items-center hidden ">
      <!-- Left-top-logo -->
        <div class="pl-[20px]">
          <ul class="flex gap-4 ">
            <li class="hover:opacity-60">
              <a class="" href=""><svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg></a>
            </li>
            <li class="hover:opacity-60">
              <a class="" href=""><svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33"><path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg></a>
            </li>
          </ul>         
        </div>
        <!-- Right-top-navbar -->
        <div>
          <ul class="flex items-center gap-[5px] text-xs font-medium">
            <li class="hover:opacity-60">
              <a href="">Find a store </a>
            </li>
            <span class="p-3">|</span>
            <li class="dropdown-hover ">
               <div class=" cursor-pointer hover:opacity-60">
                  <a class="" href="">Help</a>
               </div>
               <div class="dropdown-menu absolute top-[80px] bg-white right-[15%] w-[240px] rounded-lg z-20 max-h-[0px] overflow-hidden duration-700 hover:opacity-100">
                  <div class="p-6">
                     <h4 class="mb-4 text-[16px]"><a href="">Help</a></h4>
                     <ul class="text-[12px] text-[#7A7A7C]">
                        <li class="hover:text-black py-2"><a href="">Order Status</a></li>
                        <li class="hover:text-black py-2"><a href="">Shipping & Delivery</a></li>
                        <li class="hover:text-black py-2"><a href="">Returns</a></li>
                        <li class="hover:text-black py-2"><a href="">Order Cancellation</a></li>
                        <li class="hover:text-black py-2"><a href="">Size Charts</a></li>
                        <li class="hover:text-black py-2"><a href="">Contact Us</a></li>
                        <li class="hover:text-black py-2"><a href="">Membership</a></li>
                        <li class="hover:text-black py-2"><a href="">Promotions & Discounts</a></li>
                        <li class="hover:text-black py-2"><a href="">Product Advice</a></li>
                        <li class="hover:text-black py-2"><a href="">Send Us Feedback</a></li>
                     </ul>
                  </div>
               </div>
            </li>
            <span class="p-3">|</span>
            <li class="hover:opacity-60">
              <a class="" href="">Join us </a>
            </li>
            <span class="p-3">|</span>
            <li class="mr-3 hover:opacity-60">
              <a href="./log-in.html">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--end Top header -->
        `;
  }
}

customElements.define("top-navbar", UpperNavbar);

// main navbar static component
class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="relative z-[100]">  
      <div class="flex max-w-[1800px] mx-auto px-4 justify-between items-center">
        <!-- nike-logo-->
        <div class="hover:opacity-60">
          <a href="../index.html"><svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="110px" height="74px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg></a>
        </div>        
        <div class="flex justify-between ">
          <ul class="md:flex gap-4 font-medium hidden">
            <!-- new Featured -->
            <li  class="px-3 pt-3 pb-[18px]" onmouseenter="hoverDrop(1)" onmouseleave="hoverHide(-1)">
                <a href="../public/new-feature.html">New & Featured</a>
              <div id="newFeature" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
               <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                  <div class="pt-4">
                     <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                     <ul class="text-[14px]">
                        <li class="text-[#707072] hover:text-black"><a href="">Shop the Collection</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                     </ul>                    
                  </div>
                  <div class="pt-4">
                     <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                     <ul class="text-[14px]">
                        <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="../public/best-seller.html">Best Sellers</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">New & Upcoming Drops</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                     </ul>                    
                  </div>
                  <div class="pt-4">
                     <h4 class="mb-[14px]"><a href="">Trending</a></h4>
                     <ul class="text-[14px]">
                        <li class="text-[#707072] hover:text-black"><a href="">ACG</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Lifestyle Running</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">The Color Shop</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Shop Sport</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                     </ul>                    
                  </div>
                  <div class="pt-4">
                     <h4 class="mb-[14px]"><a href="">Shop Classics</a></h4>
                     <ul class="text-[14px]">
                        <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Air Jordan 1</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Air Force</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Blazer</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Vomero</a></li>
                     </ul>                    
                  </div>
                  <div class="pt-4">
                     <h4 class="mb-[14px]"><a href="">Explore</a></h4>
                     <ul class="text-[14px]">
                        <li class="text-[#707072] hover:text-black"><a href="">SNKRNS Launch Calendar</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Running Shoe Finder</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Bra Finder</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Product Care</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Member Rewards</a></li>
                        <li class="text-[#707072] hover:text-black"><a href="">Buying Guides</a></li>
                     </ul>                    
                  </div>
               </div>
              </div>
            </li>
            <!-- Men -->
            <li class="px-3 pt-3 pb-[18px]" onmouseenter="hoverDrop(2)" onmouseleave="hoverHide(-2)">
               <a href="">Men</a>
               <div id="men" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
                  <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                     <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                        <ul class="text-[14px]">
                           <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                        </ul>                    
                     </div>
                     <div class="flex flex-col">
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Best Sellers</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">New & Upcoming Drops</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                           </ul>                    
                        </div>
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">Collections</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">ACG Essentials</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Time for Tennis</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Nike Life</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                           </ul>                    
                        </div>
                     </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Shoes</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">All Shoes</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Lifestyle</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Lifestyle Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Air Force</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Traning & Gym</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Nike SB</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Sandals & Slide</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Nike By You</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Shoes $100 & Under</a></li>
                      </ul>                    
                    </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Clothing</a></h4>
                        <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Clothing</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hoodies & Sweatshirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Pants & Tights</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jackets & Vests</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Top & T-Shirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Shorts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Matching Sets</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Big & Tall</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                        </ul>                    
                      </div>
                      <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Accessories</a></h4>
                        <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Accessories</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Bags & Backpacks</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hats & Headwear</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Socks</a></li>
                        </ul>                    
                      </div>
                    </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Shop By Sport</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Golf</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Soccer</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Training & Gym</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Tennis</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Baseball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Football</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Trall Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Swimming</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Pickleball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Fan Gear</a></li>
                      </ul>                    
                    </div>
                  </div>
               </div>
            </li>
            <!-- Women -->
            <li class="px-3 pt-3 pb-[18px]" onmouseenter="hoverDrop(3)" onmouseleave="hoverHide(-3)">
                <a href="">Women</a>
               <div id="women" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
                <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                  <div class="pt-4">
                    <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                    <ul class="text-[14px]">
                      <li class="text-[#707072] hover:text-black"><a href="">Shop the Collection</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                    </ul>                    
                  </div>
                  <div class="flex flex-col">
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Best Sellers</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">All Sale</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                      </ul>                    
                    </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Collections</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">The Color Shop</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Zenvy Collection</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Loungewear</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                      </ul>                    
                    </div>
                  </div>
                  <div class="pt-4">
                    <h4 class="mb-[14px]"><a href="">Shoes</a></h4>
                    <ul class="text-[14px]">
                      <li class="text-[#707072] hover:text-black"><a href="">All Shoes</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Lifestyle</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Lifestyle Running</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Air Force</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Traning & Gym</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Nike SB</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Sandals & Slide</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Nike By You</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Shoes $100 & Under</a></li>
                    </ul>                    
                  </div>
                  <div class="flex flex-col">
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Clothing</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">All Clothing</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Hoodies & Sweatshirts</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Pants</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Leggings</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Jackets & Vests</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Top & T-Shirts</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Shorts</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Skirts and Dresses</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Bras</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Plus Size</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                      </ul>                    
                    </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Accessories</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">All Accessories</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Bags & Backpacks</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Hats & Headwear</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Socks</a></li>
                      </ul>                    
                    </div>
                  </div>
                  <div class="pt-4">
                    <h4 class="mb-[14px]"><a href="">Shop By Sport</a></h4>
                    <ul class="text-[14px]">
                      <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Golf</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Soccer</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Training & Gym</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Tennis</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Baseball</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Football</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Trall Running</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Swimming</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Pickleball</a></li>
                      <li class="text-[#707072] hover:text-black"><a href="">Fan Gear</a></li>
                    </ul>                    
                  </div>
              </div>
            </div>
          </li>
          <!-- Kids -->
          <li class="px-3 pt-3 pb-[18px] lg:block hidden" onmouseenter="hoverDrop(4)" onmouseleave="hoverHide(-4)">
              <a href="../public/kids.html">Kids</a>
              <div id="kids" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
                <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">Shop the Collection</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                      </ul>                    
                    </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Best Sellers</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">All Sale</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                          </ul>                    
                      </div>
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Collections</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">EasyOn</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Teen Essentials</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">News in Basketball</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Skate X LifeStyle</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                          </ul>                    
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">All Shoes</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">Big Kids (1Y - 7Y)</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Little Kids (8C - 3Y)</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Baby & Toddler (1C - 10C)</a></li>
                          </ul>                    
                      </div>
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">All Shoes</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">Lifestyle</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Air Force 1</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Sandals & Slides</a></li>
                          </ul>                    
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Clothing by Size</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">Big Kids(XS - XL)</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Little Kids (4 - 7)</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Baby & Toddler (0M - 4T)</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Extended Sizing</a></li>
                          </ul>                    
                      </div>
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">All Clothing</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Clothing</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hoodies & Sweatshirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Pants</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Leggings</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jackets & Vests</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Top & T-Shirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Shorts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Skirts and Dresses</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Bras</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Plus Size</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                          </ul>                    
                      </div>                        
                    </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Shop By Sport</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Golf</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Soccer</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Training & Gym</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Tennis</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Baseball</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Football</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Trall Running</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Swimming</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Pickleball</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Fan Gear</a></li>
                          </ul>                    
                      </div>
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Accessories</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Accessories</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Bags & Backpacks</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hats & Headwear</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Socks</a></li>
                          </ul>                    
                      </div>
                    </div>                    
                </div>
              </div>
            </li>
            <!-- Accessories -->
            <li class="px-3 pt-3 pb-[18px] xl:block hidden" onmouseenter="hoverDrop(5)" onmouseleave="hoverHide(-5)">
               <a href="">Accessories</a>
               <div id="access" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
                  <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                     <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                        <ul class="text-[14px]">
                           <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                        </ul>                    
                     </div>
                     <div class="flex flex-col">
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Best Sellers</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">New & Upcoming Drops</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                           </ul>                    
                        </div>
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">Collections</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">ACG Essentials</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Time for Tennis</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Nike Life</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                           </ul>                    
                        </div>
                     </div>
                     <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Shoes</a></h4>
                        <ul class="text-[14px]">
                           <li class="text-[#707072] hover:text-black"><a href="">All Shoes</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Lifestyle</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Lifestyle Running</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Air Force</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Traning & Gym</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Nike SB</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Sandals & Slide</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Nike By You</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Shoes $100 & Under</a></li>
                        </ul>                    
                     </div>
                     <div class="flex flex-col">
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Clothing</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Clothing</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hoodies & Sweatshirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Pants & Tights</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jackets & Vests</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Top & T-Shirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Shorts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Matching Sets</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Big & Tall</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                          </ul>                    
                      </div>
                      <div class="pt-4">
                          <h4 class="mb-[14px]"><a href="">Accessories</a></h4>
                          <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Accessories</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Bags & Backpacks</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hats & Headwear</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Socks</a></li>
                          </ul>                    
                      </div>
                    </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Shop By Sport</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Golf</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Soccer</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Training & Gym</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Tennis</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Baseball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Football</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Trall Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Swimming</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Pickleball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Fan Gear</a></li>
                      </ul>                    
                    </div>
                  </div>
               </div>
            </li>
            <!-- Sale -->
            <li class="px-3 pt-3 pb-[18px] 2xl:block hidden" onmouseenter="hoverDrop(6)" onmouseleave="hoverHide(-6)">
               <a href="">Sale</a>
               <div id="sale" class=" absolute left-0 w-screen px-10  bg-white max-h-[0px] duration-300 overflow-y-hidden" >
                  <div class="max-w-[1344px] mx-auto pb-[15px] flex gap-[60px] justify-center pt-8">
                     <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Mother's Day Shop</a></h4>
                        <ul class="text-[14px]">
                           <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
                        </ul>                    
                     </div>
                     <div class="flex flex-col">
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">New & Featured</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">New arrivals</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Best Sellers</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">New & Upcoming Drops</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Add to Bag to See Price</a></li>
                           </ul>                    
                        </div>
                        <div class="pt-4">
                           <h4 class="mb-[14px]"><a href="">Collections</a></h4>
                           <ul class="text-[14px]">
                              <li class="text-[#707072] hover:text-black"><a href="">ACG Essentials</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Time for Tennis</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Nike Life</a></li>
                              <li class="text-[#707072] hover:text-black"><a href="">Jordan Family Days</a></li>
                           </ul>                    
                        </div>
                     </div>
                     <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Shoes</a></h4>
                        <ul class="text-[14px]">
                           <li class="text-[#707072] hover:text-black"><a href="">All Shoes</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Lifestyle</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Dunk</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Lifestyle Running</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Air Max</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Air Force</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Traning & Gym</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Nike SB</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Sandals & Slide</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Nike By You</a></li>
                           <li class="text-[#707072] hover:text-black"><a href="">Shoes $100 & Under</a></li>
                        </ul>                    
                     </div>
                    <div class="flex flex-col">
                      <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Clothing</a></h4>
                        <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Clothing</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hoodies & Sweatshirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Pants & Tights</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jackets & Vests</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Top & T-Shirts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Shorts</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Matching Sets</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Big & Tall</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Jordan</a></li>
                        </ul>                    
                      </div>
                      <div class="pt-4">
                        <h4 class="mb-[14px]"><a href="">Accessories</a></h4>
                        <ul class="text-[14px]">
                            <li class="text-[#707072] hover:text-black"><a href="">All Accessories</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Bags & Backpacks</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Hats & Headwear</a></li>
                            <li class="text-[#707072] hover:text-black"><a href="">Socks</a></li>
                        </ul>                    
                      </div>
                    </div>
                    <div class="pt-4">
                      <h4 class="mb-[14px]"><a href="">Shop By Sport</a></h4>
                      <ul class="text-[14px]">
                          <li class="text-[#707072] hover:text-black"><a href="">Basketball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Golf</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Soccer</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Training & Gym</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Tennis</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Baseball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Football</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Trall Running</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Swimming</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Pickleball</a></li>
                          <li class="text-[#707072] hover:text-black"><a href="">Fan Gear</a></li>
                      </ul>                    
                    </div>
                  </div>
               </div>
            </li>
          </ul>
        </div>
        <!-- Right-nav-->
        <div class="flex pr-8 gap-5 pt-2 relative"> 
          <div class="rounded-full bg-slate-100 mb-3 w-[180px] relative hidden md:block">             
            <button class="w-[30px] h-[30px]  absolute top-1 left-1 hover:bg-slate-200 rounded-full ">
              <svg aria-hidden="true" class="pre-nav-design-icon relative left-[2px]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
            </button>
            <input class="border-none outline-none py-2 bg-slate-100 rounded-full pl-10 w-full hover:bg-slate-200" type="search" placeholder="Search">
          </div> 
          <!-- icon container -->
          <div class="flex gap-5 mt-2">
            <!-- search button -->
            <button class="w-[30px] h-[30px] hover:bg-slate-200 rounded-full md:hidden ">
              <svg aria-hidden="true" class="pre-nav-design-icon relative left-[2px]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
            </button>
            <!-- heart button -->
            <button class="w-[30px] h-[30px] rounded-full hover:bg-slate-200" href=""><svg aria-hidden="true" class="pre-nav-design-icon relative left-[2px]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></button>
            <!-- bag button -->
            <button class="w-[30px] h-[30px] rounded-full hover:bg-slate-200" href="">
              <svg aria-hidden="true" class="pre-nav-design-icon relative left-[2px]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
            </button> 
            <!-- hamburger button -->
            <button id="hamburger-icon" class="md:hidden">
              <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
        `;
  }
}
customElements.define("main-navbar", MainNavbar);


// Sidebar hamburger section
class HamburgerSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="hamburger-sidebar" class="w-[0px] h-[100vh] fixed top-0 right-0 bg-white z-[10000] overflow-hidden duration-500">
    <!-- x-button -->
    <button id="x-close" class="absolute top-4 right-11">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
    <div class="pr-[30px] pl-[36px] pb-[150px] pt-10 overflow-y-scroll">
      <div class="flex flex-col">
        <!-- New & Featured -->
        <button class=" flex justify-between w-full py-[10px]">
          <a href="./new-feature.html" class="text-[24px] ">New & Featured</a>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 accordions-btn-drop">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>                       
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">News Arrivals</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Featured</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Trending</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shop Classics</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Explore</a></li>
          </ul>
        </div>
        <!-- Men -->
        <button class="accordions-btn-drop flex justify-between w-full py-[10px]">
          <h4 class="text-[24px] ">Men</h4>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>             
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">News Arrivals</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Mother's Day Shop</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Featured</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Collection</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shoes</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Clothing</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Accessories</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shop by Sport</a></li>
          </ul>
        </div>
        <!-- Women -->
        <button class=" flex justify-between w-full py-[10px]">
          <a class="text-[24px] ">Women</a>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 accordions-btn-drop">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>             
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">News Arrivals</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Mother's Day Shop</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Featured</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Collection</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shoes</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Clothing</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Accessories</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shop by Sport</a></li>
          </ul>
        </div>
        <!-- Kids -->
        <button class="flex justify-between w-full py-[10px]">
          <a href="kids.html" class="text-[24px] ">Kids</a>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 accordions-btn-drop ">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>             
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">News Arrivals</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Mother's Day Shop</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Featured</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Collection</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shop by Age</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shoes</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Clothing</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Accessories</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Shop by Sport</a></li>
          </ul>
        </div>
        <!-- Sale -->
        <button class=" flex justify-between w-full py-[10px]">
          <a class="text-[24px] ">Sale</a>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 accordions-btn-drop">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>             
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">Extra 25% Off Select Styles</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">All Sale</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Shoes</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Clothing</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Accessories & Equipment</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Men</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Women</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Sale Kids</a></li>
          </ul>
        </div>
        <!-- Jordan -->
        <button class=" flex justify-between w-full py-[10px]">
          <a class="text-[24px] ">Jordan</a>
          <!-- arrow icon -->
          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 accordions-btn-drop">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
          </svg>             
        </button>
        <div class="accordions-dropdown-menu w-full max-h-[0px] overflow-hidden duration-500">
          <ul>
            <li class="text-[#707072] hover:text-black"><a href="">News Arrivals</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Featured</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Collection</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Men</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Women</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Kids</a></li>
            <li class="text-[#707072] hover:text-black"><a href="">Accessories</a></li>
          </ul>
        </div>
      </div>
      <ul class="pt-3">
        <li class="py-2">
          <a class="flex gap-3 items-center" href="">
            <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32"><path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path></svg>
            <span>Jordan</span>
          </a>
        </li>
        <li class="py-2">
          <a class="flex gap-3 items-center" href="">
            <svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33"><path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path></svg>
            <span>Converse</span>
          </a>
        </li>
      </ul>
      <!-- paragraph -->
      <div class="mt-[50px] text-[18px]">
        <p class="text-[#707072]">Become a Nike Member for the best products inspiration and stories in sport. 
          <span class="text-black"><a href="">Learn more</a></span></p>
      </div>
      <!-- join us and sign up -->
      <div class="flex gap-3 pt-6">
        <div class="text-white bg-black flex justify-center items-center px-4 py-2 rounded-full hover:opacity-60">
          <a href="">Join Us</a>
        </div>
        <div class="text-black border flex justify-center items-center px-4 py-2 rounded-full hover:border-black">
          <a href="">Sign Up</a>
        </div>
      </div>
      <!-- icon below -->
      <div class="mt-[40px] flex flex-col gap-3">
        <a class="flex gap-4" href="">
          <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
          <span>Bag</span>
        </a>
        <a class="flex gap-4" href="">
          <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path></svg>
          <span>Orders</span>
        </a>
        <a class="flex gap-4" href="">
          <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
          <span>Find a Store</span>
        </a>
        <a class="flex gap-4" href="">
          <svg aria-hidden="true" class="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path></svg>
          <span>Help</span>
        </a>
      </div>
    </div>
  </div>
      `;
  }
}
customElements.define("hamburger-section", HamburgerSection);

// sidebar in product card page
class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="max-w-full lg:w-[260px] max-h-[1128px] bg-white lg:pl-12 overflow-y-auto sticky left-0 top-[60px] shrink-0 no-scrollbar">                
    <nav class="flex lg:flex-col ">
        <!-- 1st section of sidebar -->
        <div class="pb-5 mb-5 border-b hidden lg:block">
            <div class="flex gap-3 items-center">
                <div class="pt-2">Pick Up Today </div>
                <!-- switch button -->
                <label class="inline-flex items-center cursor-pointer ml-5">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
            </div>
        </div>
        <!-- 2nd section of sidebar -->
        <div class="lg:pb-10 lg:border-b">
            <ul class="flex gap-4 overflow-x-auto whitespace-nowrap lg:flex-col lg:gap-1 ">
                <li class="px-4"><a href="">Shoes</a></li>
                <li class="px-4"><a href="">Tops & T-Shirts</a></li>
                <li class="px-4"><a href="">Shorts</a></li>
                <li class="px-4"><a href="">Hoodies & Pullovers</a></li>
                <li class="px-4"><a href="">Jackets & Vests</a></li>
                <li class="px-4"><a href="">Pants & Tights</a></li>
                <li class="px-4"><a href="">Swimming</a></li>
                <li class="px-4"><a href="">Socks</a></li>
                <li class="px-4"><a href="">Accessories & <br> Equipment</a></li>
            </ul>
        </div>
        <!-- 3rd section of sidebar -->
        <div class="hidden lg:block">
            <div class=" border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Sales & Offers</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Mother's Day Sale: <br> Extra 25% Off</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Price in Bag</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Sale</span>
                    </button>
                </div>
            </div>
            <div class="border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Gender</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px]"></div>
                        <span class="hover:opacity-60">Men</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Women</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Unisex</span>
                    </button>
                </div>
            </div>
            <div  class="border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Kids</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Boys</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Girls</span>
                    </button>
                </div>
            </div>
            <div class=" border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Color</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="grid grid-cols-3 text-[14px] gap-1 max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-black rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Black</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-blue-400 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Blue</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-[#825D41] rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Brown</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-green-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Green</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-gray-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Grey</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-cyan-400 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Cyan</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-orange-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Orange</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-pink-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Pink</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-purple-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Purple</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-red-500 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Red</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-white rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">White</span>
                    </a>
                    <a class="flex flex-col whitespace-nowrap break-words my-1 mx-[2px] ">
                        <div class="w-[20px] h-[20px] bg-yellow-400 rounded-full mt-[2px] ml-2"></div>
                        <span class="hover:opacity-60">Yellow</span>
                    </a>
                    
                </div>
            </div>
            <div class="border-b cursor-pointer">
                <div id="accordions-btn"  class="flex justify-between py-3">
                    <h4>Shop By Price</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">$0 - $25</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">$25 - $50</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">$50 - $100</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">$100 - $150</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px] mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>                                         
                        <span class="hover:opacity-60">More</span>
                    </button>
                </div>
            </div>
            <div class="border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Brand</h4>
                    <svg id="down-btn"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Nike Sportswear</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Jordan</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Nike By You</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Converse</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px] mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>                                         
                        <span class="hover:opacity-60">More</span>
                    </button>
                </div>
            </div>
            <div class=" border-b cursor-pointer">
                <div id="accordions-btn" class="flex justify-between py-3">
                    <h4>Sports & Activities</h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Life Style</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Running</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Training & Gym</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Basketball</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px] mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>                                         
                        <span class="hover:opacity-60">More</span>
                    </button>
                </div>
            </div>
            <div class=" border-b cursor-pointer">
                <div id="accordions-btn"  class="flex justify-between py-3">
                    <h4>Best For </h4>
                    <svg id="down-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>                                      
                </div>
                <div id="accordions-dropdown" class="max-h-[0px] overflow-hidden duration-700 ease-in-out">
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Wet Weather<br>Conditions</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Cold Weather</span>
                    </button>
                    <button class="flex whitespace-nowrap break-words my-1 mx-[2px]">
                        <div class="w-[18px] h-[18px] border rounded-[4px] mr-[6px] mt-[2px] "></div>
                        <span class="hover:opacity-60">Dry Weather<br>Conditons</span>
                    </button>
                </div>
            </div>
            
        </div>
    </nav>
    
</div>
<!-- 1st section for mobile responsive -->
<div class="py-[14px] px-5 mb-4 border-y lg:hidden block ">
    <div class="flex justify-between">
        <div class="pt-2">Pick Up Today </div>
        <!-- switch button -->
        <label class="inline-flex items-center cursor-pointer ml-5">
            <input type="checkbox" value="" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    </div>
</div>
<!-- fiter section for responsive -->
<div class="flex justify-between items-center mx-5 mb-3 lg:hidden">
    <span class="text-[#7E7E80]">1964 Results</span>
    <button class="inline-flex border px-5 py-[6px] rounded-full hover:border-black">
            <span>
                Filter
            </span>
            <svg aria-hidden="true" class="icon-filter-ds " focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>                 
    </button>
</div>
    `;
  }
}
customElements.define("sidebar-section", Sidebar);
