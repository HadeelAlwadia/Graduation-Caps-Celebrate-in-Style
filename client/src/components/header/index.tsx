import logo from '../../assets/graduationCaps.png'
import { CgProfile } from "react-icons/cg";
import './header.css'
import { IoIosGitPullRequest } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import {  removeFromLocalStorage, userInfo } from '../../storage';

const {id,type}=userInfo;


const handleLogout = () => {
  removeFromLocalStorage('userInfo')
  window.location.href = '/home'
}



const Header = () => {

  return (
    <header>
      <section className='logo-container'>
        <section>
          <a href='/home'>
            <img src={logo} alt='Celebrate in Style' className='logo-app' /></a>
          <h1 className='name-app'> Celebrate in Style </h1>
        </section>
      </section>


      <ul className='main-links'>
        <li>
          <a href={`/user/${id}/requests`}>

            <IoIosGitPullRequest />
            requests
          </a>
        </li>
        {type === 'admin' &&
          <>
            <li>
              <a href={`/admin/${id}/users`}>

                <IoIosGitPullRequest />
                users
              </a>
            </li>
            <li>
              <a href={`/admin/${id}/products`}>
                <IoIosGitPullRequest />
                products
              </a>
            </li>
          </>

        }
        <li >
          <a href={`/user/${id}/profile`}>
            <CgProfile />
            profile
          </a>

        </li>
        <li onClick={handleLogout}>
          <CiLogout />
          logout
        </li>

      </ul>
    </header>
  )
}

export default Header
