url = location.host;

require.config({
	paths: {
		echarts: '../static/js'
	}
});

function clone(myObj){ 
	if(typeof(myObj) != 'object') return myObj; 
	if(myObj == null) return myObj; 
	var myNewObj = {}; 
	if(myObj.constructor == Array){   
		myNewObj = [];   
	}   
	for(var i in myObj) 
		myNewObj[i] = clone(myObj[i]);
	return myNewObj; 
}

var option1 = new Object();
var option2 = new Object();
var option3 = new Object();
var option4 = new Object();
var option5 = new Object();
var option6 = new Object();

option1 = {
	series : [
		{
			name:'Downlink Total Throughput',
			type:'gauge',
			center : ['50%', '50%'],
			z: 3,
			min:0,
			max:3,
			splitNumber:6,
			radius: '90%',
			axisLine: {            // 坐标轴线
				lineStyle: {       // 属性lineStyle控制线条样式
					width: 10,
					color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']]
				}
			},
			axisTick: {            // 坐标轴小标记
				length :15,        // 属性length控制线长
				lineStyle: {       // 属性lineStyle控制线条样式
					color: 'auto'
				}
			},
			splitLine: {           // 分隔线
				length :20,         // 属性length控制线长
				lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			title : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				},
				offsetCenter: [0, '120%'],
				show: true
			},
			detail : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data:[{value: 1.50, name: 'DL Total (Gbps)'}]
		}
	]
};

option2 = {
	series : [
		{
			name:'Ethernet Tx Throughput',
			type:'gauge',
			center : ['50%', '50%'],
			z: 3,
			min:0,
			max:20,
			splitNumber:5,
			radius: '90%',
			axisLine: {            // 坐标轴线
				lineStyle: {       // 属性lineStyle控制线条样式
					color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
					width: 10
				}
			},
			axisTick: {            // 坐标轴小标记
				length :15,        // 属性length控制线长
				lineStyle: {       // 属性lineStyle控制线条样式
					color: 'auto'
				}
			},
			splitLine: {           // 分隔线
				length :20,         // 属性length控制线长
				lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			title : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				},
				offsetCenter: [0, '120%'],
				show: true
			},
			detail : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data:[{value: 1.50, name: 'Enet TX (Gbps)'}]
		}
	]
};

option3 = {
	series : [
		{
			name:'Uplink Total Throughput',
			type:'gauge',
			center : ['50%', '50%'],
			z: 3,
			min:0,
			max:3,
			splitNumber:6,
			radius: '90%',
			axisLine: {            // 坐标轴线
				lineStyle: {       // 属性lineStyle控制线条样式
					color:  [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
					width: 10
				}
			},
			axisTick: {            // 坐标轴小标记
				length :15,        // 属性length控制线长
				lineStyle: {       // 属性lineStyle控制线条样式
					color: 'auto'
				}
			},
			splitLine: {           // 分隔线
				length :20,         // 属性length控制线长
				lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			title : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				},
				offsetCenter: [0, '120%'],
				show: true
			},
			detail : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data:[{value: 1.50, name: 'UL Total (Gbps)'}]
		}
	]
};

option4 = {
	series : [
		{
			name:'Ethernet Rx Throughput',
			type:'gauge',
			center : ['50%', '50%'],
			z: 3,
			min:0,
			max:20,
			splitNumber:5,
			radius: '90%',
			axisLine: {            // 坐标轴线
				lineStyle: {       // 属性lineStyle控制线条样式
					color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']],
					width: 10
				}
			},
			axisTick: {            // 坐标轴小标记
				length :15,        // 属性length控制线长
				lineStyle: {       // 属性lineStyle控制线条样式
					color: 'auto'
				}
			},
			splitLine: {           // 分隔线
				length :20,         // 属性length控制线长
				lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					color: 'auto'
				}
			},
			title : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 20,
					fontStyle: 'italic'
				},
				offsetCenter: [0, '120%'],
				show: true
			},
			detail : {
				textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder'
				}
			},
			data:[{value: 1.50, name: 'Enet RX (Gbps)'}]
		}
	]
};

option5 = {
	title: {
		x: 'center',
		text: 'Processing Delay',
		textStyle: {
			fantFamily: 'Microsoft YaHei',
			fontSize: 20,
			fontWeight: 'bolder'
		}
	},
	tooltip : {
		trigger: 'axis',
		formatter: "Delay : {c} us",
		textStyle: {
			fontSize: 20
		}
	},
	legend: {
		x: 'right',
		y: 'bottom',
		data:['Processing Delay (us)']
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis : [
		{
			type : 'category',
			boundaryGap : false,
			data : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		}
	],
	yAxis : [
		{
			type : 'value',
			min: 0,
			max: 800
		}
	],
	series : [
		{
			name:'Processing Delay (us)',
			type:'line',
			stack: 'Total',
			itemStyle: {normal: {areaStyle: {type: 'default'}}},
			data:[640, 420, 650, 370, 669, 574, 675, 769, 674, 475]
		}
	]
};

//var boundVal = 448;
var boundVal = 2528;
var interVal = 224;
var consDataDef0 = [[0,0]];
var consDataDef1 = [[0,0]];
option6 = {
	title : {
		x:'center',
		text: ' Constellation',
		textStyle: {
			fantFamily: 'Microsoft YaHei',
			fontSize: 20,
			fontWeight: 'bolder'
		}
	},
	grid: {
		left: '1%',
		right: '1%',
		bottom: '1%',
		containLabel: true
	},
	tooltip : {
		trigger: 'item',
		showDelay : 0,
		formatter: function(params){
			return 'X: ' + params.value[0] + '&nbsp;&nbsp;&nbsp;&nbsp;' + 'Y: ' + params.value[1];
		},
		axisPointer:{
			show: true,
			type : 'cross',
			lineStyle: {
				type : 'dashed',
				width : 0.5
			}
		},
		textStyle: {
			fontSize: 20
		}
	},
	xAxis : [
		{
			type : 'value',
			scale:false,
			min: -boundVal,
			max: boundVal,
			splitNumber: 4,
			axisLabel: {
				show: false
			},
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}
		}
	],
	yAxis : [
		{
			type : 'value',
			scale:false,
			min: -boundVal,
			max: boundVal,
			splitNumber: 4,
			axisLabel: {
				show: false
			},
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}			
		}
	],
	series : [
		{
			type:'scatter',
			data: consDataDef0,
		}
	],
	animation: false
};


// Charts:
var myChart1;
var myChart2;
var myChart3;
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
			main: 'zrender'
		}
	]
});

var gray;
require(
	[	
		'echarts/theme/gray'
	],
	function(theme){
		gray = theme;
	}
);

var mint;
require(
	[	
		'echarts/theme/mint'
	],
	function(theme){
		mint = theme;
	}
);

var blue;
require(
	[	
		'echarts/theme/blue'
	],
	function(theme){
		blue = theme;
	}
);

require(
	[
		'echarts',
		'echarts/chart/bar',
		'echarts/chart/line',
		'echarts/chart/pie',
		'echarts/chart/scatter',
		'echarts/chart/gauge',
	],
	function(ec){
		//Chart1
		myChart1 = ec.init(document.getElementById('main1'));
		myChart1.showLoading({
			text: 'Loading...',
		});
		myChart1.hideLoading();
		myChart1.setOption(option1);

		//Chart2
		myChart2 = ec.init(document.getElementById('main2'));
		myChart2.showLoading({
			text: 'Loading...',
		});
		myChart2.hideLoading();
		myChart2.setOption(option2);

		//Chart3
		myChart3 = ec.init(document.getElementById('main3'));
		myChart3.showLoading({
			text: 'Loading...',
		});
		myChart3.hideLoading();
		myChart3.setOption(option3);

		//Chart4
		myChart4 = ec.init(document.getElementById('main4'));
		myChart4.showLoading({
			text: 'Loading...',
		});
		myChart4.hideLoading();
		myChart4.setOption(option4);

		//Chart5
		myChart5 = ec.init(document.getElementById('main5'),blue);
		myChart5.showLoading({
			text: 'Loading...',
		});
		myChart5.hideLoading();
		myChart5.setOption(option5);

		//Chart6
		myChart6 = ec.init(document.getElementById('main6'),blue);
		myChart6.showLoading({
			text: 'Loading...',
		});
		myChart6.hideLoading();
		myChart6.setOption(option6);
	}
);


setInterval(function () {
	// gauge
	var dlTotThUpd = Math.random() * 3;
	var nTxEthernetThUpd = Math.random() * 20;
	var ulTotThUpd = Math.random() * 3;
	var nRxEthernetThUpd = Math.random() * 20;
	option1.series[0].data[0].value = parseFloat(dlTotThUpd).toFixed(2);
	myChart1.setOption(option1);
	option2.series[0].data[0].value = parseFloat(nTxEthernetThUpd).toFixed(1);
	myChart2.setOption(option2);
	option3.series[0].data[0].value = parseFloat(ulTotThUpd).toFixed(2);
	myChart3.setOption(option3);
	option4.series[0].data[0].value = parseFloat(nRxEthernetThUpd).toFixed(1);
	myChart4.setOption(option4);

	// line chart
	var timePhyUpd = Math.floor(Math.random() * 500 + 300);
	var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'')
	myChart5.addData([[0,Math.round(timePhyUpd), false, false, axisData]]);

	// constellation graph
	var EVM = 0.20;
	var ONE_VAL = 316;
	var consDataUpd = new Array();
	for(var idx = 0; idx < 600; idx++) {
		consDataUpd[idx] = [(2 * Math.floor(Math.random() * 8) - 7) * ONE_VAL
			+ ONE_VAL * Math.floor(Math.random() * 2 - 1) * EVM,
			(2 * Math.floor(Math.random() * 8) - 7) * ONE_VAL
			+ONE_VAL * Math.floor(Math.random() * 2 - 1) * EVM];

	}
	option6.series[0].data = consDataUpd;
	myChart6.setOption(option6);

	// system specification
	var nTxNumUpd = Math.floor(Math.random() * 2 + 1) * 16;
	var nRxNumUpd = Math.floor(Math.random() * 2 + 1) * 16;
	var dlStreamNumUpd = Math.floor(Math.random() * 2 + 1) * 4;
	var ulStreamNumUpd = Math.floor(Math.random() * 2 + 1) * 4;
	(function subtitle(){
		var x = document.getElementById("main0");
		var str = 'System Specification : '+nTxNumUpd+' TX Antenna, '+nRxNumUpd+' RX Antenna, '+dlStreamNumUpd+' DL Stream, '+ulStreamNumUpd+' UL Stream';
		x.innerHTML = str;
	})();

}, 1000);




