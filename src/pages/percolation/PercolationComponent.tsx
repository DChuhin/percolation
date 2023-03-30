import { getPercolationGrid, Site } from './percolationSelectors';
import { RootState } from 'app/redux/store';
import { open } from './percolationSlice';
import { connect } from 'react-redux';

import styles from './percolation.module.scss';

interface Props {
  sites: Site[][];
  open: typeof open;
}

const siteColors = {
  'OPEN': '#f8f5f5',
  'CLOSED': '#413939',
  'FULL': '#00ffff'
}

const getSiteStyle = (site: Site, n: number) => ({
  width: `${100/n}%`,
  backgroundColor: siteColors[site]
})

const PercolationComponent = ({ sites, open }: Props) => {
  const n = sites.length;
  const siteClick = (i: number, j: number) => () => open(i, j);
  return (
    <div className={styles.PercolationGrid}>
      {sites.map((row, i) => (
        <div className={styles.PercolationLine}>
          {row.map((site, j) => (
            <div className={styles.Site} style={getSiteStyle(site, n)} onClick={siteClick(i, j)} />
          ))}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  sites: getPercolationGrid(state),
});

export default connect(mapStateToProps, { open })(PercolationComponent);
