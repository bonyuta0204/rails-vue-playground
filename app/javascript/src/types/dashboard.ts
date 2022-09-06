export type Widget = {
  id: number;
  x: number;
  y: number;
  h: number;
  w: number;
};

export type Dashboard = {
  id: number;
  name: string;
  widgets: Widget[];
};
export type Layout = {
  x: number;
  y: number;
  h: number;
  w: number;
  i: string;
}[];
