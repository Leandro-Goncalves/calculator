import Head from 'next/head'
import { CalculatorButtons } from '../components/calculatorButtons';
import { CalculatorScreen } from '../components/CalculatorScreen';
import styles from '../styles/pages/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      vai
      <div className={styles.titleFirst}>Calcu</div>
      <div className={styles.calculatorContainer}> 
        <CalculatorScreen></CalculatorScreen>
        <CalculatorButtons></CalculatorButtons>
      </div>
      <div className={styles.titleLast}>Lator</div>
    </div>
  )
}
