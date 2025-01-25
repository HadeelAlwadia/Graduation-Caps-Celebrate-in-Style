
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import API_PRO from '../../api'
import actions from '../../store/actions'
import { AppContext } from '../../store'
import { useContext } from 'react'
import { Countainer } from '../../components/common/countainer'
import userAvatar from '../../assets/userAvatar.png'
import './user.css'

const Profile = () => {
  const { dispatch } = useContext(AppContext);
  const { userId } = useParams();
  const { data, error, loading } = useFetch(`/user/info?id=${userId}`, 'userInfo');


  const handleAddUserAvater = (userAvatar: string) => {
    API_PRO.put(`/user/info?id=${userId}`, { ...data, avatar: userAvatar }).then(res => {
      dispatch(actions['userInfo'].success(res.data))
    }).catch(err => alert(err))
  }

  return (<>
    <Countainer
      childern=
      {
        loading ? <section>loading....</section> :

          data ?
            <section className='user-countainer' >

              <img className='user-avater' src={data.avatar ? data.avatar : userAvatar} alt=' user avatar' />
              <input
                accept='png,jpeg,svg'
                type='file'
                onChange={e => handleAddUserAvater(e.target.value)} />

              <h2 className='user-name' >{data.name}</h2>
              <h2 className='user-name' >{data.rols}</h2>
            </section> :

            <section>{error}</section>
      } />

  </>

  )
}

export default Profile;
