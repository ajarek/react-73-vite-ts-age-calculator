import React from 'react'
import './Result.css'
type Props={
  newYears:string
  newMonths:string
  newDays:string
}
const Result = ({newYears,newMonths,newDays}:Props) => {
  return (
    <div className='result'>
      <div className="years"><span>{newYears}</span> years</div>
      <div className="months"><span>{newMonths}</span> months</div>
      <div className="days"><span>{newDays}</span> days </div>
    </div>
  )
}

export default Result