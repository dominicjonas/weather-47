const key = 'c7Hnalh5xErl6DTtn2dQThQktaQ7N1A7'

export const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const res = await fetch(base + query)
  const data = await res.json()
  console.log(data[0])
}
