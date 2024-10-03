document.addEventListener("DOMContentLoaded", () => {
  const catGrid = document.getElementById("catGrid") as HTMLDivElement;
  const scrollAnchor = document.getElementById(
    "scrollAnchor"
  ) as HTMLDivElement;

  const loadCatList = async () => {
    const catList = await fetchCatList();

    catList.map((cat) => {
      const wrapper = document.createElement("div");
      wrapper.className = "img-wrapper";

      const img = document.createElement("img");
      img.src = cat.url;

      wrapper.appendChild(img); //appendChild로 grid에 추가
      catGrid.appendChild(wrapper);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadCatList();
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(scrollAnchor); // 스크롤 타겟 설정
  loadCatList();
});
