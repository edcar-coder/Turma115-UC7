import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Tema Rock</h1>
      <img 
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/2972281-simbolo-do-rock-n-roll-conceito-arte-do-rock-music-em-estilo-monocromatico-vetor.jpg" 
        alt="Banner do Tema Rock"
      />
    </header>
  );
}

export default Header;