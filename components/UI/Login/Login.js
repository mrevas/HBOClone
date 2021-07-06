import Head from 'next/head'
import { useStateContext } from '../../../components/HBOProvider'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useMounted } from '../../Hooks/useMounted';
import ls from 'local-storage';

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter( );
  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []
  let {hasMounted} = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }
  }, [])

  const selectUser = (id) => {
    console.log(id)
    ls('activeUID', id)
    router.push('/')
  }
  const showUsers = () => {
    if(!loadingUsers) {
      return users.map((user) => {
        return (
          <div onClick={() => selectUser(user.id)} className="login-user__user-box" key={user.id}>
            <img className="login-user__user-img" src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }

  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
        {hasMounted ? showUsers() : ''}
        </div>
        <div className="login-user__buttons">
          <button className="login-user__kid" onClick={() => router.push('/create')} >Create User</button>
        </div>
      </div>
  )
}


export default Login;