import style from './style.module.scss';
import { UserContext } from '../../contexts/user';
import { useContext, useState } from 'react';

export const LoginButton = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [context, setContext] = useContext(UserContext);
  const handleContext = () => {
    if(context === '') {
      setContext({name:"John Wick", email:"john@wick.com"});
      setIsLogged(true);
    } else {
      setContext("");
      setIsLogged(false);
    }
  }

  return (
    <button className={style.login} onClick={handleContext}>{isLogged ? 'Logout':'Login'}</button>
  )
}