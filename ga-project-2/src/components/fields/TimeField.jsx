import { useState, useEffect } from 'react'

const TimeField = ({ GMTOffset, cityName, epochTime }) => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [gmtOffset, setGmtOffset] = useState(0)

  // const localTime = useCallback(() => {
  //   // pass time zone code from weatherSearch .. -> moment.js
  // }, [GMTOffset])

  // const [overtime, setOvertime] = useState(0)

  useEffect(() => {
    let now = new Date()
    setGmtOffset(GMTOffset)
    setMinutes(now.getMinutes())
    setHours(now.getHours() + gmtOffset - 1)
  }, [GMTOffset, gmtOffset, cityName])

  return (
    <div className='local-time-display'>
      <p>
        local time {hours}:{minutes}
      </p>
    </div>
  )
}

export default TimeField

//TODO
//? seperate current time into its own component, --> dynamic clock
//? give local time its own component
//? bug going over 24 hours -->

// use moment.js with time zone
