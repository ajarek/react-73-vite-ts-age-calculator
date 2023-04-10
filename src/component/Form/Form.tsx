import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Form.css'
import { FormEvent } from 'react'


type Props={
onSubmit: (data:Data) => void 
}
type Data = {
  day: number
  month: number
  year: number
}
export const Form = ({onSubmit}:Props) => {
  const schema = yup.object().shape({
    month: yup.number().min(1).max(12).required('Your day is Required!'),
    day: yup.number().min(1).when('month',(month,schema)=> month==2||month==4||month==6||month==9||month==11?schema.max(30):schema.max(31) ).required('Your day is Required!'),
    
    year: yup.number().min(1000).max(2023).required('Your day is Required!'),
   
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(schema),
  })

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper-all-input">
      <div className="wrapper-input">
      <label htmlFor="day">DAY</label>
      <input
        type='text'
        placeholder='DD'
        {...register('day')}
       
      />
      <p>{errors?.day?.message}</p>
      </div>
      <div className="wrapper-input">
      <label htmlFor="month">MONTH</label>
      <input
        type='text'
        placeholder='MM'
        {...register('month')}
      />
      <p>{errors?.month?.message}</p>
      </div>
      <div className="wrapper-input">
      <label htmlFor="year">YEAR</label>
      <input
        type='text'
        placeholder='YYYY'
        {...register('year')}
      />
      <p>{errors?.year?.message}</p>
      </div>
      </div>
      <div className="submit">
      <button type='submit'>
        <img src="/icon-arrow.svg" alt="icon" />
      </button>
      </div>
    </form>
  )
}
