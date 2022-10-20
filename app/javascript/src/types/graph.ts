/* グラフの表示データ */
export interface GraphData {
  x_axis: XAxis;
  series: GraphSeries[];
}

export interface GraphSeries {
  name: string;
  data: string;
  yAxis?: number;
}

export interface XAxis {
  categories: string[];
}
