
// 图表实例化------------------
require.config({
	paths: {
		echarts: 'http://localhost/static/js'
	}
});


// 图表使用-------------------
var option1 = {
    title : {
        text: 'Full Load Cell (2x2) Throughput',
        //subtext: 'from global web index',
        x: 'left'
    },
    legend: {                                   // 图例配置
        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
        data: ['Downlink Th', 'Uplink Th'],
		x: 'right',
		y: 'bottom'
    },
    tooltip: {                                  // 气泡提示配置
        trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
    },
/*	
    xAxis: [                                    // 直角坐标系中横轴数组
        {
            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
            data: ['', '', '', '', '', '', '', '', '', '', '', '']
        }
    ],

*/
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type : 'category',
            boundaryGap : true,
            data : (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],


    yAxis: [                                    // 直角坐标系中纵轴数组
        {
            type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
            boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
            splitNumber: 4                      // 数值轴用，分割段数，默认为5
        }
    ],
    series: [
        {
            name: 'Downlink Th',                        // 系列名称
            type: 'line',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123]
        },
        {
            name: 'Uplink Th',                    // 系列名称
            type: 'line',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45, 123, 145, 526, 233, 343, 44, 829, 33, 123]
        }
    ]
};

var option2 = {
    title : {
        text: 'Full Load Cell (2x2) Fiber BW',
        //subtext: 'from global web index',
        x: 'left'
    },
    legend: {                                   // 图例配置
        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
        data: ['CPRI Th', 'DL Eth Th', 'UL Eth Th'],
        x: 'right',
		y: 'bottom'
    },
    tooltip: {                                  // 气泡提示配置
        trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
    },
	
    xAxis: [                                    // 直角坐标系中横轴数组
        {
            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
            data: ['']
        }
    ],
    yAxis: [                                    // 直角坐标系中纵轴数组
        {
            type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
            boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
            splitNumber: 4                      // 数值轴用，分割段数，默认为5
        }
    ],
    series: [
        {
            name: 'CPRI Th',                        // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [112]
        },
        {
            name: 'DL Eth Th',                    // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45]
        },
        {
            name: 'UL Eth Th',                    // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45]
        }
    ]
};

var labelTop = {
    normal : {
        label : {
            show : true,
            position : 'center',
            formatter : '{b}',
            textStyle: {
                baseline : 'bottom'
            }
        },
        labelLine : {
            show : false
        }
    }
};
var labelFromatter = {
    normal : {
        label : {
            formatter : function (a,b,c){return 100 - c + '%'},
            textStyle: {
                baseline : 'top'
            }
        }
    },
};
var labelBottom = {
    normal : {
        color: '#ccc',
        label : {
            show : true,
            position : 'center'
        },
        labelLine : {
            show : false
        }
    },
    emphasis: {
        color: 'rgba(0,0,0,0)'
    }
};
var radius = [30, 45];

option3 = {
    legend: {
        x : 'center',
        y : 'bottom',
        data:[
            'CPU1','CPU2'//,'CPU3','CPU4'
        ]
    },
    title : {
        text: 'Socket 0 CPU Utilization',
        //subtext: 'from global web index',
        x: 'left'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (a,b,c){return 'other\n' + c + '%\n'},
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
                {
                    type : 'pie',
                    center : ['30%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CORE1', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CORE2', value:22,itemStyle : labelTop}
                    ]
                }/*,
                {
                    type : 'pie',
                    center : ['70%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CPU3', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['80%', '50%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:83, itemStyle : labelBottom},
                        {name:'CPU4', value:17,itemStyle : labelTop}
                    ]
                }*/
    ]
};

var option4 = {
    title : {
        text: '12 Low/Aver Load Cells (4x4) Throughput',
        //subtext: 'from global web index',
        x: 'left'
    },
    legend: {                                   // 图例配置
        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
        data: ['Downlink Th', 'Uplink Th'],
        x: 'right',
		y: 'bottom'
    },
    tooltip: {                                  // 气泡提示配置
        trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
    },


/*	
    xAxis: [                                    // 直角坐标系中横轴数组
        {
            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
            data: ['', '', '', '', '', '', '', '', '', '', '', '']
        }
    ],
*/


    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            data : (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
        {
            type : 'category',
            boundaryGap : true,
            data : (function (){
                var res = [];
                var len = 10;
                while (len--) {
                    res.push(len + 1);
                }
                return res;
            })()
        }
    ],



    yAxis: [                                    // 直角坐标系中纵轴数组
        {
            type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
            boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
            splitNumber: 4                      // 数值轴用，分割段数，默认为5
        }
    ],
    series: [
        {
            name: 'Downlink Th',                        // 系列名称
            type: 'line',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
        },
        {
            name: 'Uplink Th',                    // 系列名称
            type: 'line',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45, 123, 145, 526, 233, 343, 44, 829, 33, 123, 45, 13]
        }
    ]
};

var option5 = {
    title : {
        text: '12 Low/Aver Load Cells (4x4) Fiber BW',
        //subtext: 'from global web index',
        x: 'left'
    },
    legend: {                                   // 图例配置
        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
        data: ['CPRI Th', 'DL Eth Th', 'UL Eth Th'],
        x: 'right',
		y: 'bottom'
    },
    tooltip: {                                  // 气泡提示配置
        trigger: 'item',                        // 触发类型，默认数据触发，可选为：'axis'
    },
	
    xAxis: [                                    // 直角坐标系中横轴数组
        {
            type: 'category',                   // 坐标轴类型，横轴默认为类目轴，数值轴则参考yAxis说明
            data: ['']
        }
    ],
    yAxis: [                                    // 直角坐标系中纵轴数组
        {
            type: 'value',                      // 坐标轴类型，纵轴默认为数值轴，类目轴则参考xAxis说明
            boundaryGap: [0.1, 0.1],            // 坐标轴两端空白策略，数组内数值代表百分比
            splitNumber: 4                      // 数值轴用，分割段数，默认为5
        }
    ],
    series: [
        {
            name: 'CPRI Th',                        // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [112]
        },
        {
            name: 'DL Eth Th',                    // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45]
        },
        {
            name: 'UL Eth Th',                    // 系列名称
            type: 'bar',                       // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
            data: [45]
        }
    ]
};

option6 = {
    legend: {
        x : 'center',
        y : 'center',
        data:[
            'CORE1','CORE2','CORE3','CORE4','CORE5', 'CORE6','CORE7','CORE8','CORE9'//,'CPU10'
        ]
    },
    title : {
        text: 'Socket 1 CPU Utilization',
        //subtext: 'from global web index',
        x: 'left'
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie'],
                option: {
                    funnel: {
                        width: '20%',
                        height: '30%',
                        itemStyle : {
                            normal : {
                                label : {
                                    formatter : function (a,b,c){return 'other\n' + c + '%\n'},
                                    textStyle: {
                                        baseline : 'middle'
                                    }
                                }
                            },
                        } 
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
                {
                    type : 'pie',
                    center : ['20%', '30%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CORE1', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['40%', '30%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CORE2', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['60%', '30%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'CORE3', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['80%', '30%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:83, itemStyle : labelBottom},
                        {name:'CORE4', value:17,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['10%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CORE5', value:11,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['30%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CORE6', value:11,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['50%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CORE7', value:11,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['70%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CORE8', value:11,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['90%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CORE9', value:11,itemStyle : labelTop}
                    ]
                }/*,
                {
                    type : 'pie',
                    center : ['90%', '70%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:89, itemStyle : labelBottom},
                        {name:'CPU10', value:11,itemStyle : labelTop}
                    ]
                }*/
    ]
};

// one cell
var myChart1;
var myChart2;
var myChart3;

//total cell
var myChart4;
var myChart5;
var myChart6;


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
	'echarts/chart/line',
	'echarts/chart/pie'
],
function(ec){
// srcipt标签式引入
myChart1 = ec.init(document.getElementById('main1'));

// 过渡---------------------
myChart1.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});

// ajax getting data...............

// ajax callback
myChart1.hideLoading();


myChart1.setOption(option1);

// 增加些数据------------------
/*option.legend.data.push('win');
option.series.push({
        name: 'win',                            // 系列名称
        type: 'line',                           // 图表类型，折线图line、散点图scatter、柱状图bar、饼图pie、雷达图radar
        data: [112, 23, 45, 56, 233, 343, 454, 89, 343, 123, 45, 123]
});
myChart.setOption(option);
*/
/*
// 图表清空-------------------
myChart.clear();

// 图表释放-------------------
myChart.dispose();
*/

// srcipt标签式引入
myChart2 = ec.init(document.getElementById('main2'));
// 过渡---------------------
myChart2.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});
// ajax getting data...............
// ajax callback
myChart2.hideLoading();
myChart2.setOption(option2);

// srcipt标签式引入
myChart3 = ec.init(document.getElementById('main3'));
// 过渡---------------------
myChart3.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});
// ajax getting data...............
// ajax callback
myChart3.hideLoading();
myChart3.setOption(option3);

// srcipt标签式引入
myChart4 = ec.init(document.getElementById('main4'));
// 过渡---------------------
myChart4.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});
// ajax getting data...............
// ajax callback
myChart4.hideLoading();
myChart4.setOption(option4);

// srcipt标签式引入
myChart5 = ec.init(document.getElementById('main5'));
// 过渡---------------------
myChart5.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});
// ajax getting data...............
// ajax callback
myChart5.hideLoading();
myChart5.setOption(option5);

// srcipt标签式引入
myChart6 = ec.init(document.getElementById('main6'));
// 过渡---------------------
myChart6.showLoading({
    text: '正在努力的读取数据中...',    //loading话术
});
// ajax getting data...............
// ajax callback
myChart6.hideLoading();
myChart6.setOption(option6);

}
);

// Phase data from socket       
               			
		try {
		      websocket = new WebSocket('ws://localhost:8000/ws');
		      websocket.onopen    = function (evt) { websocket.send('STARTTEST'); }; // handshake message to start the test
		      websocket.onclose   = function (evt) { console.log("Disconnected");  };
		      websocket.onmessage = function (evt) { 
				var msgType = 2;
				var msg = evt.data;
console.log(msg);
				var msgArray = msg.split(",");
				
                                var msg0 = msgArray[0];
				//
				//msg1~msg32 is one cell cpu Usage
				//
	                        var msg1 = msgArray[1];
                                var msg2 = msgArray[2];
	                        var msg3 = msgArray[3];
                                var msg4 = msgArray[4];
	                        var msg5 = msgArray[5];
                                var msg6 = msgArray[6];
	                        var msg7 = msgArray[7];
                                var msg8 = msgArray[8];
	                        var msg9 = msgArray[9];
                                var msg10 = msgArray[10];
	                        var msg11 = msgArray[11];
                                var msg12 = msgArray[12];
	                        var msg13 = msgArray[13];
                                var msg14 = msgArray[14];
	                        var msg15 = msgArray[15];
                                var msg16 = msgArray[16];
	                        var msg17 = msgArray[17];
                                var msg18 = msgArray[18];
	                        var msg19 = msgArray[19];
                                var msg20 = msgArray[20];
	                        var msg21 = msgArray[21];
                                var msg22 = msgArray[22];
	                        var msg23 = msgArray[23];
                                var msg24 = msgArray[24];
	                        var msg25 = msgArray[25];
                                var msg26 = msgArray[26];
	                        var msg27 = msgArray[27];
                                var msg28 = msgArray[28];
	                        var msg29 = msgArray[29];
                                var msg30 = msgArray[30];
	                        var msg31 = msgArray[31];
                                var msg32 = msgArray[32];

	                        var msg33 = msgArray[33];
                                var msg34 = msgArray[34];
	                        var msg35 = msgArray[35];
                                var msg36 = msgArray[36];
	                        var msg37 = msgArray[37];
                                var msg38 = msgArray[38];
	                        var msg39 = msgArray[39];
                                var msg40 = msgArray[40];
	                        


				var msg41 = msgArray[41];
				//
				//msg42~msg73 is total cell cpu Usage
				//
                                var msg42 = msgArray[42];
	                        var msg43 = msgArray[43];
                                var msg44 = msgArray[44];
	                        var msg45 = msgArray[45];
                                var msg46 = msgArray[46];
	                        var msg47 = msgArray[47];
                                var msg48 = msgArray[48];
	                        var msg49 = msgArray[49];
                                var msg50 = msgArray[50];
	                        var msg51 = msgArray[51];
                                var msg52 = msgArray[52];
	                        var msg53 = msgArray[53];
                                var msg54 = msgArray[54];
	                        var msg55 = msgArray[55];
                                var msg56 = msgArray[56];
	                        var msg57 = msgArray[57];
                                var msg58 = msgArray[58];
	                        var msg59 = msgArray[59];
                                var msg60 = msgArray[60];
	                        var msg61 = msgArray[61];
                                var msg62 = msgArray[62];
	                        var msg63 = msgArray[63];
                                var msg64 = msgArray[64];
	                        var msg65 = msgArray[65];
                                var msg66 = msgArray[66];
	                        var msg67 = msgArray[67];
                                var msg68 = msgArray[68];
	                        var msg69 = msgArray[69];
                                var msg70 = msgArray[70];
	                        var msg71 = msgArray[71];
                                var msg72 = msgArray[72];
	                        var msg73 = msgArray[73];

                                var msg74 = msgArray[74];
	                        var msg75 = msgArray[75];
                                var msg76 = msgArray[76];
	                        var msg77 = msgArray[77];
                                var msg78 = msgArray[78];
	                        var msg79 = msgArray[79];
				var msg80 = msgArray[80];
	                        var msg81 = msgArray[81];


				var oneCell_cpuNum = msg0;
				//
				//msg1~msg32 is one cell cpu Usage
				//
				var oneCell_totalCpuUsage = msg33;
				var oneCell_nSectorNum = msg34;
				var oneCell_nAntennaNum = msg35;
				var oneCell_ulThroughput = msg36;
				var oneCell_dlThroughput = msg37;
				var oneCell_cpriLinkRate = msg38;
				var oneCell_ulEthernetTH = msg39;
				var oneCell_dlEthernetTH = msg40;
console.log(oneCell_cpuNum);
console.log(oneCell_ulThroughput);
console.log(oneCell_dlThroughput);
console.log(oneCell_cpriLinkRate);
console.log(oneCell_ulEthernetTH);
console.log(oneCell_dlEthernetTH);


				var totalCell_cpuNum = msg41;
				//
				//msg42~msg73 is total cell cpu Usage
				//
				var totalCell_totalCpuUsage = msg74;
				var totalCell_nSectorNum = msg75;
				var totalCell_nAntennaNum = msg76;
				var totalCell_ulThroughput = msg77;
				var totalCell_dlThroughput = msg78;
				var totalCell_cpriLinkRate = msg79;
				var totalCell_ulEthernetTH = msg80;
				var totalCell_dlEthernetTH = msg81;
console.log(totalCell_cpuNum);
console.log(totalCell_ulThroughput);
console.log(totalCell_dlThroughput);
console.log(totalCell_cpriLinkRate);
console.log(totalCell_ulEthernetTH);
console.log(totalCell_dlEthernetTH);


var timeTicket;
var axisData;
//clearInterval(timeTicket);
//timeTicket = setInterval(function (){
//    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');


//myChart1
				myChart1.addData([
                                [
                                   0,        // 系列索引
                                   oneCell_dlThroughput,
                                   false,     // 新增数据是否从队列头部插入
                                   false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//				   axisData
                                 ],
                                 [
                                   1,        // 系列索引
                                   oneCell_ulThroughput, // 新增数据
                                   false,    // 新增数据是否从队列头部插入
                                   false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
				   axisData
                                 ]
                               ]);

//mychart4
				myChart4.addData([
                                [
                                   0,        // 系列索引
                                   totalCell_dlThroughput,
                                   false,     // 新增数据是否从队列头部插入
                                   false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ],
                                 [
                                   1,        // 系列索引
                                   totalCell_ulThroughput, // 新增数据
                                   false,    // 新增数据是否从队列头部插入
                                   false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
				   axisData
                                 ]
                               ]);

//});


//myChart2

				myChart2.addData([
                                [
                                   0,        // 系列索引
                                   oneCell_cpriLinkRate,
                                   true,     // 新增数据是否从队列头部插入
                                   false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ],
                                 [
                                   1,        // 系列索引
                                   oneCell_dlEthernetTH, // 新增数据
                                   true,    // 新增数据是否从队列头部插入
                                   false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ],
				[
                                   2,        // 系列索引
                                   oneCell_ulEthernetTH, // 新增数据
                                   true,    // 新增数据是否从队列头部插入
                                   false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ]
                               ]);

//myChart3

                               option3.series[0].data[0].value = 100-msg1;
                               option3.series[0].data[1].value = msg1;
                               option3.series[1].data[0].value = 100-msg2;
                               option3.series[1].data[1].value = msg2;

//                               option3.series[2].data[0].value = 100-msg3;
//                               option3.series[2].data[1].value = msg3;
//                               option3.series[3].data[0].value = 100-msg4;
//                               option3.series[3].data[1].value = msg4;
                               myChart3.setOption(option3,true);


//myChart5
				myChart5.addData([
                                [
                                   0,        // 系列索引
                                   totalCell_cpriLinkRate,
                                   true,     // 新增数据是否从队列头部插入
                                   false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ],
                                 [
                                   1,        // 系列索引
                                   totalCell_ulEthernetTH, // 新增数据
                                   true,    // 新增数据是否从队列头部插入
                                   false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ],
				[
                                   2,        // 系列索引
                                   totalCell_ulEthernetTH, // 新增数据
                                   true,    // 新增数据是否从队列头部插入
                                   false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                                 ]
                               ]);
//chart6
                               option6.series[0].data[0].value = 100-msg42;
                               option6.series[0].data[1].value = msg42;
                               option6.series[1].data[0].value = 100-msg43;
                               option6.series[1].data[1].value = msg43;
                               option6.series[2].data[0].value = 100-msg44;
                               option6.series[2].data[1].value = msg44;
                               option6.series[3].data[0].value = 100-msg45;
                               option6.series[3].data[1].value = msg45;
                               option6.series[4].data[0].value = 100-msg46;
                               option6.series[4].data[1].value = msg46;

                               option6.series[5].data[0].value = 100-msg47;
                               option6.series[5].data[1].value = msg47;
                               option6.series[6].data[0].value = 100-msg48;
                               option6.series[6].data[1].value = msg48;
                               option6.series[7].data[0].value = 100-msg49;
                               option6.series[7].data[1].value = msg49;
                               option6.series[8].data[0].value = 100-msg50;
                               option6.series[8].data[1].value = msg50;
//                               option6.series[9].data[0].value = 100-msg51;
//                               option6.series[9].data[1].value = msg51;

                               myChart6.setOption(option6,true);

	               };

		      websocket.onerror   = function (evt) { alert('liqiang for test error'); };
		} catch (exc) {
		     elart(exc.message);
		}

function AddCell(){
	var tType = document.getElementById("input1").value;
	websocket.send(tType);
};

function CloseCell(){
	var tType = document.getElementById("input2").value;
	websocket.send(10+tType);
};

/*var CellNo = 12; 
function AddCell(){ 
	var tType = document.getElementById("input1").value; 
	websocket.send(tType); 
	CellNo = CellNo + 1; 
	if (CellNo > 12) { 
			CellNo = 12; 
	} 
	option4.title.text = CellNo.toString() + ' Low/Aver Load Cells (4x4) Throughput'; 
	option5.title.text = CellNo.toString() + ' Low/Aver Load Cells (4x4) Fiber BW'; 
	myChart4.setOption(option4,true); 
	myChart5.setOption(option5,true); 
};  

function CloseCell(){ 
	var tType = document.getElementById("input2").value; 
	websocket.send(10+tType); 
	CellNo = CellNo - 1; 
	if (CellNo < 0) { 
			CellNo = 0; 
	} 
	option4.title.text = CellNo.toString() + ' Low/Aver Load Cells (4x4) Throughput'; 
	option5.title.text = CellNo.toString() + ' Low/Aver Load Cells (4x4) Fiber BW'; 
	myChart4.setOption(option4,true); 
	myChart5.setOption(option5,true); 
};*/


