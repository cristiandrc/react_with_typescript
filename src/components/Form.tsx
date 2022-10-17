import React from 'react'
import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'

interface FormProps {
  onNewSub: (e:Sub) => void
  // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}


const Form = ({onNewSub}: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }

  const handleChange = (evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target
    dispatch({
      type:'change_value',
      payload:{
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleClear = () => {
    dispatch({
      type: 'clear'
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick' />
        <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder='subMonths' />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar' />
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
        <button onClick={handleClear} type='button'>clear the form</button>
        <button type='submit'>Save new sub!</button>
      </form>
    </div>
  )
}

export default Form