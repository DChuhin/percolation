import { getUnionFind, UnionFind } from 'util/unionFind/UnionFind';

export interface Percolation {
  open: (row: number, col: number) => void;
  isOpen: (row: number, col: number) => boolean;
  isFull: (row: number, col: number) => boolean;
  percolates: () => boolean;
}

export function getPercolation(n: number): Percolation {
  return new PercolationImpl(n);
}

class PercolationImpl implements Percolation {
  private readonly sites: boolean[][];
  private readonly uf: UnionFind;
  private readonly virtualTop: number;
  private readonly virtualBottom: number;

  constructor(private readonly n: number) {
    this.sites = [];
    for (let i = 0; i < n; i++) {
      const line: boolean[] = [];
      for (let j = 0; j < n; j++) {
        line.push(false);
      }
      this.sites.push(line);
    }
    this.uf = getUnionFind(n * n + 2);
    this.virtualTop = n * n;
    this.virtualBottom = this.virtualTop + 1;
  }

  isFull(row: number, col: number): boolean {
    const p = row * this.n + col;
    // wrong impl, if site is open with virtualTop only via virtualBottom it is not full
    return this.isOpen(row, col) && this.uf.find(p) == this.uf.find(this.virtualTop);
  }

  isOpen(row: number, col: number): boolean {
    return this.sites[row][col];
  }

  open(row: number, col: number): void {
    if (!this.sites[row][col]) {
      this.sites[row][col] = true;
      const p = row * this.n + col;
      if (row == 0) {
        this.uf.union(this.virtualTop, p);
      }
      if (row == this.n - 1) {
        this.uf.union(this.virtualBottom, p);
      }
      if (row > 0 && this.isOpen(row - 1, col)) {
        const q = (row - 1) * this.n + col;
        this.uf.union(p, q);
      }
      if (row < this.n - 1 && this.isOpen(row + 1, col)) {
        const q = (row + 1) * this.n + col;
        this.uf.union(p, q);
      }
      if (col > 0 && this.isOpen(row, col - 1)) {
        const q = row * this.n + col - 1;
        this.uf.union(p, q);
      }
      if (col < this.n - 1 && this.isOpen(row, col + 1)) {
        const q = row * this.n + col + 1;
        this.uf.union(p, q);
      }
    }
  }

  percolates(): boolean {
    return this.uf.find(this.virtualTop) === this.uf.find(this.virtualBottom);
  }
}
