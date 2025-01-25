import { useContext } from 'react'
import { AppContext } from '../../store'
import { RiDeleteBin4Fill } from 'react-icons/ri'
import actions from '../../store/actions'
import API_PRO from '../../api'
import Typography from '../typography'
import {  IcardParm, typeAppStateKeys } from '../../@types'
import { userInfo } from '../../storage'
import './card.css'


const userId=userInfo.id;





const Card = ({bkUrl,nameOfAction,nameOfItem,dataOfCard}:IcardParm) => {
    const {theme,dispatch}=useContext(AppContext);
    const  {data}:typeAppStateKeys[]=useContext(AppContext)[nameOfAction as typeAppStateKeys]

    
    const handleDeleteItem = ():void => {
      API_PRO.delete(`${bkUrl}?id=${userId}&${nameOfItem}Id=${dataOfCard[`${nameOfItem}Id`]}`).then(() =>
     { 
      alert('don');
      dispatch(actions[nameOfAction as typeAppStateKeys].success(data.filter((item:typeAppStateKeys)=>item[`${nameOfItem}Id` as keyof typeof item]!==dataOfCard[`${nameOfItem}Id`] )))
     }).catch(err =>alert(err))
    }
  


  return (
    <section className={`card-countainer card-countainer-${theme} `}>
        {Object.keys(dataOfCard).map(key=>key!==`${nameOfItem}Id`&& 
         <Typography 
         size={'12px'} 
         name={dataOfCard[key]}
           />)
        }
      <RiDeleteBin4Fill 
      
      cursor={'pointer'} 
      color='red' 

      size={'19px'} 
      onClick={handleDeleteItem} />


    </section>
  )
}


export default Card
