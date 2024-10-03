interface ICatListResponse {
  id: string;
  url: string;
}

const fetchCatList = async (limit: number = 100) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  );
  const data: ICatListResponse[] = await response.json();

  return data;
};
