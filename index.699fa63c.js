!function(e,r,t,n,a){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[n]&&i[n],o=s.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(r,t){if(!o[r]){if(!e[r]){var a="function"==typeof i[n]&&i[n];if(!t&&a)return a(r,!0);if(s)return s(r,!0);if(c&&"string"==typeof r)return c(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}p.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},p.cache={};var d=o[r]=new l.Module(r);e[r][0].call(d.exports,p,d,d.exports,i)}return o[r].exports;function p(e){var r=p.resolve(e);return!1===r?{}:l(r)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=o,l.parent=s,l.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i[n]}}),i[n]=l;for(var u=0;u<r.length;u++)l(r[u]);if(t){var d=l(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({dxwd1:[function(e,r,t,n){e("fa4c48b4ee484133").register(e("776a560387debc10").getBundleURL("hwbR1"),JSON.parse('["hwbR1","index.699fa63c.js","6pYmK","icons.c5b0f01c.svg"]'))},{fa4c48b4ee484133:"fyJL2","776a560387debc10":"c7Tr5"}],fyJL2:[function(e,r,t,n){var a=new Map;r.exports.register=function(e,r){for(var t=0;t<r.length-1;t+=2)a.set(r[t],{baseUrl:e,path:r[t+1]})},r.exports.resolve=function(e){var r=a.get(e);if(null==r)throw Error("Could not resolve bundle with id "+e);return new URL(r.path,r.baseUrl).toString()}},{}],c7Tr5:[function(e,r,t,n){var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t.getBundleURL=function(e){var r=a[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=r),r},t.getBaseURL=i,t.getOrigin=function(e){var r=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!r)throw Error("Origin not found");return r[0]}},{}],"2nzDi":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("./model.js"),s=e("./views/recipeView.js"),o=a.interopDefault(s),c=e("./views/searchView.js"),l=a.interopDefault(c),u=e("./views/resultsView.js"),d=a.interopDefault(u),p=e("./views/paginationView.js"),f=a.interopDefault(p),h=e("./views/bookmarksView.js"),m=a.interopDefault(h);async function g(){try{let e=window.location.hash.slice(1);if(!e)return;(0,o.default).renderSpinner(),(0,d.default).update(i.getSearchResultsPage()),(0,m.default).update(i.state.bookmarks),await i.loadRecipe(e),(0,o.default).render(i.state.recipe)}catch(e){console.error(e),(0,o.default).renderError()}}async function v(){try{let e=(0,l.default).getQuery();if(!e)return;(0,d.default).renderSpinner(),await i.loadSearchResults(e),(0,d.default).render(i.getSearchResultsPage()),(0,f.default).render(i.state.search)}catch(e){console.error(e),(0,d.default).renderError()}}i.loadBookmarksFromLocalStorage(),(0,m.default).addHandlerRender(function(){(0,m.default).render(i.state.bookmarks)}),(0,o.default).addHandlerRender(g),(0,o.default).addHandlerUpdateServings(function(e){i.updateServings(e),(0,o.default).update(i.state.recipe)}),(0,o.default).addHandlerAddBookmark(function(){i.state.recipe.bookmarked?i.removeBookmark(i.state.recipe.id):i.addBookmark(i.state.recipe),(0,o.default).update(i.state.recipe),(0,m.default).render(i.state.bookmarks)}),(0,l.default).addHandlerSearch(v),(0,f.default).addHandlerClick(function(e){(0,d.default).render(i.getSearchResultsPage(e)),(0,f.default).render(i.state.search)})},{"./model.js":"5XrL7","./views/recipeView.js":"gcMxR","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./views/searchView.js":"6L6eH","./views/resultsView.js":"65N7q","./views/paginationView.js":"3vGkl","./views/bookmarksView.js":"9IfoN"}],"5XrL7":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t),a.export(t,"state",()=>o),a.export(t,"loadRecipe",()=>c),a.export(t,"loadSearchResults",()=>l),a.export(t,"getSearchResultsPage",()=>u),a.export(t,"updateServings",()=>d),a.export(t,"addBookmark",()=>p),a.export(t,"removeBookmark",()=>f),a.export(t,"loadBookmarksFromLocalStorage",()=>m);var i=e("./config"),s=e("./helpers");let o={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:i.RESULTS_PER_PAGE},bookmarks:[]};async function c(e){try{let{recipe:r}=(await (0,s.getJSON)(`${i.API_URL}${e}`)).data;o.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},o.bookmarks.some(e=>e.id===o.recipe.id)?o.recipe.bookmarked=!0:o.recipe.bookmarked=!1}catch(e){throw e}}async function l(e){try{o.search.query=e;let r=await (0,s.getJSON)(`${i.API_URL}?search=${e}`);o.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),o.search.page=1}catch(e){throw e}}function u(e=o.search.page){o.search.page=e;let r=(e-1)*o.search.resultsPerPage,t=e*o.search.resultsPerPage;return o.search.results.slice(r,t)}function d(e){o.recipe.ingredients.forEach(r=>{r.quantity*=e/o.recipe.servings}),o.recipe.servings=e}function p(e){o.bookmarks.push(e),e.id===o.recipe.id&&(o.recipe.bookmarked=!0),h()}function f(e){let r=o.bookmarks.findIndex(r=>r.id===e);o.bookmarks.splice(r,1),e===o.recipe.id&&(o.recipe.bookmarked=!1),h()}function h(){localStorage.setItem("bookmarks",JSON.stringify(o.bookmarks))}function m(){let e=localStorage.getItem("bookmarks");e&&(o.bookmarks=JSON.parse(e))}},{"./config":"cTPit","./helpers":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cTPit:[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t),a.export(t,"API_URL",()=>i),a.export(t,"TIMEOUT_SECONDS",()=>s),a.export(t,"RESULTS_PER_PAGE",()=>o);let i="https://forkify-api.herokuapp.com/api/v2/recipes/",s=15,o=10},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,r,t,n){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],rOFoc:[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t),a.export(t,"getJSON",()=>s);var i=e("./config");async function s(e){try{var r;let t=await Promise.race([fetch(e),(r=i.TIMEOUT_SECONDS,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} seconds`))},1e3*r)}))]),n=await t.json();if(!t.ok)throw Error(`${t.status}: ${n.message}`);return n}catch(e){throw e}}},{"./config":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg"),c=a.interopDefault(o),l=e("fractional");class u extends s.default{_parentElement=document.querySelector(".recipe");_errorMessage=`Could not find the recipe.<br>Please try another one \u{1F609}`;_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",r=>{let t=r.target.closest(".btn--update-servings");if(!t)return;let n=+t.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",r=>{r.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${c.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${c.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${c.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--update-servings">
            <svg>
              <use href="${c.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${c.default}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
          <use href="${c.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}#e(e){return`
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${c.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new(0,l.Fraction)(e.quantity).toString():""}</div>
      <div class="recipe__description">            
      <span class="recipe__unit">${e.unit??""} </span>${e.description}
      </div>
    </li>
      `}}t.default=new u},{fractional:"ioWMr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB"}],ioWMr:[function(e,r,t,n){var a,i;(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,a=num.split(" ");if(a[0]&&(t=a[0]),a[1]&&(n=a[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var i=t.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(a=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},i=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(a(this.denominator)){var e=i(this.denominator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),this.numerator*=r}if(a(this.numerator)){var e=i(this.numerator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),this.denominator*=r}var t=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=t,this.denominator/=t,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(r);return(n.forEach(function(e){var r=a.indexOf(e);r>=0&&(t.push(e),a.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},r.exports.Fraction=Fraction},{}],c7kA3:[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("url:../../img/icons.svg"),s=a.interopDefault(i);t.default=class{_data;render(e,r=!0){if(!e||Array.isArray(e)&&!e.length)return this.renderError();this._data=e;let t=this._generateMarkup();if(!r)return t;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let r=this._generateMarkup(),t=Array.from(document.createRange().createContextualFragment(r).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));t.forEach((e,r)=>{let t=n[r];e.isEqualNode(t)||e.firstChild?.nodeValue.trim()===""||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${s.default}#icon-loader"></use>
        </svg>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
      <div class="error">
          <div>
              <svg>
                  <use href="${s.default}#icon-alert-triangle"></use>
              </svg>
          </div>
              <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
      <div class="message">
          <div>
              <svg>
                  <use href="${s.default}#icon-smile"></use>
              </svg>
          </div>
              <p>${e}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}},{"url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dqtfB:[function(e,r,t,n){r.exports=e("699a3a88a91c50ee").getBundleURL("hwbR1")+"icons.c5b0f01c.svg"},{"699a3a88a91c50ee":"c7Tr5"}],"6L6eH":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i);class o extends s.default{_parentElement=document.querySelector(".search");_errorMessage=`Could not find the recipe.<br>Please try another one \u{1F609}`;_message="";getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this.#r(),e}#r(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",r=>{r.preventDefault(),e()})}}t.default=new o},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"65N7q":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i),o=e("./previewView.js"),c=a.interopDefault(o);class l extends s.default{_parentElement=document.querySelector(".results");_errorMessage=`No recipes found for your query. Please try again \u{1F609}`;_message="";_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}t.default=new l},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./previewView.js":"edsmS"}],edsmS:[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i);class o extends s.default{_generateMarkup(){let e=window.location.hash.slice(1);return`             
    <li class="preview">
        <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
        </a>
      </li>
`}}t.default=new o},{"./view.js":"c7kA3","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3vGkl":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i),o=e("url:../../img/icons.svg"),c=a.interopDefault(o);class l extends s.default{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",r=>{let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===r?"":1===e&&r>1?this.#t(!0):e===r?this.#t(!1):this.#t(!1)+this.#t(!0)}#t(e){let r=this._data.page,t=e?r+1:r-1;return`
        <button data-goto="${t}" class="btn--inline pagination__btn--${e?"next":"prev"}">
            <svg class="search__icon">
                <use href="${c.default}#icon-arrow-${e?"right":"left"}"></use>
            </svg>
            <span>Page ${t}</span>
        </button>
        `}}t.default=new l},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9IfoN":[function(e,r,t,n){var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(t);var i=e("./view.js"),s=a.interopDefault(i),o=e("./previewView.js"),c=a.interopDefault(o);class l extends s.default{_parentElement=document.querySelector(".bookmarks__list");_errorMessage=`No bookmarks yet. Find a nice recipe and bookmark it \u{1F609}`;_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>(0,c.default).render(e,!1)).join("")}}t.default=new l},{"./view.js":"c7kA3","./previewView.js":"edsmS","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["dxwd1","2nzDi"],"2nzDi","parcelRequire94c2");
//# sourceMappingURL=index.699fa63c.js.map
