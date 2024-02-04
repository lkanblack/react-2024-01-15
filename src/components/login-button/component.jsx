import style from './style.module.scss';
import { UserContext } from '../../contexts/user';
import { useContext, useState } from 'react';

export const LoginButton = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [context, setContext] = useContext(UserContext);

  const handleContext = () => {
    setContext({user:"John Wick", email:"john@wick.com"});
    setIsLogged(true);
  }

  return (
    <button className={style.login} onClick={handleContext}>{isLogged ? 'Logout':'Login'}</button>
  )
}