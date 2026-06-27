import styles from '../../styles/Home.module.css';
import type { ReactElement } from 'react';

const BackgroundGlow = (): ReactElement => (
  <div className={styles.bgGlow}>
    <div className={styles.orb1}></div>
    <div className={styles.orb2}></div>
    <div className={styles.orb3}></div>
  </div>
);

export default BackgroundGlow;
