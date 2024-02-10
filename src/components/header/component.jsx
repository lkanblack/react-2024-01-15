// Header.jsx
import styles from './styles.module.scss';
import { LoginButton } from '../login-button/component';
import { UserContext } from '../../contexts/user';
import { useContext } from 'react';
import { CartButtonContainer } from '../cart-button/container';

export const Header = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <header className={styles.root}>
      <h2>Welcome, {user.name ? user.name : "Guest"}</h2>
      <LoginButton setUser={setUser} />
      <CartButtonContainer />
    </header>
  );
};
