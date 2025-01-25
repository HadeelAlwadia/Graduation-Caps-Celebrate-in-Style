import useForm from '../../hooks/useForm'
import Form, { DrawingFormElements } from '../../components/form'
import API_PRO from '../../api'
import Btn from '../../components/common/button'
import { storeInLocalStorage } from '../../storage'
import { Countainer } from '../../components/common/countainer'



const loginValues = {
  email: '',
  password: ''
}



const handleLogin = (values: {}) => {
  API_PRO.post('/auth/login',values).then(res => {
    console.log(res)
    storeInLocalStorage('userInfo',res.data)   
    window.location.href =`/user/${res.data.id}/profile`

  }
).catch(err => {
  alert(err.response.data)
})
}




const Login = () => {
  
  const { handleChangeValue, handleSubmit, errors, valuesForm } = useForm(loginValues,handleLogin)
   

  return (
    <main>
     <Countainer  
     height={'100vh'}
      childern={ <Form 
      handleSubmit={handleSubmit}
      childern={<>
        <h1>login to ...</h1>
        <DrawingFormElements valuesForm={valuesForm} handleChangeValue={handleChangeValue} errors={errors}/>
        <p>
          Dont have account?<a href='/auth/register'>signup</a>
        </p>
           <Btn type={"submit"} name={'login'}/>

        </>}
    />}
      
 
/>
    
    </main>

  )
}





export default Login