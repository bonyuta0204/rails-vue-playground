export type Widget = {
  id: number;
};

export type Dashboard = {
  id: number;
  name: string;
  widgets: Widget[];
};
