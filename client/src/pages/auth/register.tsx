
import useForm from '../../hooks/useForm'
import Form, { DrawingFormElements } from '../../components/form'
import API_PRO from '../../api'
import Btn from '../../components/common/button'
import { Countainer } from '../../components/common/countainer'


const registerValues = {
  email: '',
  name: '',
  password: '',
}


const handleRegister = (values: {}) => {
  API_PRO.post('/auth/register', { ...values, id: `${Math.random()}` }).then(res => {
      window.location.href = '/auth/login'
  }
  ).catch(err => { alert(err.response.data) })
}


const Register = () => {
  const { handleChangeValue, handleSubmit, errors, valuesForm } = useForm(registerValues,handleRegister)
  

  return (
    <main>
      <Countainer height={'100vh'} childern={    <Form
          handleSubmit={handleSubmit} childern={
          <>
            <h1>singUp to ...</h1>
             <DrawingFormElements valuesForm={valuesForm} handleChangeValue={handleChangeValue} errors={errors}/>
             <p>
               have account?<a href='/auth/login'>login</a>
             </p>
            <Btn type={'submit'} name={'register'} />
          </>
          }
        />}/>
       
    
    </main>)

}



export default Register;