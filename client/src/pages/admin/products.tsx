
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Countainer } from '../../components/common/countainer';
import noItemFound from '../../assets/noItemFound.png'
import AddItem from '../../components/card/addItem';
import Card from '../../components/card';
import TitlePage from '../../components/titlePage';


const Products = () => {
  const { userId } = useParams()
  const { data, error, loading } = useFetch(`/admin/products?id=${userId}`, 'productsAdmin');
  const [openCom, setOpenCom] = useState(false);

  
  const handleToggleCom = () => {
    setOpenCom(!openCom)
  }

  return (
    <>
      {
        openCom ?
          <AddItem handleClose={handleToggleCom}
           values={{ name: '', desraption: '', colors: ['red','blue','black'] }} 
           bkUrl={'/admin/products'}
            perPage={'products'} 
            nameOfItem={'product'}
             /> :

          <Countainer
          flexDirection='column'
            childern={
              <section className='user-countainer' >
                {
                  loading ?
                    <section>loading</section> : data ?

                      <>
                       <TitlePage name={'products'} handleToggleCom={handleToggleCom}/>

                        <Countainer 
                        flexDirection='column'
                          childern={
                            <>
                              {data.length ? data.map((itemOfData: any) => <Card
                                key={itemOfData['requestId']}
                                dataOfCard={{ ...itemOfData }}
                                bkUrl={'/admin/products'}
                                nameOfAction={'productsAdmin'}
                                nameOfItem={'product'} />) : <img src={noItemFound} alt='no have item' />}
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

export default Products
