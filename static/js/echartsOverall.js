/*
// 图表实例化------------------
require.config({
	paths: {
		echarts: './js'
	}
});
*/

// 图表使用-------------------
var option = {
	title:{
		text: '营业厅排名'
	},
    legend: {                                   // 图例配置
        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
        data: ['人数1', '人数2']
    },
    tooltip: {                                  // 气泡提示配置
        trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
    },
	toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis: [                                    // 直角坐标系中横轴数组
        {
            type: 'value',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
            boundaryGap: [0, 0.01]
			//data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    ],
    yAxis: [                                    // 直角坐标系中纵轴数组
        {
            type: 'category',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
            //boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
            //splitNumber: 4                      // 数值轴用，分割段数，默认为5
			data: ['A营业厅','B营业厅','C营业厅','D营业厅','E营业厅','F营业厅','G营业厅']
        }
    ],
    series: [
        {
            name: '人数1',                        // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
        },
        {
            name: '人数2',                    // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45, 123, 145, 526, 233, 343, 44, 829, 33, 123, 45, 13]
        }
    ]
};

require.config({
            packages: [
                {
                    name: 'echarts',
                    location: './js',
                    main: 'echarts'
                },
                {
                    name: 'zrender',
                    location: 'http://ecomfe.github.io/zrender/src',
                    //location: '../../../zrender/src',
                    main: 'zrender'
                }
            ]
        });

require(
[
	'echarts',
	'echarts/chart/bar',
	'echarts/chart/line'
],
function(ec){
// srcipt标签式引入
var myChart = ec.init(document.getElementById('main_chart'));

// 过渡---------------------
myChart.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});

// ajax getting data...............

// ajax callback
myChart.hideLoading();


myChart.setOption(option);

// 增加些数据------------------
option.legend.data.push('win');
option.series.push({
        name: 'win',                            // 系列名称
        type: 'line',                           // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
        data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
});
myChart.setOption(option);

/*
// 图表清空-------------------
myChart.clear();

// 图表释放-------------------
myChart.dispose();
*/
}
);