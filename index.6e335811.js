!function(e,r,t,n,i){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof a[n]&&a[n],o=s.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(r,t){if(!o[r]){if(!e[r]){var i="function"==typeof a[n]&&a[n];if(!t&&i)return i(r,!0);if(s)return s(r,!0);if(c&&"string"==typeof r)return c(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}p.resolve=function(t){var n=e[r][1][t];return null!=n?n:t},p.cache={};var d=o[r]=new l.Module(r);e[r][0].call(d.exports,p,d,d.exports,a)}return o[r].exports;function p(e){var r=p.resolve(e);return!1===r?{}:l(r)}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=o,l.parent=s,l.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return a[n]}}),a[n]=l;for(var u=0;u<r.length;u++)l(r[u]);if(t){var d=l(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define(function(){return d})}}({dxwd1:[function(e,r,t,n){e("fa4c48b4ee484133").register(e("776a560387debc10").getBundleURL("hwbR1"),JSON.parse('["hwbR1","index.6e335811.js","6pYmK","icons.c5b0f01c.svg"]'))},{fa4c48b4ee484133:"fyJL2","776a560387debc10":"c7Tr5"}],fyJL2:[function(e,r,t,n){var i=new Map;r.exports.register=function(e,r){for(var t=0;t<r.length-1;t+=2)i.set(r[t],{baseUrl:e,path:r[t+1]})},r.exports.resolve=function(e){var r=i.get(e);if(null==r)throw Error("Could not resolve bundle with id "+e);return new URL(r.path,r.baseUrl).toString()}},{}],c7Tr5:[function(e,r,t,n){var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t.getBundleURL=function(e){var r=i[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=r),r},t.getBaseURL=a,t.getOrigin=function(e){var r=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!r)throw Error("Origin not found");return r[0]}},{}],"2nzDi":[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js"),a=e("./model.js"),s=e("./views/recipeView.js"),o=i.interopDefault(s),c=e("./views/searchView.js"),l=i.interopDefault(c),u=e("./views/resultsView.js"),d=i.interopDefault(u),p=e("./views/paginationView.js"),f=i.interopDefault(p);async function h(){try{let e=window.location.hash.slice(1);if(!e)return;(0,o.default).renderSpinner(),await a.loadRecipe(e),(0,o.default).render(a.state.recipe)}catch(e){console.error(`${e} \u{1F480}`),(0,o.default).renderError()}}async function m(){try{let e=(0,l.default).getQuery();if(!e)return;(0,d.default).renderSpinner(),await a.loadSearchResults(e),(0,d.default).render(a.getSearchResultsPage()),(0,f.default).render(a.state.search)}catch(e){console.error(`${e} \u{1F480}`),(0,d.default).renderError()}}(0,o.default).addHandlerRender(h),(0,l.default).addHandlerSearch(m),(0,f.default).addHandlerClick(function(e){(0,d.default).render(a.getSearchResultsPage(e)),(0,f.default).render(a.state.search)})},{"./model.js":"5XrL7","./views/recipeView.js":"gcMxR","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./views/searchView.js":"6L6eH","./views/resultsView.js":"65N7q","./views/paginationView.js":"3vGkl"}],"5XrL7":[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t),i.export(t,"state",()=>o),i.export(t,"loadRecipe",()=>c),i.export(t,"loadSearchResults",()=>l),i.export(t,"getSearchResultsPage",()=>u);var a=e("./config"),s=e("./helpers");let o={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:a.RESULTS_PER_PAGE}};async function c(e){try{let{recipe:r}=(await (0,s.getJSON)(`${a.API_URL}${e}`)).data;o.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients}}catch(e){throw e}}async function l(e){try{o.search.query=e;let r=await (0,s.getJSON)(`${a.API_URL}?search=${e}`);o.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}}function u(e=1){o.search.page=e;let r=(e-1)*o.search.resultsPerPage,t=e*o.search.resultsPerPage;return o.search.results.slice(r,t)}},{"./config":"cTPit","./helpers":"rOFoc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cTPit:[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t),i.export(t,"API_URL",()=>a),i.export(t,"TIMEOUT_SECONDS",()=>s),i.export(t,"RESULTS_PER_PAGE",()=>o);let a="https://forkify-api.herokuapp.com/api/v2/recipes/",s=15,o=10},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,r,t,n){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],rOFoc:[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t),i.export(t,"getJSON",()=>s);var a=e("./config");async function s(e){try{var r;let t=await Promise.race([fetch(e),(r=a.TIMEOUT_SECONDS,new Promise(function(e,t){setTimeout(function(){t(Error(`Request took too long! Timeout after ${r} seconds`))},1e3*r)}))]),n=await t.json();if(!t.ok)throw Error(`${t.status}: ${n.message}`);return n}catch(e){throw e}}},{"./config":"cTPit","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gcMxR:[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t);var a=e("./view.js"),s=i.interopDefault(a),o=e("url:../../img/icons.svg"),c=i.interopDefault(o),l=e("fractional");class u extends s.default{_parentElement=document.querySelector(".recipe");_errorMessage="Could not find the recipe.<br>Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
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
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${c.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${c.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${c.default}#icon-bookmark-fill"></use>
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
      <div class="recipe__description">            <span class="recipe__unit">${e.unit??""}</span>${e.description}
      </div>
    </li>
      `}}t.default=new u},{fractional:"ioWMr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151","./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB"}],ioWMr:[function(e,r,t,n){var i,a;(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(n=i[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var a=t.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(i=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},a=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(i(this.denominator)){var e=a(this.denominator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*r),this.numerator*=r}if(i(this.numerator)){var e=a(this.numerator,9),r=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*r),this.denominator*=r}var t=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=t,this.denominator/=t,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(r);return(n.forEach(function(e){var r=i.indexOf(e);r>=0&&(t.push(e),i.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},r.exports.Fraction=Fraction},{}],c7kA3:[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t);var a=e("url:../../img/icons.svg"),s=i.interopDefault(a);t.default=class{_data;render(e){if(!e||Array.isArray(e)&&!e.length)return this.renderError();this._data=e,this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
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
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}},{"url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],dqtfB:[function(e,r,t,n){r.exports=e("699a3a88a91c50ee").getBundleURL("hwbR1")+"icons.c5b0f01c.svg"},{"699a3a88a91c50ee":"c7Tr5"}],"6L6eH":[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t);var a=e("./view.js"),s=i.interopDefault(a),o=e("url:../../img/icons.svg");i.interopDefault(o);class c extends s.default{_parentElement=document.querySelector(".search");_errorMessage="Could not find the recipe.<br>Please try another one!";_message="";getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this.#r(),e}#r(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",r=>{r.preventDefault(),e()})}}t.default=new c},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"65N7q":[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t);var a=e("./view.js"),s=i.interopDefault(a),o=e("url:../../img/icons.svg");i.interopDefault(o);class c extends s.default{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query.<br>Please try again!";_message="";_generateMarkup(){return this._data.map(this.#t).join("")}#t(e){return`             
    <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
`}}t.default=new c},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"3vGkl":[function(e,r,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(t);var a=e("./view.js"),s=i.interopDefault(a),o=e("url:../../img/icons.svg"),c=i.interopDefault(o);class l extends s.default{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",r=>{let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let e=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===r?"":1===e&&r>1?this.#n(!0):e===r?this.#n(!1):this.#n(!1)+this.#n(!0)}#n(e){let r=this._data.page,t=e?r+1:r-1;return`
        <button data-goto="${t}" class="btn--inline pagination__btn--${e?"next":"prev"}">
            <svg class="search__icon">
                <use href="${c.default}#icon-arrow-${e?"right":"left"}"></use>
            </svg>
            <span>Page ${t}</span>
        </button>
        `}}t.default=new l},{"./view.js":"c7kA3","url:../../img/icons.svg":"dqtfB","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["dxwd1","2nzDi"],"2nzDi","parcelRequire94c2");
//# sourceMappingURL=index.6e335811.js.map
