import { ReactElement } from 'react'
import { userInfo } from '../../storage'

interface Iguarded {
  childern: ReactElement
}
const userType = userInfo.type
const Guarded = ({ childern }: Iguarded) => {


  return (

    <>
      {
        userType === 'admin' ? childern : userType === 'user' ? <div>no have permation </div> : <div>should login </div>
      }
    </>

  )
}

export default Guarded
