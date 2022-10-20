import { GraphData } from "./graph";

export interface Widget {
  id: number;
  type: string;
  x: number;
  y: number;
  h: number;
  w: number;
}

export interface WidgetLayout {
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

export type LayoutItem = {
  x: number;
  y: number;
  h: number;
  w: number;
  i: string;
};

export type Layout = LayoutItem[];

export interface GraphWidget extends Widget {
  options: any;
  graph_data: GraphData;
}
