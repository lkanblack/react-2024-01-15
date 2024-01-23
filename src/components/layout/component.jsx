
import { Header } from "../header/component"
import { Footer } from "../footer/component"

import styles from './style.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  )
}