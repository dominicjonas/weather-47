import { createClient } from 'pexels'
const client = createClient('563492ad6f91700001000001814bee9d05a0457c93d711fb17e2470e')

export const getPhotos = async (search) => {
  const query = search

  return search
    ? client.photos
        .search({ query, per_page: 1 })
        .then((data) => data.photos[0].src.medium)
    : null
}
