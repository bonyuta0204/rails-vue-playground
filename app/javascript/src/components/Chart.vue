<template>
  <div class="container">
    <div class="chart_wrapper">
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div id="monaco" class="editor_body"></div>
  </div>
</template>

<script lang="ts">
import * as monaco from "monaco-editor";
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { Chart } from "highcharts-vue";

export default defineComponent({
  components: {
    highcharts: Chart,
  },
  setup() {
    let editor: monaco.editor.IStandaloneCodeEditor | null = null;

    onMounted(() => {
      const editorElement = document.getElementById("monaco");

      editor = monaco.editor.create(editorElement, {
        value: chartOption.value,
        language: "javascript",
      });

      editor.onDidChangeModelContent(function (e) {
        const value = editor.getModel().getValue()
        chartOption.value = value
      });
      console.log(editor);
    });

    const chartOption = ref("{series: [{data: [1,2,3]}]}");

    const chartOptions = {
      series: [
        {
          data: [1, 2, 3],
        },
      ],
    };

    return { chartOptions };
  },
});
</script>

<style scoped>
.container {
  display: flex;
}

.chart_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 45vh;
}

.editor_body {
  width: 50%;
  height: 45vh;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>
