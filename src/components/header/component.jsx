import styles from './styles.module.scss';
import { LoginButton } from '../login-button/component';

export const Header = () => {
  return(
    <header className={styles.root}>
      Header
      <LoginButton />
      </header>
  )
}