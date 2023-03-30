import { useNavigate } from 'react-router-dom';
import Button from 'ui-kit/button/Button';

import styles from './Menu.module.scss';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Menu}>
      <Button onClick={() => navigate('/percolation')}>
        <span>Percolation</span>
      </Button>
      <Button onClick={() => navigate('/test')}>
        <span>Test</span>
      </Button>
    </div>
  );
};

export default Menu;
