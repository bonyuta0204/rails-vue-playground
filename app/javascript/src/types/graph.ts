/* グラフの表示データ */
export interface GraphData {
  xAxis: XAxis;
  series: GraphSeries[];
}

export interface GraphSeries {
  name: string;
  data: string;
  yAxis?: number;
}

export interface XAxis {}
