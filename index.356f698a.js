!function(e,t,r,n,a){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[n]&&i[n],o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!o[t]){if(!e[t]){var a="function"==typeof i[n]&&i[n];if(!r&&a)return a(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}p.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},p.cache={};var u=o[t]=new c.Module(t);e[t][0].call(u.exports,p,u,u.exports,i)}return o[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=o,c.parent=s,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return i[n]}}),i[n]=c;for(var d=0;d<t.length;d++)c(t[d]);if(r){var u=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({dxwd1:[function(e,t,r,n){e("fa4c48b4ee484133").register(e("776a560387debc10").getBundleURL("hwbR1"),JSON.parse('["hwbR1","index.356f698a.js","6pYmK","icons.c5b0f01c.svg"]'))},{fa4c48b4ee484133:"fyJL2","776a560387debc10":"c7Tr5"}],fyJL2:[function(e,t,r,n){var a=new Map;t.exports.register=function(e,t){for(var r=0;r<t.length-1;r+=2)a.set(t[r],{baseUrl:e,path:t[r+1]})},t.exports.resolve=function(e){var t=a.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}},{}],c7Tr5:[function(e,t,r,n){var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r.getBundleURL=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t},r.getBaseURL=i,r.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],"2nzDi":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("./model.js"),s=e("./config.js"),o=e("./views/recipeView.js"),l=a.interopDefault(o),c=e("./views/searchView.js"),d=a.interopDefault(c),u=e("./views/resultsView.js"),p=a.interopDefault(u),f=e("./views/paginationView.js"),h=a.interopDefault(f),m=e("./views/bookmarksView.js"),g=a.interopDefault(m),v=e("./views/addRecipeView.js"),_=a.interopDefault(v);async function k(){try{let e=window.location.hash.slice(1);if(!e)return;(0,l.default).renderSpinner(),(0,p.default).update(i.getSearchResultsPage()),(0,g.default).update(i.state.bookmarks),await i.loadRecipe(e),(0,l.default).render(i.state.recipe)}catch(e){console.error(e),(0,l.default).renderError()}}async function w(){try{let e=(0,d.default).getQuery();if(!e)return;(0,p.default).renderSpinner(),await i.loadSearchResults(e),(0,p.default).render(i.getSearchResultsPage()),(0,h.default).render(i.state.search)}catch(e){console.error(e),(0,p.default).renderError()}}async function b(e){try{(0,_.default).renderSpinner(),await i.uploadRecipe(e),(0,l.default).render(i.state.recipe),(0,_.default).renderMessage(),setTimeout(()=>{(0,_.default).toggleWindow()},1e3*s.MODAL_CLOSE_TIME_SECONDS),(0,g.default).render(i.state.bookmarks),window.history.pushState(null,"",`${i.state.recipe.id}`)}catch(e){console.error(e),(0,_.default).renderError(e.message)}}i.loadBookmarksFromLocalStorage(),(0,g.default).addHandlerRender(function(){(0,g.default).render(i.state.bookmarks)}),(0,l.default).addHandlerRender(k),(0,l.default).addHandlerUpdateServings(function(e){i.updateServings(e),(0,l.default).update(i.state.recipe)}),(0,l.default).addHandlerAddBookmark(function(){i.state.recipe.bookmarked?i.removeBookmark(i.state.recipe.id):i.addBookmark(i.state.recipe),(0,l.default).update(i.state.recipe),(0,g.default).render(i.state.bookmarks)}),(0,d.default).addHandlerSearch(w),(0,h.default).addHandlerClick(function(e){(0,p.default).render(i.getSearchResultsPage(e)),(0,h.default).render(i.state.search)}),(0,_.default).addHandlerUpload(b)},{"./model.js":"5XrL7","./views/recipeView.js":"gcMxR","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./views/searchView.js":"6L6eH","./views/resultsView.js":"65N7q","./views/paginationView.js":"3vGkl","./views/bookmarksView.js":"9IfoN","./config.js":"cTPit","./views/addRecipeView.js":"3CEDh"}],"5XrL7":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"state",()=>o),a.export(r,"loadRecipe",()=>c),a.export(r,"loadSearchResults",()=>d),a.export(r,"getSearchResultsPage",()=>u),a.export(r,"updateServings",()=>p),a.export(r,"addBookmark",()=>f),a.export(r,"removeBookmark",()=>h),a.export(r,"loadBookmarksFromLocalStorage",()=>g),a.export(r,"uploadRecipe",()=>v);var i=e("./config"),s=e("./helpers");let o={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:i.RESULTS_PER_PAGE},bookmarks:[]};function l(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}}async function c(e){try{let t=await (0,s.AJAX)(`${i.API_URL}${e}?key=${i.API_KEY}`);o.recipe=l(t),o.bookmarks.some(e=>e.id===o.recipe.id)?o.recipe.bookmarked=!0:o.recipe.bookmarked=!1}catch(e){throw e}}async function d(e){try{o.search.query=e;let t=await (0,s.AJAX)(`${i.API_URL}?search=${e}&key=${i.API_KEY}`);o.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),o.search.page=1}catch(e){throw e}}function u(e=o.search.page){o.search.page=e;let t=(e-1)*o.search.resultsPerPage,r=e*o.search.resultsPerPage;return o.search.results.slice(t,r)}function p(e){o.recipe.ingredients.forEach(t=>{t.quantity*=e/o.recipe.servings}),o.recipe.servings=e}function f(e){o.bookmarks.push(e),e.id===o.recipe.id&&(o.recipe.bookmarked=!0),m()}function h(e){let t=o.bookmarks.findIndex(t=>t.id===e);o.bookmarks.splice(t,1),e===o.recipe.id&&(o.recipe.bookmarked=!1),m()}function m(){localStorage.setItem("bookmarks",JSON.stringify(o.bookmarks))}function g(){let e=localStorage.getItem("bookmarks");e&&(o.bookmarks=JSON.parse(e))}async function v(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error(`Wrong ingredient format.<br>Please use the correct format \u{1F609}`);let[r,n,a]=t;return{quantity:r?+r:null,unit:n,description:a}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await (0,s.AJAX)(`${i.API_URL}?key=${i.API_KEY}`,r);o.recipe=l(n),f(o.recipe),m()}catch(e){throw e}}},{"./config":"cTPit","./helpers":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cTPit:[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"API_URL",()=>i),a.export(r,"API_KEY",()=>s),a.export(r,"TIMEOUT_SECONDS",()=>o),a.export(r,"RESULTS_PER_PAGE",()=>l),a.export(r,"MODAL_CLOSE_TIME_SECONDS",()=>c);let i="https://forkify-api.herokuapp.com/api/v2/recipes/",s="3c169aa6-cfc3-410d-bd34-cc8c1c9eede5",o=15,l=10,c=2},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r,n){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],rOFoc:[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"AJAX",()=>s);var i=e("./config");async function s(e,t){try{var r;let n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),a=await Promise.race([n,(r=i.TIMEOUT_SECONDS,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} seconds`))},1e3*r)}))]),s=await a.json();if(!a.ok)throw Error(`${a.status}: ${s.message}`);return s}catch(e){throw e}}},{"./config":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg"),l=a.interopDefault(o),c=e("fractional");class d extends s.default{_parentElement=document.querySelector(".recipe");_errorMessage=`Could not find the recipe.<br>Please try another one \u{1F609}`;_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${l.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${l.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${l.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${l.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${l.default}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${l.default}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this.#e).join("")}
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${l.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}#e(e){return`
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${l.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new(0,c.Fraction)(e.quantity).toString():""}</div>
      <div class="recipe__description">            
      <span class="recipe__unit">${e.unit??""} </span>${e.description}
      </div>
    </li>
      `}}r.default=new d},{fractional:"ioWMr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB"}],ioWMr:[function(e,t,r,n){var a,i;(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,a=num.split(" ");if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(a=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(a(this.denominator)){var e=i(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(a(this.numerator)){var e=i(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},t.exports.Fraction=Fraction},{}],c7kA3:[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("url:../../img/icons.svg"),s=a.interopDefault(i);r.default=class{_data;render(e,t=!0){if(!e||Array.isArray(e)&&!e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${s.default}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
          <div>
              <svg>
                  <use href="${s.default}#icon-alert-triangle"></use>
              </svg>
          </div>
              <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
          <div>
              <svg>
                  <use href="${s.default}#icon-smile"></use>
              </svg>
          </div>
              <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}},{"url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dqtfB:[function(e,t,r,n){t.exports=e("699a3a88a91c50ee").getBundleURL("hwbR1")+"icons.c5b0f01c.svg"},{"699a3a88a91c50ee":"c7Tr5"}],"6L6eH":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i);class o extends s.default{_parentElement=document.querySelector(".search");_errorMessage=`Could not find the recipe.<br>Please try another one \u{1F609}`;_message="";getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this.#t(),e}#t(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}r.default=new o},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"65N7q":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("./previewView.js"),l=a.interopDefault(o);class c extends s.default{_parentElement=document.querySelector(".results");_errorMessage=`No recipes found for your query. Please try again \u{1F609}`;_message="";_generateMarkup(){return this._data.map(e=>(0,l.default).render(e,!1)).join("")}}r.default=new c},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./previewView.js":"edsmS"}],edsmS:[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg"),l=a.interopDefault(o);class c extends s.default{_generateMarkup(){let e=window.location.hash.slice(1);return`             
      <li class="preview">
        <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${l.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
`}}r.default=new c},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","url:../../img/icons.svg":"dqtfB"}],"3vGkl":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg"),l=a.interopDefault(o);class c extends s.default{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t?"":1===e&&t>1?this.#r(!0):e===t?this.#r(!1):this.#r(!1)+this.#r(!0)}#r(e){let t=this._data.page,r=e?t+1:t-1;return`
        <button data-goto="${r}" class="btn--inline pagination__btn--${e?"next":"prev"}">
            <svg class="search__icon">
                <use href="${l.default}#icon-arrow-${e?"right":"left"}"></use>
            </svg>
            <span>Page ${r}</span>
        </button>
        `}}r.default=new c},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9IfoN":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("./previewView.js"),l=a.interopDefault(o);class c extends s.default{_parentElement=document.querySelector(".bookmarks__list");_errorMessage=`No bookmarks yet. Find a nice recipe and bookmark it \u{1F609}`;_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>(0,l.default).render(e,!1)).join("")}}r.default=new c},{"./view.js":"c7kA3","./previewView.js":"edsmS","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3CEDh":[function(e,t,r,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg");a.interopDefault(o);class l extends s.default{_parentElement=document.querySelector(".upload");_message="Recipe was succesfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_buttonOpen=document.querySelector(".nav__btn--add-recipe");_buttonClose=document.querySelector(".btn--close-modal");constructor(){super(),this.#n(),this.#a()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}#n(){this._buttonOpen.addEventListener("click",this.toggleWindow.bind(this))}#a(){this._buttonClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}r.default=new l},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["dxwd1","2nzDi"],"2nzDi","parcelRequire94c2");
//# sourceMappingURL=index.356f698a.js.map
