<template>
  <el-row :gutter="24">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>

    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart1"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart2"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>
  </el-row>

  <el-divider border-style="double"></el-divider>

  <el-row :gutter="24">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart3"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>

    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart4"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <div
          id="myChart5"
          :style="{ width: '300px', height: '300px' }"
        ></div></div
    ></el-col>
  </el-row>

  <!-- <div id="myChart" :style="{ width: '300px', height: '300px' }"></div> -->
</template>

<script>
export default {
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    //this.$root => app
    console.log(this.echarts);
    let myChart = this.$echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
      title: { text: "总用户量" },
      tooltip: {},
      xAxis: {
        data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      },
      yAxis: {},
      series: [
        {
          name: "用户量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });

    let option = {
      xAxis: {
        scale: true,
      },
      yAxis: {
        scale: true,
      },
      series: [
        {
          type: "effectScatter",
          symbolSize: 20,
          data: [
            [172.7, 105.2],
            [153.4, 42],
          ],
        },
        {
          type: "scatter",
          // prettier-ignore
          data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ],
        },
      ],
    };
    myChart = this.$echarts.init(document.getElementById("myChart1"));
    myChart.setOption(option);

    option = {
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [15, 70],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 2,
          },
          data: [
            { value: 40, name: "rose 1" },
            { value: 38, name: "rose 2" },
            { value: 32, name: "rose 3" },
            { value: 30, name: "rose 4" },
            { value: 28, name: "rose 5" },
            { value: 26, name: "rose 6" },
            { value: 22, name: "rose 7" },
            { value: 18, name: "rose 8" },
          ],
        },
      ],
    };

    myChart = this.$echarts.init(document.getElementById("myChart2"));
    myChart.setOption(option);

    // option = {
    //   series: [
    //     {
    //       name: "hour",
    //       type: "gauge",
    //       startAngle: 90,
    //       endAngle: -270,
    //       min: 0,
    //       max: 12,
    //       splitNumber: 12,
    //       clockwise: true,
    //       axisLine: {
    //         lineStyle: {
    //           width: 15,
    //           color: [[1, "rgba(0,0,0,0.7)"]],
    //           shadowColor: "rgba(0, 0, 0, 0.5)",
    //           shadowBlur: 15,
    //         },
    //       },
    //       splitLine: {
    //         lineStyle: {
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 3,
    //           shadowOffsetX: 1,
    //           shadowOffsetY: 2,
    //         },
    //       },
    //       axisLabel: {
    //         fontSize: 15,
    //         distance: 25,
    //         formatter: function (value) {
    //           if (value === 0) {
    //             return "";
    //           }
    //           return value + "";
    //         },
    //       },
    //       anchor: {
    //         show: true,
    //         icon: "path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z",
    //         showAbove: false,
    //         offsetCenter: [0, "-35%"],
    //         size: 50,
    //         keepAspect: true,
    //         itemStyle: {
    //           color: "#707177",
    //         },
    //       },
    //       pointer: {
    //         icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
    //         width: 12,
    //         length: "55%",
    //         offsetCenter: [0, "8%"],
    //         itemStyle: {
    //           color: "#C0911F",
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 8,
    //           shadowOffsetX: 2,
    //           shadowOffsetY: 4,
    //         },
    //       },
    //       detail: {
    //         show: false,
    //       },
    //       title: {
    //         offsetCenter: [0, "30%"],
    //       },
    //       data: [
    //         {
    //           value: 0,
    //         },
    //       ],
    //     },
    //     {
    //       name: "minute",
    //       type: "gauge",
    //       startAngle: 90,
    //       endAngle: -270,
    //       min: 0,
    //       max: 60,
    //       clockwise: true,
    //       axisLine: {
    //         show: false,
    //       },
    //       splitLine: {
    //         show: false,
    //       },
    //       axisTick: {
    //         show: false,
    //       },
    //       axisLabel: {
    //         show: false,
    //       },
    //       pointer: {
    //         icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
    //         width: 8,
    //         length: "70%",
    //         offsetCenter: [0, "8%"],
    //         itemStyle: {
    //           color: "#C0911F",
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 8,
    //           shadowOffsetX: 2,
    //           shadowOffsetY: 4,
    //         },
    //       },
    //       anchor: {
    //         show: true,
    //         size: 20,
    //         showAbove: false,
    //         itemStyle: {
    //           borderWidth: 15,
    //           borderColor: "#C0911F",
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 8,
    //           shadowOffsetX: 2,
    //           shadowOffsetY: 4,
    //         },
    //       },
    //       detail: {
    //         show: false,
    //       },
    //       title: {
    //         offsetCenter: ["0%", "-40%"],
    //       },
    //       data: [
    //         {
    //           value: 0,
    //         },
    //       ],
    //     },
    //     {
    //       name: "second",
    //       type: "gauge",
    //       startAngle: 90,
    //       endAngle: -270,
    //       min: 0,
    //       max: 60,
    //       animationEasingUpdate: "bounceOut",
    //       clockwise: true,
    //       axisLine: {
    //         show: false,
    //       },
    //       splitLine: {
    //         show: false,
    //       },
    //       axisTick: {
    //         show: false,
    //       },
    //       axisLabel: {
    //         show: false,
    //       },
    //       pointer: {
    //         icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
    //         width: 4,
    //         length: "85%",
    //         offsetCenter: [0, "8%"],
    //         itemStyle: {
    //           color: "#C0911F",
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 8,
    //           shadowOffsetX: 2,
    //           shadowOffsetY: 4,
    //         },
    //       },
    //       anchor: {
    //         show: true,
    //         size: 15,
    //         showAbove: true,
    //         itemStyle: {
    //           color: "#C0911F",
    //           shadowColor: "rgba(0, 0, 0, 0.3)",
    //           shadowBlur: 8,
    //           shadowOffsetX: 2,
    //           shadowOffsetY: 4,
    //         },
    //       },
    //       detail: {
    //         show: false,
    //       },
    //       title: {
    //         offsetCenter: ["0%", "-40%"],
    //       },
    //       data: [
    //         {
    //           value: 0,
    //         },
    //       ],
    //     },
    //   ],
    // };
    // setInterval(function () {
    //   var date = new Date();
    //   var second = date.getSeconds();
    //   var minute = date.getMinutes() + second / 60;
    //   var hour = (date.getHours() % 12) + minute / 60;
    //   option.animationDurationUpdate = 300;
    //   myChart.setOption({
    //     series: [
    //       {
    //         name: "hour",
    //         animation: hour !== 0,
    //         data: [{ value: hour }],
    //       },
    //       {
    //         name: "minute",
    //         animation: minute !== 0,
    //         data: [{ value: minute }],
    //       },
    //       {
    //         animation: second !== 0,
    //         name: "second",
    //         data: [{ value: second }],
    //       },
    //     ],
    //   });
    // }, 1000);

    myChart = this.$echarts.init(document.getElementById("myChart3"));
    myChart.setOption(option);

    option = {
      // title: {
      //   text: "Basic Radar Chart",
      // },
      legend: {
        data: ["Allocated Budget", "Actual Spending"],
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: "Sales", max: 6500 },
          { name: "Administration", max: 16000 },
          { name: "Information Technology", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Marketing", max: 25000 },
        ],
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget",
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending",
            },
          ],
        },
      ],
    };

    myChart = this.$echarts.init(document.getElementById("myChart4"));
    myChart.setOption(option);

    myChart = this.$echarts.init(document.getElementById("myChart5"));
    myChart.setOption(option);
  },
};
</script>

<!-- <style scoped lang="scss"> -->
<style scoped>
.chart {
  height: 400px;
}
/* .el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
} */
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>