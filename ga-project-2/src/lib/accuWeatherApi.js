const key = 'uBnG07108o02cIlG3IGPOGyNLzcbtrWt'

export const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${key}`

  const res = await fetch(base + query)
  const data = await res.json()

  return data[0]
}

export const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const res = await fetch(base + query)
  const text = await res.text()
  const data = JSON.parse(text)

  return data[0]
}
