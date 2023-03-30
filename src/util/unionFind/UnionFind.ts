export interface UnionFind {
  union: (p: number, q: number) => void;

  find: (p: number) => number;
}

export function getUnionFind(n: number): UnionFind {
  return new QuickUnion(n);
}

class QuickUnion implements UnionFind {
  private readonly id: number[];
  private readonly sz: number[];

  constructor(private readonly n: number) {
    this.id = [];
    this.sz = [];
    for (let i = 0; i < n; i++) {
      this.id.push(i);
      this.sz.push(1);
    }
  }

  find(i: number): number {
    while (this.id[i] != i) {
      this.id[i] = this.id[this.id[i]]; // path compression optimization. Element is still under same root
      i = this.id[i];
    }
    return i;
  }

  union(p: number, q: number): void {
    const pid = this.find(p);
    const qid = this.find(q);
    if (this.sz[pid] < this.sz[qid]) {
      this.id[pid] = qid;
      this.sz[qid] += this.sz[pid];
    } else {
      this.id[qid] = pid;
      this.sz[pid] += this.sz[qid];
    }
  }
}
