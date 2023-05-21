import axios from 'axios';
const url = 'https://pixabay.com/api/';
const API_KEY = '34759056-2de4c592571744c5e49452dcb';

export const fetchImages = async (searchText, page = 1) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`${url}?${params}`);
  return response.data;
};

export function needValues(data) {
  return data.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
}
