import Form, { DrawingFormElements } from '../form'
import useForm from '../../hooks/useForm'
import API_PRO from '../../api'
import Btn from '../common/button'
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from '../../store';
import { userInfo } from '../../storage';
import { typeObject } from '../../@types';


const userId=userInfo.id


interface IaddItem {
    handleClose: () => void
    values: Record<string,any>,
    bkUrl: string
    perPage: string
    nameOfItem: string
}






const AddItem = ({ handleClose, values, bkUrl, perPage, nameOfItem }: IaddItem) => {
    const { theme } = useContext(AppContext);
    const { handleChangeValue, handleSubmit, errors, valuesForm } = useForm(values,handleAddItem)
   


    function handleAddItem  (values:typeObject) {

        const valuesItem:typeObject= { ...values }
        valuesItem[`${nameOfItem}Id`] = `${Math.random()}`
    

        API_PRO.post(`${bkUrl}?id=${userId}`,valuesItem ).then(() => {
            
            setTimeout(() => window.location.href = `/user/${userId}/profile`, 1)
        }
        ).catch(err => console.log(err))
    }
    



    return (
        <section className={`add-countainer add-countainer-${theme}`}>
            <IoCloseSharp color='red' size={40} className='icon' 
                onClick={handleClose} 
                />
               <Form handleSubmit={handleSubmit} 
               childern={<>
                <h2>{`add ${nameOfItem}`}</h2>
                 <DrawingFormElements
                 valuesForm={valuesForm}
                  handleChangeValue={handleChangeValue}
                  errors={errors}/>

                
                <Btn type={'submit'} name={`add ${nameOfItem}`} />
            </>} />
        </section>



    )
}

export default AddItem;

