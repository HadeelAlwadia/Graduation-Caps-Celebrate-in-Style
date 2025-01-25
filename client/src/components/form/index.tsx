import React, { ReactElement } from 'react'
import './form.css'
import { typeObject } from '../../@types'

interface IdrawingInputElements {
    valuesForm: typeObject,
    errors: typeObject,
    handleChangeValue: (key: string, value: string) => void
}





export const DrawingFormElements = ({ valuesForm, handleChangeValue, errors }: IdrawingInputElements) =>
    Object.keys(valuesForm).map(key => typeof valuesForm[key] === 'object' ? <>
        <select className='input' value={valuesForm[key][2]}
            onChange={(e) => handleChangeValue(key, e.target.value)}>
            {valuesForm[key].map((val: string) => <option value={val}>{val}</option>)}
        </select>
    </> :
        <>
            <input
                className='input'
                value={valuesForm.value}
                type={key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeValue(key, e.target.value)}
                placeholder={`enter ${key}!`} />
            {errors[key] && <p className='error'>{errors[key]}</p>}

        </>)







const Form = ({ handleSubmit, childern }: { handleSubmit: (values: typeObject) => void, childern: ReactElement }) => {
    return (
        <form onSubmit={handleSubmit} className='form '>
            <section className='countainer-form left'>
                {childern}
            </section>
        </form>
    )
}

export default Form;
