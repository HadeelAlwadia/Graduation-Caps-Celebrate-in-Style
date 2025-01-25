

import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Countainer } from '../../components/common/countainer';
import noItemFound from '../../assets/noItemFound.png'
import AddItem from '../../components/card/addItem';
import Card from '../../components/card';
import TitlePage from '../../components/titlePage';


const Users = () => {
  const { userId } = useParams()
  const { data, error, loading } = useFetch(`/admin/users?id=${userId}`, 'usersAdmin');
  const [openCom, setOpenCom] = useState(false);

  const handleToggleCom = () => {
    setOpenCom(!openCom)
  }

  return (
    <>
      {
        openCom ?
          <AddItem handleClose={handleToggleCom}
           values={{ name: '', desraption: '', type: ['admin','user'] }} 
           bkUrl={'/admin/users'}
            perPage={'users'} 
            nameOfItem={'user'} /> :
          <Countainer
            childern={
              <section className='user-countainer' >
                {
                  loading ?
                    <section>loading</section> : data ?

                      <>
                        <TitlePage name={'users'} handleToggleCom={handleToggleCom}/>
                        
                        <Countainer
                        flexDirection='column'
                          childern={
                            <>
                              {
                              data.length ?
                               data.map((itemOfData: any) =>
                               <Card
                                key={itemOfData['userId']}
                                dataOfCard={{ ...itemOfData }}
                                bkUrl={'/admin/users'}
                                nameOfAction={'usersAdmin'}
                                nameOfItem={'user'} />) :
                                 <img src={noItemFound} alt='no have item' />}
                            </>
                            }
                        />


                      </>

                      : <section>{error}</section>
                }

              </section>} />


      }

    </>


  )
}

export default Users





