import React from 'react';
import styles from './App.module.scss';
import AppRouter from './app/router/AppRouter';

function App() {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
}

export default App;
