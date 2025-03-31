var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _parentElement, _props, _SearchBar_instances, render_fn, addEventListeners_fn, disableForm_fn, enableForm_fn, _parentElement2, _props2, _Header_instances, render_fn2, renderSearchBar_fn, addEventListeners_fn2, _message, _RateStorage_static, getAllRates_fn, _parentElement3, _movieId, _MyRate_instances, loadRate_fn, render_fn3, addEventListeners_fn3, _parentElement4, _Modal_instances, fetchAndRenderModal_fn, renderInitial_fn, render_fn4, renderStarRate_fn, posterImage_fn, addEventListeners_fn4, closeModal_fn, _keyDownHandler, _parentElement5, _movie, _MovieItem_instances, render_fn5, posterImage_fn2, addEventListeners_fn5, _parentElement6, _movies, _MovieList_instances, render_fn6, _movie2, _parentElement7, _page, _isLoading, _PopularMovieBoard_instances, renderInitialLayout_fn, fetchAndRenderMovies_fn, renderTopRatedMovie_fn, renderMovies_fn, movieData_fn, loadMoreMovies_fn, _handleScroll, addEventListeners_fn6, _parentElement8, _props3, _page2, _isLoading2, _SearchMovieBoard_instances, renderInitialLayout_fn2, fetchAndRenderMovies_fn2, renderMovies_fn2, movieData_fn2, loadMoreMovies_fn2, _handleScroll2, renderNoResult_fn, addEventListeners_fn7, _currentBoard, _App_instances, renderHeader_fn, renderSearchResult_fn, renderPopularMovies_fn, renderFooter_fn;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const Footer = () => {
  return (
    /*html*/
    `
    <footer class="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p><img src="./images/woowacourse_logo.png" alt="woowacourse_logo" width="180" /></p>
      </footer>
    `
  );
};
const isHTMLElement = (target) => {
  return target instanceof HTMLElement;
};
class SearchBar {
  constructor(parentElement, props) {
    __privateAdd(this, _SearchBar_instances);
    __privateAdd(this, _parentElement);
    __privateAdd(this, _props);
    __privateSet(this, _parentElement, parentElement);
    __privateSet(this, _props, props);
    __privateMethod(this, _SearchBar_instances, render_fn).call(this);
    __privateMethod(this, _SearchBar_instances, addEventListeners_fn).call(this);
  }
}
_parentElement = new WeakMap();
_props = new WeakMap();
_SearchBar_instances = new WeakSet();
render_fn = function() {
  __privateGet(this, _parentElement).innerHTML = `
    <form class="search-bar">
        <input placeholder="검색어를 입력하세요"/>
        <button class="search-button" type="submit">
          <img src="./images/search_button.png" alt="search-button"/>
        </button>
    </form >
  `;
};
addEventListeners_fn = function() {
  const searchForm = document.querySelector("form.search-bar");
  searchForm == null ? void 0 : searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputElement = searchForm.querySelector("input");
    const params = inputElement == null ? void 0 : inputElement.value.trim();
    if (!params) return;
    __privateMethod(this, _SearchBar_instances, disableForm_fn).call(this);
    __privateGet(this, _props).onSearchSubmitted(params);
    __privateMethod(this, _SearchBar_instances, enableForm_fn).call(this);
  });
};
disableForm_fn = function() {
  const moreButton = document.querySelector(".search-button");
  const inputElement = document.querySelector("input");
  if (isHTMLElement(moreButton)) moreButton.setAttribute("disabled", "true");
  if (isHTMLElement(inputElement))
    inputElement.setAttribute("disabled", "true");
};
enableForm_fn = function() {
  const moreButton = document.querySelector(".search-button");
  const inputElement = document.querySelector("input");
  if (isHTMLElement(moreButton)) moreButton.removeAttribute("disabled");
  if (isHTMLElement(inputElement)) inputElement.removeAttribute("disabled");
};
class Header {
  constructor(parentElement, props) {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _parentElement2);
    __privateAdd(this, _props2);
    __privateSet(this, _parentElement2, parentElement);
    __privateSet(this, _props2, props);
    __privateMethod(this, _Header_instances, render_fn2).call(this);
    __privateMethod(this, _Header_instances, renderSearchBar_fn).call(this);
    __privateMethod(this, _Header_instances, addEventListeners_fn2).call(this);
  }
}
_parentElement2 = new WeakMap();
_props2 = new WeakMap();
_Header_instances = new WeakSet();
render_fn2 = function() {
  __privateGet(this, _parentElement2).innerHTML = /*html*/
  `
        <button class="logo">
          <h1>
              <img src="./images/logo.png" alt="MovieList" />
          </h1>
        </button>
        <div class="search-bar-container"></div>
        <div class="header-dummy" style=""></div>
    `;
};
renderSearchBar_fn = function() {
  const $searchBar = document.querySelector(".search-bar-container");
  if (isHTMLElement($searchBar))
    new SearchBar($searchBar, {
      onSearchSubmitted: (params) => __privateGet(this, _props2).onSearchSubmitted(params)
    });
};
addEventListeners_fn2 = function() {
  const $logo = document.querySelector(".logo");
  if (isHTMLElement($logo)) {
    $logo.addEventListener("click", () => __privateGet(this, _props2).onLogoClicked());
  }
};
class ApiClient {
  static async fetch({ url, options }) {
    const raw = await fetch(url, options);
    if (!raw.ok) {
      throw new Error(`HTTP error: ${raw.status}`);
    }
    const data = await raw.json();
    return data;
  }
}
class MovieApi {
  static async fetchSearchMovies(page, searchParams) {
    const data = await ApiClient.fetch({
      url: `${this.BASE_URL}/search/movie?query=${searchParams}&include_adult=false&language=ko-KR&page=${page}`,
      options: this.options
    });
    const movies = data.results;
    return { movies, total_pages: data.total_pages };
  }
  static async fetchPopularMovies(page) {
    const data = await ApiClient.fetch({
      url: `${this.BASE_URL}/movie/popular?language=ko-KR&page=${page}`,
      options: this.options
    });
    const movies = data.results;
    return { movies, total_pages: data.total_pages };
  }
  static async fetchMovieDetail(movieId) {
    const data = await ApiClient.fetch({
      url: `${this.BASE_URL}/movie/${movieId}?language=ko-KR`,
      options: this.options
    });
    return data;
  }
}
__publicField(MovieApi, "BASE_URL", "https://api.themoviedb.org/3");
__publicField(MovieApi, "options", {
  method: "GET",
  headers: {
    accept: "application",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTYzYTkyNzMzZTEwODVjOGE2ZmRjODRiZGI1ZmJjNCIsIm5iZiI6MTc0MjI3NTg3Ny45NDQsInN1YiI6IjY3ZDkwNTI1YWIyNTllMDNhN2M2YTJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hc9ub007PNxPdNSwS1doghQTFrfO8DItpLNnlaGQ2L0"}`
  }
});
class ErrorScreen {
  constructor(message) {
    __privateAdd(this, _message);
    __privateSet(this, _message, message);
  }
  render() {
    const $main = document.querySelector("main");
    if (!isHTMLElement($main)) return;
    $main.innerHTML = /*html*/
    `<div class="fallback-screen">
        <img src="./images/dizzy_planet.png" alt="dizzy planet">
        <p>${__privateGet(this, _message)}</p>
      </div>`;
  }
}
_message = new WeakMap();
class LocalStorage {
  static get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    localStorage.removeItem(key);
  }
}
const LOCALSTORAGE_KEY = "movie-review-app";
class RateStorage {
  static init() {
    const data = LocalStorage.get(LOCALSTORAGE_KEY);
    if (!data) {
      LocalStorage.set(LOCALSTORAGE_KEY, { rates: {} });
    }
  }
  static saveRate({ id, rate }) {
    const rates = __privateMethod(this, _RateStorage_static, getAllRates_fn).call(this);
    rates[id] = rate;
    LocalStorage.set(LOCALSTORAGE_KEY, { rates });
  }
  static getRate(id) {
    const rates = __privateMethod(this, _RateStorage_static, getAllRates_fn).call(this);
    return rates[id];
  }
}
_RateStorage_static = new WeakSet();
getAllRates_fn = function() {
  const data = LocalStorage.get(LOCALSTORAGE_KEY);
  return (data == null ? void 0 : data.rates) ?? {};
};
__privateAdd(RateStorage, _RateStorage_static);
class MyRate {
  constructor(parentElement, movieId) {
    __privateAdd(this, _MyRate_instances);
    __privateAdd(this, _parentElement3);
    __privateAdd(this, _movieId);
    __privateSet(this, _parentElement3, parentElement);
    __privateSet(this, _movieId, movieId);
    __privateMethod(this, _MyRate_instances, render_fn3).call(this);
    __privateMethod(this, _MyRate_instances, addEventListeners_fn3).call(this);
    __privateMethod(this, _MyRate_instances, loadRate_fn).call(this);
  }
}
_parentElement3 = new WeakMap();
_movieId = new WeakMap();
_MyRate_instances = new WeakSet();
loadRate_fn = function() {
  const rate = RateStorage.getRate(`${__privateGet(this, _movieId)}`);
  const $currentStar = __privateGet(this, _parentElement3).querySelector(`#star-${rate / 2}`);
  if (!isHTMLElement($currentStar)) return;
  $currentStar.click();
};
render_fn3 = function() {
  const totalStars = [1, 2, 3, 4, 5].map((id) => `<img src="./images/star_empty.png" id="star-${id}" />`).join("");
  __privateGet(this, _parentElement3).innerHTML = `
    <div>내 별점</div>
    <div class="star-container"> 
      <span class="stars">${totalStars}</span>
      <span class="rate-comment">   (0/10)</span>
    </div>
    `;
};
addEventListeners_fn3 = function() {
  __privateGet(this, _parentElement3).addEventListener("click", (event) => {
    const target = event.target;
    if (!target.matches("img")) return;
    RateStorage.saveRate({
      id: `${__privateGet(this, _movieId)}`,
      rate: Number(target.id.split("-")[1]) * 2
    });
    const ratedStars = [1, 2, 3, 4, 5].map((id) => {
      if (id <= Number(target.id.split("-")[1])) {
        return `<img src="./images/star_filled.png" id="star-${id}" />`;
      } else {
        return `<img src="./images/star_empty.png" id="star-${id}" />`;
      }
    }).join("");
    const $stars = __privateGet(this, _parentElement3).querySelector(".stars");
    const $rateComment = __privateGet(this, _parentElement3).querySelector(".rate-comment");
    if (!isHTMLElement($stars) || !isHTMLElement($rateComment)) return;
    $rateComment.textContent = getRateCommentById(Number(target.id.split("-")[1])) + ` (${Number(target.id.split("-")[1]) * 2}/10)`;
    $stars.innerHTML = ratedStars;
  });
};
const RATE_COMMENTS = [
  { rate: 2, starID: 1, comment: "최악이에요" },
  { rate: 4, starID: 2, comment: "별로예요" },
  { rate: 6, starID: 3, comment: "보통이에요" },
  { rate: 8, starID: 4, comment: "재미있어요" },
  { rate: 10, starID: 5, comment: "명작이에요" }
];
const getRateCommentById = (id) => {
  var _a;
  return ((_a = RATE_COMMENTS.find((comment) => comment.starID === id)) == null ? void 0 : _a.comment) ?? "";
};
class Skeleton {
  static get Modal() {
    return (
      /*html*/
      `
        <div class="modal">
          <button class="close-modal" id="closeModal">
            <img src="./images/modal_button_close.png" />
          </button>
          <div class="modal-container">
            <div class="modal-image">
              <div class="modal-image-skeleton"></div>
            </div>
            <div class="modal-description">
              <h2>로딩중...</h2>
              <p class="category">
                로딩중...
              </p>
              <p class="rate">
                <img src="./images/star_filled.png" class="star" /><span
                  >0.0</span>
              </p>
              <hr />
              <div class="my-rate">
                ${this.MyRate}
             </div>
              
              <hr />
              <p class="detail">
                로딩중...
              </p>
            </div>
          </div>
      </div>`
    );
  }
  static get MyRate() {
    return (
      /*html*/
      `
    <div>내 별점</div>
    <div class="star-container"> 
      <span class="stars">
        <img src="./images/star_empty.png" id="star-1" />
        <img src="./images/star_empty.png" id="star-2" />
        <img src="./images/star_empty.png" id="star-3" />
        <img src="./images/star_empty.png" id="star-4" />
        <img src="./images/star_empty.png" id="star-5" />
      </span>
      <span class="rate-comment">   (0/10)</span>
    </div>
    `
    );
  }
  static get MovieList() {
    return (
      /*html*/
      `
      ${Array.from({ length: 20 }).map(
        () => (
          /*html*/
          `
          <li class="skeleton-list">
            <div class="skeleton-item">
              <div class="skeleton-thumbnail"></div>
              <div class="skeleton-item-desc">
                <div class="skeleton-text"></div>
                <div class="skeleton-text" style="width: 50%"></div>
              </div>
            </div>
          </li>
        `
        )
      ).join("")}`
    );
  }
  static get TopRatedMovie() {
    return (
      /*html*/
      `
      <div class="background-container">
        <div class="overlay" aria-hidden="true"></div>
        <div class="top-rated-movie">
          <div class="rate">
            <img src="./images/star_empty.png" class="star" alt="star-empty"/>
            <span class="rate-value">0</span>
          </div>
          <div class="title">로딩중...</div>
          <button class="primary detail">자세히 보기</button>
        </div>
      </div>`
    );
  }
}
const _Modal = class _Modal {
  // #props;
  constructor(parentElement, id) {
    __privateAdd(this, _Modal_instances);
    __privateAdd(this, _parentElement4);
    __privateAdd(this, _keyDownHandler, (e) => {
      const $modalBackground = document.querySelector(".modal-background");
      if (!isHTMLElement($modalBackground)) return;
      if (e.key === "Escape") {
        $modalBackground.classList.remove("active");
        document.removeEventListener("keydown", __privateGet(this, _keyDownHandler));
      }
    });
    __privateSet(this, _parentElement4, parentElement);
    __privateMethod(this, _Modal_instances, renderInitial_fn).call(this);
    __privateMethod(this, _Modal_instances, fetchAndRenderModal_fn).call(this, id);
  }
};
_parentElement4 = new WeakMap();
_Modal_instances = new WeakSet();
fetchAndRenderModal_fn = async function(id) {
  const details = await MovieApi.fetchMovieDetail(id);
  __privateMethod(this, _Modal_instances, render_fn4).call(this, details);
  __privateMethod(this, _Modal_instances, renderStarRate_fn).call(this, details.id);
  __privateMethod(this, _Modal_instances, addEventListeners_fn4).call(this);
};
renderInitial_fn = function() {
  __privateGet(this, _parentElement4).innerHTML = Skeleton.Modal;
};
render_fn4 = function(details) {
  __privateGet(this, _parentElement4).innerHTML = /*html*/
  `
    <div class="modal">
      <button class="close-modal" id="closeModal">
        <img src="./images/modal_button_close.png" />
      </button>
      <div class="modal-container">
        <div class="modal-image">
          <img
            src=${__privateMethod(this, _Modal_instances, posterImage_fn).call(this, details.poster_path)}
            alt=${details.title}
          />
        </div>
        <div class="modal-description">
          <h2>${details.title}</h2>
          <p class="category">
            ${details.genres.map(({ name }) => name).join(", ")}
          </p>
          <p class="rate">
            <img src="./images/star_filled.png" class="star" /><span
              >${details.vote_average}</span
            >
          </p>
          <hr />
          <div class="my-rate">
          
         </div>
          
          <hr />
          <p class="detail">
            ${details.overview}
          </p>
        </div>
      </div>
  </div>`;
};
renderStarRate_fn = function(id) {
  const $stars = document.querySelector(".my-rate");
  if (!isHTMLElement($stars)) return;
  new MyRate($stars, id);
};
posterImage_fn = function(poster_path) {
  return poster_path ? `${_Modal.IMAGE_BASE_URL}${poster_path}` : "./images/null_image.png";
};
addEventListeners_fn4 = function() {
  const $closeModal = document.querySelector("#closeModal");
  const $modalBackground = document.querySelector(".modal-background");
  if (!isHTMLElement($closeModal) || !isHTMLElement($modalBackground)) return;
  $closeModal.addEventListener("click", () => {
    __privateMethod(this, _Modal_instances, closeModal_fn).call(this);
  });
  $modalBackground.addEventListener("click", (e) => {
    if (e.target === $modalBackground) {
      __privateMethod(this, _Modal_instances, closeModal_fn).call(this);
    }
  });
  document.addEventListener("keydown", __privateGet(this, _keyDownHandler));
};
closeModal_fn = function() {
  const $modalBackground = document.querySelector(".modal-background");
  const $body = document.querySelector("body");
  if (!isHTMLElement($modalBackground) || !isHTMLElement($body)) return;
  $modalBackground.classList.remove("active");
  document.removeEventListener("keydown", __privateGet(this, _keyDownHandler));
  $body.classList.remove("active");
};
_keyDownHandler = new WeakMap();
__publicField(_Modal, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let Modal = _Modal;
const _MovieItem = class _MovieItem {
  constructor(parentElement, movie) {
    __privateAdd(this, _MovieItem_instances);
    __privateAdd(this, _parentElement5);
    __privateAdd(this, _movie);
    __privateSet(this, _parentElement5, parentElement);
    __privateSet(this, _movie, movie);
    __privateMethod(this, _MovieItem_instances, render_fn5).call(this);
    __privateMethod(this, _MovieItem_instances, addEventListeners_fn5).call(this);
  }
};
_parentElement5 = new WeakMap();
_movie = new WeakMap();
_MovieItem_instances = new WeakSet();
render_fn5 = function() {
  __privateGet(this, _parentElement5).innerHTML = /*html*/
  `<div class="item">
    <img class="thumbnail" src="${__privateMethod(this, _MovieItem_instances, posterImage_fn2).call(this, __privateGet(this, _movie).poster_path)}" alt="${__privateGet(this, _movie).title}" />
    <div class="item-desc">
      <p class="rate">
        <img src="./images/star_empty.png" class="star" alt="star-empty"/>
        <span>${__privateGet(this, _movie).vote_average}</span>
      </p>
      <strong>${__privateGet(this, _movie).title}</strong>
    </div>
  </div>`;
};
posterImage_fn2 = function(poster_path) {
  return poster_path ? `${_MovieItem.IMAGE_BASE_URL}${poster_path}` : "./images/null_image.png";
};
addEventListeners_fn5 = function() {
  const $modalBackground = document.querySelector(".modal-background");
  const $body = document.querySelector("body");
  if (!isHTMLElement($modalBackground) || !isHTMLElement($body)) return;
  __privateGet(this, _parentElement5).addEventListener("click", () => {
    new Modal($modalBackground, __privateGet(this, _movie).id);
    $modalBackground.classList.add("active");
    $body.classList.add("active");
  });
};
__publicField(_MovieItem, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let MovieItem = _MovieItem;
class MovieList {
  constructor(parentElement, movies) {
    __privateAdd(this, _MovieList_instances);
    __privateAdd(this, _parentElement6);
    __privateAdd(this, _movies);
    __privateSet(this, _parentElement6, parentElement);
    __privateSet(this, _movies, movies);
    __privateMethod(this, _MovieList_instances, render_fn6).call(this);
  }
}
_parentElement6 = new WeakMap();
_movies = new WeakMap();
_MovieList_instances = new WeakSet();
render_fn6 = function() {
  __privateGet(this, _movies).map((movie) => {
    const $list = document.createElement("li");
    new MovieItem($list, movie);
    __privateGet(this, _parentElement6).appendChild($list);
  });
};
const _TopRatedMovie = class _TopRatedMovie {
  constructor(movie) {
    __privateAdd(this, _movie2);
    __privateSet(this, _movie2, movie);
  }
  get ui() {
    return (
      /*html*/
      `
    <div class="background-container" style="background-image: url(${_TopRatedMovie.IMAGE_BASE_URL}${__privateGet(this, _movie2).poster_path})">
      <div class="overlay" aria-hidden="true"></div>
      <div class="top-rated-movie">
        <div class="rate">
            <img src="./images/star_empty.png" class="star" alt="star-empty" />
            <span class="rate-value">${__privateGet(this, _movie2).vote_average}</span>
        </div>
        <div class="title">${__privateGet(this, _movie2).title}</div>
        <button class="primary detail">자세히 보기</button>
      </div>
    </div>
    `
    );
  }
};
_movie2 = new WeakMap();
__publicField(_TopRatedMovie, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let TopRatedMovie = _TopRatedMovie;
const _PopularMovieBoard = class _PopularMovieBoard {
  constructor(parentElement) {
    __privateAdd(this, _PopularMovieBoard_instances);
    __privateAdd(this, _parentElement7);
    __privateAdd(this, _page);
    __privateAdd(this, _isLoading, false);
    __privateAdd(this, _handleScroll, () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 150) {
        __privateMethod(this, _PopularMovieBoard_instances, loadMoreMovies_fn).call(this);
      }
    });
    __privateSet(this, _parentElement7, parentElement);
    __privateSet(this, _page, 1);
    window.scrollTo(0, 0);
    __privateMethod(this, _PopularMovieBoard_instances, renderInitialLayout_fn).call(this);
    __privateMethod(this, _PopularMovieBoard_instances, fetchAndRenderMovies_fn).call(this);
  }
  destroy() {
    window.removeEventListener("scroll", __privateGet(this, _handleScroll));
  }
};
_parentElement7 = new WeakMap();
_page = new WeakMap();
_isLoading = new WeakMap();
_PopularMovieBoard_instances = new WeakSet();
renderInitialLayout_fn = function() {
  __privateGet(this, _parentElement7).innerHTML = /*html*/
  `
      <section class="top-rated-container">
        ${Skeleton.TopRatedMovie}
      </section>
      <section class="movie-list-container">
          <h2>지금 인기 있는 영화</h2>
          <ul class='thumbnail-list'>${Skeleton.MovieList}</ul>
          <div class="more-button-container"></div>
      </section>
    `;
};
fetchAndRenderMovies_fn = async function() {
  const { movies } = await __privateMethod(this, _PopularMovieBoard_instances, movieData_fn).call(this);
  if (!movies) return;
  __privateMethod(this, _PopularMovieBoard_instances, renderTopRatedMovie_fn).call(this, movies[0]);
  __privateMethod(this, _PopularMovieBoard_instances, renderMovies_fn).call(this, movies);
  __privateMethod(this, _PopularMovieBoard_instances, addEventListeners_fn6).call(this);
};
renderTopRatedMovie_fn = function(movie) {
  const $topRated = document.querySelector(".top-rated-container");
  if (isHTMLElement($topRated))
    $topRated.innerHTML = new TopRatedMovie(movie).ui;
};
renderMovies_fn = function(movies) {
  const ul = document.querySelector(".thumbnail-list");
  if (!isHTMLElement(ul)) return;
  if (__privateGet(this, _page) === 1) {
    ul.innerHTML = "";
    new MovieList(ul, movies);
    return;
  }
  new MovieList(ul, movies);
};
movieData_fn = async function() {
  try {
    const { movies, total_pages } = await MovieApi.fetchPopularMovies(
      __privateGet(this, _page)
    );
    return { movies, total_pages };
  } catch (e) {
    new ErrorScreen("오류가 발생했습니다.").render();
    return { movies: [], total_pages: 0 };
  }
};
loadMoreMovies_fn = async function() {
  if (__privateGet(this, _isLoading)) return;
  __privateSet(this, _isLoading, true);
  __privateSet(this, _page, __privateGet(this, _page) + 1);
  const { movies: newMovies, total_pages } = await __privateMethod(this, _PopularMovieBoard_instances, movieData_fn).call(this);
  if (!newMovies) return;
  __privateMethod(this, _PopularMovieBoard_instances, renderMovies_fn).call(this, newMovies);
  __privateSet(this, _isLoading, false);
  if (__privateGet(this, _page) >= _PopularMovieBoard.MAX_PAGE || __privateGet(this, _page) >= total_pages) {
    window.removeEventListener("scroll", __privateGet(this, _handleScroll));
  }
};
_handleScroll = new WeakMap();
addEventListeners_fn6 = function() {
  window.addEventListener("scroll", __privateGet(this, _handleScroll));
};
__publicField(_PopularMovieBoard, "MAX_PAGE", 500);
let PopularMovieBoard = _PopularMovieBoard;
const _SearchMovieBoard = class _SearchMovieBoard {
  constructor(parentElement, props) {
    __privateAdd(this, _SearchMovieBoard_instances);
    __privateAdd(this, _parentElement8);
    __privateAdd(this, _props3);
    __privateAdd(this, _page2);
    __privateAdd(this, _isLoading2, false);
    __privateAdd(this, _handleScroll2, () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 150) {
        __privateMethod(this, _SearchMovieBoard_instances, loadMoreMovies_fn2).call(this);
      }
    });
    __privateSet(this, _parentElement8, parentElement);
    __privateSet(this, _props3, props);
    __privateSet(this, _page2, 1);
    window.scrollTo(0, 0);
    __privateMethod(this, _SearchMovieBoard_instances, renderInitialLayout_fn2).call(this);
    __privateMethod(this, _SearchMovieBoard_instances, fetchAndRenderMovies_fn2).call(this);
  }
  destroy() {
    window.removeEventListener("scroll", __privateGet(this, _handleScroll2));
  }
};
_parentElement8 = new WeakMap();
_props3 = new WeakMap();
_page2 = new WeakMap();
_isLoading2 = new WeakMap();
_SearchMovieBoard_instances = new WeakSet();
renderInitialLayout_fn2 = function() {
  __privateGet(this, _parentElement8).innerHTML = /*html*/
  `
      <section class="movie-list-container search-movie-list-container">
          <h2>"${__privateGet(this, _props3).searchParams}" 검색 결과 </h2>
          <ul class='thumbnail-list'>${Skeleton.MovieList}</ul>
          <div class="more-button-container"></div>
      </section>
    `;
};
fetchAndRenderMovies_fn2 = async function() {
  const { movies } = await __privateMethod(this, _SearchMovieBoard_instances, movieData_fn2).call(this);
  if (movies.length === 0) {
    window.removeEventListener("scroll", __privateGet(this, _handleScroll2));
    __privateMethod(this, _SearchMovieBoard_instances, renderNoResult_fn).call(this);
    return;
  }
  __privateMethod(this, _SearchMovieBoard_instances, renderMovies_fn2).call(this, movies);
  __privateMethod(this, _SearchMovieBoard_instances, addEventListeners_fn7).call(this);
  if (movies.length < _SearchMovieBoard.LOAD_COUNT) return;
};
renderMovies_fn2 = function(movies) {
  const ul = document.querySelector(".thumbnail-list");
  if (!isHTMLElement(ul)) return;
  if (__privateGet(this, _page2) === 1) {
    ul.innerHTML = "";
    new MovieList(ul, movies);
    return;
  }
  new MovieList(ul, movies);
};
movieData_fn2 = async function() {
  try {
    const { movies, total_pages } = await MovieApi.fetchSearchMovies(
      __privateGet(this, _page2),
      __privateGet(this, _props3).searchParams
    );
    return { movies, total_pages };
  } catch (e) {
    new ErrorScreen("오류가 발생했습니다.").render();
    return { movies: [], total_pages: 0 };
  }
};
loadMoreMovies_fn2 = async function() {
  if (__privateGet(this, _isLoading2)) return;
  __privateSet(this, _isLoading2, true);
  __privateSet(this, _page2, __privateGet(this, _page2) + 1);
  const { movies: newMovies, total_pages } = await __privateMethod(this, _SearchMovieBoard_instances, movieData_fn2).call(this);
  __privateMethod(this, _SearchMovieBoard_instances, renderMovies_fn2).call(this, newMovies);
  __privateSet(this, _isLoading2, false);
  if (newMovies.length < _SearchMovieBoard.LOAD_COUNT || __privateGet(this, _page2) >= total_pages) {
    window.removeEventListener("scroll", __privateGet(this, _handleScroll2));
  }
};
_handleScroll2 = new WeakMap();
renderNoResult_fn = function() {
  const h2 = document.querySelector(".movie-list-container h2");
  const ul = document.querySelector("ul.thumbnail-list");
  if (isHTMLElement(ul)) ul.innerHTML = "";
  if (isHTMLElement(h2))
    h2.insertAdjacentHTML(
      "afterend",
      `<div class="fallback-screen">
            <img src="./images/dizzy_planet.png" alt="dizzy-planet"/>
            <p>검색 결과가 없습니다</p>
        </div>`
    );
};
addEventListeners_fn7 = function() {
  window.addEventListener("scroll", __privateGet(this, _handleScroll2));
};
__publicField(_SearchMovieBoard, "LOAD_COUNT", 20);
let SearchMovieBoard = _SearchMovieBoard;
class App {
  constructor() {
    __privateAdd(this, _App_instances);
    __privateAdd(this, _currentBoard, null);
    RateStorage.init();
  }
  render() {
    __privateMethod(this, _App_instances, renderHeader_fn).call(this);
    __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this);
    __privateMethod(this, _App_instances, renderFooter_fn).call(this);
  }
}
_currentBoard = new WeakMap();
_App_instances = new WeakSet();
renderHeader_fn = function() {
  const $header = document.querySelector("header");
  if (isHTMLElement($header))
    new Header($header, {
      onSearchSubmitted: (params) => __privateMethod(this, _App_instances, renderSearchResult_fn).call(this, params),
      onLogoClicked: () => __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this)
    });
};
renderSearchResult_fn = function(searchParams) {
  if (__privateGet(this, _currentBoard)) __privateGet(this, _currentBoard).destroy();
  const $section = document.querySelector("main");
  if (isHTMLElement($section))
    __privateSet(this, _currentBoard, new SearchMovieBoard($section, { searchParams }));
};
renderPopularMovies_fn = function() {
  if (__privateGet(this, _currentBoard)) __privateGet(this, _currentBoard).destroy();
  const $section = document.querySelector("main");
  if (isHTMLElement($section))
    __privateSet(this, _currentBoard, new PopularMovieBoard($section));
};
renderFooter_fn = function() {
  const root = document.querySelector("body");
  root == null ? void 0 : root.insertAdjacentHTML("beforeend", Footer());
};
const app = new App();
app.render();
