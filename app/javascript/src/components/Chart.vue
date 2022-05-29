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
    });

    const chartOption = ref("{series: [{data: [1,2,3]}]}");

    const onClickApply = () => {
      const chatOptionString = editor.getModel().getValue();

      const applyCommand = `chartOptions.value = ${chatOptionString}`;

      eval(applyCommand);
    };

    const chartOptions = ref({
      series: [
        {
          data: [1, 2, 3],
        },
      ],
    });

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
