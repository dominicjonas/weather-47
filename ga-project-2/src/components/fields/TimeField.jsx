import { useState, useEffect } from 'react'

const TimeField = ({ GMTOffset }) => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  // const [overtime, setOvertime] = useState(0)

  useEffect(() => {
    let now = new Date()
    setMinutes(now.getMinutes())
    // if (minutes > 30) {
    //   setMinutes(30)
    // }
    // if (minutes < 30) {
    //   setMinutes('00')
    // }
    // if (hours + GMTOffset - 1 > 24) {
    //   setOvertime(Math.abs(now.getHours() + GMTOffset - 1))
    // } else {
    setHours(now.getHours() + GMTOffset - 1)
    // }
  }, [hours])

  return (
    <div className='local-time-display'>
      <p>
        local time since update {hours}:{minutes}
      </p>
    </div>
  )
}

export default TimeField

//TODO
//? seperate current time into its own component, --> dynamic clock
//? give local time its own component
//? bug going over 24 hours -->
