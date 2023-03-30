import Input from '../../ui-kit/input/Input';
import { connect } from 'react-redux';
import { initPercolation } from './percolationSlice';
import { useState } from 'react';
import Button from 'ui-kit/button/Button';

interface Props {
  initPercolation: typeof initPercolation;
}

const PercolationMenu = ({ initPercolation }: Props) => {
  const [size, setSize] = useState(8);
  return (
    <div>
      <Input value={size} label="Enter grid size" onChange={(e) => setSize(+e.target.value)} />
      <Button onClick={() => initPercolation(size)}>
        <span>Start</span>
      </Button>
    </div>
  );
};

export default connect(null, { initPercolation })(PercolationMenu);
