const key = 'aYn6nwS0oneYpQEsdhCsy5Sac7yv2nl5'

export const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${key}`

  const res = await fetch(base + query)
  const data = await res.json()
  return data[0]
}

export const getCity = async (city) => {
  console.log(city)
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const res = await fetch(base + query)
  const text = await res.text()
  // const data = await res.json()
  const data = JSON.parse(text)

  return data[0]
}

// TODO
//? export getCity --> data[0]
//? export getWeather --> data[0]
