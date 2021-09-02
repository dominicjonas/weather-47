import { createClient } from 'pexels'

export const getPhotos = async (search) => {
  const client = createClient('563492ad6f91700001000001814bee9d05a0457c93d711fb17e2470e')
  const query = search

  client.photos.search({ query, per_page: 1 }).then((data) => {
    return data.photos[0].src.small
  })
}
