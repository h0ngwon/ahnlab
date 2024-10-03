interface CatImage {
  url: string;
}

async function fetchCatImages(limit = 9): Promise<CatImage[]> {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
  const data: CatImage[] = await response.json();
  return data;
}