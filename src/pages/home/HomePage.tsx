import Menu from './components/menu/Menu';

import styles from './HelloPage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.HelloPage}>
      <Menu />
    </div>
  );
};

export default HomePage;
