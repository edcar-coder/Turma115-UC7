import React from 'react';
import styles from './Aside.module.css';

function Aside() {
  return (
    <aside className={styles.aside}>
      <h2>Notícias do Mundo do Rock</h2>
      <p>Leia as últimas notícias, lançamentos e eventos do mundo do rock.</p>
    </aside>
  );
}

export default Aside;