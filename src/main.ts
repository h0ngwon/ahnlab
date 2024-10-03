document.addEventListener('DOMContentLoaded', () => {
  const catGrid = document.getElementById('catGrid') as HTMLDivElement;
  const scrollAnchor = document.getElementById('scrollAnchor') as HTMLDivElement;
  const limit = 9;

  async function loadCats(): Promise<void> {
    const cats = await fetchCatImages(limit);
    cats.forEach(cat => {
      const wrapper = document.createElement('div');
      wrapper.className = 'wrapper';

      const img = document.createElement('img');
      img.src = cat.url;

      wrapper.appendChild(img);
      catGrid.appendChild(wrapper);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadCats();
    }
  }, {
    threshold: 0.3,
  });

  observer.observe(scrollAnchor); // 스크롤 타겟 설정
  loadCats();
});