import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext';
import styles from '../styles/components/CalculatorButtons.module.css';

export function CalculatorButtons() {

  const { addItemInResult, turnOn, turnOff } = useContext(ScreenContext)
  return(
    <div className={styles.ButtonsContainer}>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"clean"})}  className={`${styles.ButtonsButton} ${styles.ButtonDouble}`}>C</div>
      <div onClick={turnOn} className={`${styles.ButtonsButton}`}>On</div>
      <div onClick={turnOff} className={`${styles.ButtonsButton}`}>Off</div>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"divide"})}className={`${styles.ButtonsButton}`}>&divide;</div>

      <div onClick={()=> addItemInResult({type:"action" ,payload:"squareRoot"})}className={`${styles.ButtonsButton}`} style={{fontFamily: 'system-ui'}}>√</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"7"})} className={`${styles.ButtonsButton}`}>7</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"8"})} className={`${styles.ButtonsButton}`}>8</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"9"})} className={`${styles.ButtonsButton}`}>9</div>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"times"})} className={`${styles.ButtonsButton}`}>&times;</div>

      <div onClick={()=> addItemInResult({type:"action" ,payload:"percent"})} className={`${styles.ButtonsButton}`}>%</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"4"})} className={`${styles.ButtonsButton}`}>4</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"5"})} className={`${styles.ButtonsButton}`}>5</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"6"})} className={`${styles.ButtonsButton}`}>6</div>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"less"})} className={`${styles.ButtonsButton}`}>&minus;</div>

      <div onClick={()=> addItemInResult({type:"action" ,payload:"timesMinusOne"})}className={`${styles.ButtonsButton}`}>+/-</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"1"})} className={`${styles.ButtonsButton}`}>1</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"2"})} className={`${styles.ButtonsButton}`}>2</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"3"})} className={`${styles.ButtonsButton}`}>3</div>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"sum"})} className={`${styles.ButtonsButton}`}>+</div>

      <div onClick={()=> addItemInResult({type:"number" ,payload:"0"})} className={`${styles.ButtonsButton}`}>0</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"00"})} className={`${styles.ButtonsButton}`}>00</div>
      <div onClick={()=> addItemInResult({type:"number" ,payload:"."})}  className={`${styles.ButtonsButton}`}>.</div>
      <div onClick={()=> addItemInResult({type:"action" ,payload:"equal"})}className={`${styles.ButtonsButton} ${styles.ButtonDouble}`}>=</div>
      
    </div>
  )
}