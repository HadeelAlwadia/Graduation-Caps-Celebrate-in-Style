
import { Countainer } from '../../components/common/countainer'

const Home = () => {
  return (
    <Countainer childern={<>
      <h1>
        home page
      </h1>
      <a href='/auth/login'>
        go to login
      </a>
    </>
    }
      height={'100vh'}
      width={'100%'}
      flexDirection={'column'}
    />


  )
}

export default Home

