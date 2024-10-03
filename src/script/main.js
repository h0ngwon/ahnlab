"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const catGrid = document.getElementById("catGrid");
const scrollAnchor = document.getElementById("scrollAnchor");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const modalClose = document.querySelector(".modal-close-btn");
const loadCatList = () => __awaiter(void 0, void 0, void 0, function* () {
    const catList = yield fetchCatList();
    catList.map((cat) => {
        const wrapper = document.createElement("div");
        wrapper.className = "img-wrapper";
        const img = document.createElement("img");
        img.src = cat.url;
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            document.body.style.overflow = "hidden";
        });
        wrapper.appendChild(img); // appendChild로 grid에 추가
        catGrid.appendChild(wrapper);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // DOM 로딩 후
    modal.style.display = "none";
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadCatList();
        }
    }, {
        rootMargin: "500px",
        threshold: 0.3,
    });
    observer.observe(scrollAnchor); // 스크롤 타겟 설정
    loadCatList();
});
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});
modal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});
