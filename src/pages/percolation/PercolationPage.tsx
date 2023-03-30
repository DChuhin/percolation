import PercolationComponent from './PercolationComponent';

import styles from './percolation.module.scss';
import PercolationMenu from './PercolationMenu';

const PercolationPage = () => (
  <div className={styles.PercolationPage}>
    <div className={styles.PercolationSidePanel}>
      <PercolationMenu />
    </div>
    <PercolationComponent />
    <div className={styles.PercolationSidePanel} />
  </div>
);

export default PercolationPage;
