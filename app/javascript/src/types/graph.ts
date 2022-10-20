/* グラフの表示データ */
export interface GraphData {
  series: GraphSeries[];
}

export interface GraphSeries {
  name: string;
  data: string;
  yAxis?: number;
}
