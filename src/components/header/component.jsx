import styles from './styles.module.scss';
import { LoginButton } from '../login-button/component';
import { UserContext } from '../../contexts/user';
import { useState } from 'react';

export const Header = () => {

  const [context, setContext] = useState("Guest");
  return(
    <header className={styles.root}>
      <UserContext.Provider value={[context, setContext]}>
        <h2>Welcome, {context.user ? context.user : context}</h2>
        <LoginButton />
      </UserContext.Provider>
      </header>
  )
}