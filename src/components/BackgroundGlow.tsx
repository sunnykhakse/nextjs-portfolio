import styles from '../../styles/Home.module.css';
import type { ReactElement } from 'react';

const BackgroundGlow = (): ReactElement => (
  <div className={styles.bgGlow}>
    <div className={styles.orb1}></div>
    <div className={styles.orb2}></div>
    <div className={styles.orb3}></div>
    {/* Artistic accent elements */}
    <div 
      className={styles.bgAccent + ' ' + styles['bgAccent-1']}
      style={{
        top: '20%',
        left: '5%',
        width: '300px',
        height: '300px',
      }}
    ></div>
    <div 
      className={styles.bgAccent + ' ' + styles['bgAccent-2']}
      style={{
        bottom: '10%',
        right: '8%',
        width: '400px',
        height: '400px',
      }}
    ></div>
  </div>
);

export default BackgroundGlow;
