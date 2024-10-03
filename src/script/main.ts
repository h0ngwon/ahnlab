const catGrid = document.getElementById("catGrid") as HTMLDivElement;
const scrollAnchor = document.getElementById("scrollAnchor") as HTMLDivElement;
const modal = document.querySelector(".modal") as HTMLElement;
const modalImg = document.querySelector(".modal-img") as HTMLImageElement;
const modalClose = document.querySelector(".modal-close-btn") as HTMLElement;

const loadCatList = async () => {
  const catList = await fetchCatList();

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
};

document.addEventListener("DOMContentLoaded", () => {
  // DOM 로딩 후
  modal.style.display = "none";

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadCatList();
      }
    },
    {
      rootMargin: "500px",
      threshold: 0.3,
    }
  );

  observer.observe(scrollAnchor); // 스크롤 타겟 설정
  loadCatList();
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e: MouseEvent) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
