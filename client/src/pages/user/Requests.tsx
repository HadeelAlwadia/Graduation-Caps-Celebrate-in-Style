import  { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Countainer } from '../../components/common/countainer';
import AddItem from '../../components/card/addItem';
import Card from '../../components/card';
import TitlePage from '../../components/titlePage';
import noItemFound from '../../assets/noItemFound.png'
import './user.css'



const Requests = () => {
  const { userId } = useParams()
  const { data, error, loading } = useFetch(`/user/requests?id=${userId}`, 'requestsUser');
  const [openCom, setOpenCom] = useState(false);


  const handleToggleCom = () => {
    setOpenCom(!openCom)
  }


  return (
    <>
      
      {
        openCom ?
          <AddItem handleClose={handleToggleCom}
           values={{ name: '', desraption: '', status: ['panding','relsove','reject']}} 
           bkUrl={'/user/requests'}
            perPage={'requests'} 
            nameOfItem={'request'} /> :

          <Countainer
            childern={
              <section className='user-countainer' >
                {
                  loading ?
                    <section>loading</section> : data ?

                      <>
                        <TitlePage handleToggleCom={handleToggleCom} name={'requests'}/>
                       <Countainer
                        flexDirection='column'
                          childern={
                            <>
                              {
                              data.length ? data.map((itemOfData: any) => <Card
                                key={itemOfData['requestId']}
                                dataOfCard={{ ...itemOfData }}
                                bkUrl={'/user/requests'}
                                nameOfAction={'requestsUser'}
                                nameOfItem={'request'} />) : 
                             
                                <img src={noItemFound} alt='no have item' />}
                            </>}


                        />


                      </>

                      : <section>{error}</section>
                }

              </section>} />


      }

    </>


  )
}

export default Requests
