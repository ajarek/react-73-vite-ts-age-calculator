import { useState } from 'react'
import { Form } from './component/Form/Form'
import Result from './component/Result/Result'
const today = new Date()
const newDay: number = today.getDate()
const newMonth: number = today.getMonth() + 1
const newYear: number = today.getFullYear()

type Data = {
  day: number
  month: number
  year: number
}

function App() {
  const [day, setDay] = useState<string>('--')
  const [month, setMonth] = useState<string>('--')
  const [year, setYear] = useState<string>('----')

  const handleSubmit = (data: Data) => {
    setDay(String(Math.abs(newDay - data.day)))
    setMonth(String(Math.abs(newMonth - data.month)))
    setYear(String(Math.abs(newYear - data.year)))
  }

  return (
    <div className='App'>
      <Form onSubmit={handleSubmit} />
      <Result
        newYears={year}
        newMonths={month}
        newDays={day}
      />
    </div>
  )
}

export default App
