$(function(){
if($('.nav>ul>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.nav>ul>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
$('.nav>ul>li').hover(function(){
  $('.nav ul li').removeClass('active');
  $(this).addClass('active');
var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
},function(){
if($('.nav>ul>li').hasClass('selected')){
$('.selected').addClass('active');
var currentleft=$('.selected').position().left+"px";
var currentwidth=$('.selected').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
else{
  $('.nav>ul>li').first().addClass('active');
  var currentleft=$('.active').position().left+"px";
var currentwidth=$('.active').css('width');
$('.lamp').css({"left":currentleft,"width":currentwidth});
}
});
});



$({
    countNum: $('.counter1').text()
}).animate({
    countNum: 9949000
}, {
    duration: 2000,
    easing: 'linear',
    step: function () {
        $('.counter1').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter1').text("9,949,000");
    }
});

$({
    countNum: $('.counter2').text()
}).animate({
    countNum: 9949000
}, {
    duration: 2000,
    easing: 'linear',
    step: function () {
        $('.counter2').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter2').text("9,949,000");
    }
});


$({
    countNum: $('.counter3').text()
}).animate({
    countNum: 93030
}, {
    duration: 2000,
    easing: 'linear',
    step: function () {
        $('.counter3').text(Math.ceil(this.countNum));
    },
    complete: function () {
        $('.counter3').text("93,030");
    }
});

function degis(page_id){
	$(".ozl_ic").css("display","none");
	$(".icerik_"+page_id).slideToggle("slow");	
	
}

	$(window).load(function(){
		var i = 0;
				$(".swiper-pagination span").each(function(index) {
                	
						$(this).attr("onClick","degis("+i+")");
	
						
					i++; 
				});
		});



$(window).load(function(){degis('0');});



function textPositioning(chart) {
	var container = jQuery(chart.container),
		seriesArea = container.find('.highcharts-series-group').get(0).getBBox(),
		span = container.parent().parent().find('.pie-chart-text-wrapper');

	span.css('top', seriesArea.y + (seriesArea.height / 2) - (span.height() / 2));

	if (container.parent().hasClass('has-legends')) {
		span.css('left', seriesArea.x + (seriesArea.width / 2));
	}
}

function buildChart(selector, options) {
	var chartObj,
		timer,
		defaultOptions = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				
			},
			title: {
			//	text: '',
				align: 'left',
				style: {
					fontSize: '18px',
					fontFamily: 'Arial, sans-serif'
				}
			},
			tooltip: {
				pointFormat: '<b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: false,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						// format: '<b>{point.percentage:.1f} %</b>: <br> {point.name}',
						style: {
							color: '#68a873',
							fontSize: '12px',
							fontFamily: 'Arial, sans-serif'
						},
						formatter: function() {
							return '<div class="legend-text"><b style="font-size: 17px; font-weight: bold;">' + this.y + '%</b> <br> ' + this.key + '</div>';
						},
					},
					borderWidth: 0
				}
			},
			series: [{
				animation: false,
				type: 'pie',
				name: null,
				size: '80%',
				innerSize: '56%',
				data: []
			}]
		},
		extOptions = $.extend(defaultOptions, options);

	Highcharts.getOptions().plotOptions.pie.colors = (function() {
		var colors = ["#68a873", "#3f8d50", "#86c78e", "#4ba65b", "#388044", "#c1bbb6", "#aca59e", "#978e85", "#edbe71"];
		return colors;
	}());

	$(selector).highcharts(extOptions,
		function(chart) { // on complete
			chartObj = chart;
			textPositioning(chart);
		});
}

jQuery(function() {
	buildChart('#chart-1-wrapper', {
		title: {
			text: 'Invested assets, December 2013'
		},
		series: [{
			animation: false,
			type: 'pie',
			name: null,
			size: '80%',
			innerSize: '56%',
			data: [
				['%37 Diğer', 37.0],
				['%35 Tekstil', 35.0],
				['%4 Otomotiv', 4.0],
				['%10 Gıda', 10.0],
				['%14 İnşaat', 14.0]
			]
		}]
	});

	buildChart('#chart-2-wrapper', {
		title: {
			align: 'left',
			style: {
				fontSize: '18px',
				fontFamily: 'Arial, sans-serif'
			}
		},
		series: [{
			animation: false,
			type: 'pie',
			name: null,
			size: '50%',
			innerSize: '56%',
			data: [
				['%35 Tekstil', 35.0],
				['%14 İnşaat', 14.0],
				['%10 Gıda', 10.0],				
				['%4 Otomotiv', 4.0],				
				['%37 Diğer', 37.0]
				
			]
		}],
    //tooltip: false,
    plotOptions: {
				pie: {
					allowPointSelect: false,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						// format: '<b>{point.percentage:.1f} %</b>: <br> {point.name}',
						style: {
							color: '#68a873',
							fontSize: '16px',
							fontFamily: ''
						},
						formatter: function() {
							return '<div class="legend-text">' + this.key + '</div>';
						},
					},
					borderWidth: 0
				}
			},
	});

	buildChart('#chart-3-wrapper', {
		title: {
			align: 'left',
			style: {
				fontSize: '18px',
				fontFamily: 'Arial, sans-serif'
			}
		},
		series: [{
			animation: false,
			type: 'pie',
			name: null,
			size: '80%',
			innerSize: '56%',
			data: [
				['Liquid real assets', 15.0],
				['Real estate', 27.0],
				['dbSelect', 9.5],
				['Retirement solutions', 24.5],
				['Private equity / Private markets', 21.5]
			]
		}],
		plotOptions: {
			pie: {
				showInLegend: true,
				dataLabels: {
					enabled: false
				},
				allowPointSelect: false,
				cursor: 'pointer',
				borderWidth: 0,
				point: {
					events: {
						legendItemClick: function(e) {
							return false;
						}
					}
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			/*width: 282,
			borderWidth: 0,
			symbolRadius: 0,
			symbolWidth: 0,
			symbolHeight: 0,
			padding: 0,*/
			useHTML: true,
			labelFormat: '<span class="chart-data-legend">{name}</span>'
		},
    tooltip: false
	});
});


