<template>
  <div class="container">
    <div class="chart_wrapper">
      <highcharts key="uid" :options="chartOptions"></highcharts>
    </div>
    <div class="editor_wrapper">
      <div class="tool_bar">
        <button @click="onClickApply">適用</button>
      </div>
      <div id="monaco" class="editor_body"></div>
    </div>
  </div>
</template>

<script lang="ts">
import * as monaco from "monaco-editor";
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import seriesLabel from "highcharts/modules/series-label";

const defaultOption = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "",
  },
  yAxis: [
    {
      title: {
        text: "",
      },
      labels: {
        style: {
          fontSize: "8px",
        },
      },
    },
    {
      title: {
        text: "",
      },
      opposite: true,
      visible: false,
    },
  ],
  xAxis: {
    title: {
      text: "",
    },
    categories: ["05/23", "05/24", "05/25", "05/26", "05/27"],
    labels: {
      style: {
        fontSize: "8px",
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "目標",
      type: "column",
      data: [
        {
          y: 33,
          color: "#5fbeeb",
        },
        {
          y: 33,
          color: "#5fbeeb",
        },
        {
          y: 33,
          color: "#5fbeeb",
        },
        {
          y: 33,
          color: "#5fbeeb",
        },
        {
          y: 33,
          color: "#FFC7C4",
        },
      ],
    },
    {
      name: "実績",
      type: "line",
      data: [29, 29, 29, 29, 45],
      color: "#FFC7C4",
      marker: {
        enabled: false,
      },
    },
  ],
  plotOptions: {
    series: {
      animation: false,
    },
  },
  tooltip: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    headerFormat:
      '<div style="align-items:center;color:{point.color};display:flex;flex-direction:column;gap:2px;">\n              <span style="font-size:8px;letter-spacing:-1px;">{point.key}</span>',
    pointFormat:
      '<span style=\\"color:{point.color};font-size:16px\\"><b>{point.y}</b></span>',
    footerFormat: "</div>",
    shadow: false,
    shape: "square",
    stickOnContact: true,
    useHTML: true,
  },
};

export default defineComponent({
  components: {
    highcharts: Chart,
  },
  setup() {
    seriesLabel(Highcharts);

    let editor: monaco.editor.IStandaloneCodeEditor | null = null;

    onMounted(() => {
      const editorElement = document.getElementById("monaco");

      editor = monaco.editor.create(editorElement, {
        value: chartOption.value,
        language: "json",
      });
    });

    const chartOption = ref(JSON.stringify(defaultOption, null, 2));

    const onClickApply = () => {
      const chatOptionString = editor.getModel().getValue();

      const applyCommand = `chartOptions.value = ${chatOptionString}`;

      eval(applyCommand);
    };

    const chartOptions = ref(defaultOption);

    return { chartOptions, onClickApply };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  height: calc(100vh - 40px);
}

.chart_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 45vh;
}

.editor_body {
  height: 100%;
}

.tool_bar {
  padding-left: 60px;
  height: 30px;
}
.editor_wrapper {
  width: 50%;
  height: 100%;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
