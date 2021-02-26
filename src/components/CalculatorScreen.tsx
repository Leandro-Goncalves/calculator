import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext';
import styles from '../styles/components/CalculatorScreen.module.css';

export function CalculatorScreen () {

  const { result,accountHistory , isOn } = useContext(ScreenContext)

  return(
    <div className={styles.ScreenContainer}>
      <div className={styles.ScreenUp}>
        {isOn && accountHistory}
      </div>
      <div className={styles.ScreenDown}>
        {isOn && (result || "0")}
      </div>
    </div>
  )
}