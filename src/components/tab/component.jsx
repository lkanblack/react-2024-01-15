import styles from './style.module.scss';

export const Tab = ({restaraunt, handler}) => {
    return (
        <label className={styles.tab}>
        <input 
          type="radio"
          name="tab-input"
          onChange={() => handler(restaraunt.name)}
        />
        <div>{restaraunt.name}</div>
      </label>
    )
}