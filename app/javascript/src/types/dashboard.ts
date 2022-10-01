export interface Widget {
  id: number;
  x: number;
  y: number;
  h: number;
  w: number;
}

export interface Dashboard {
  id: number;
  name: string;
  widgets: Widget[];
}
export type Layout = {
  x: number;
  y: number;
  h: number;
  w: number;
  i: string;
}[];
