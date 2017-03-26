import React from 'react';
import {
    View
} from 'react-native'
import Highcharts from 'highcharts';


export const HighChart = React.createClass({
    getInitialState: function () {
        return {
            data: [28, 12.2, 11.4, 8.4, 6.9, 5.8, 5.2, 3.0, 2.6, 2.2, 1.9, 1.8, 1.6, 1.5, 1.4, 1.2, 0.1, 0.1],
            occupation: ["Full-Stack Web Developer", "Back-End Web Developer", "Student", "Mobile Developer (Android, iOS, WP, and MultiPlatform)", "Desktop Develop", "Front-End Web Developer", "Other", "Enterprise Level Services Developer", "Embedded Application Developer", "DevOps", "Developer with a Statistics or Mathematics Background", "Executive (VP of Engineering, CTO, CIO, etc.)", "Data Scientist", "System Administrator", "Engineering Manager", "Analyst", "Business Intelligence or Data WWarehousing Expert", "Maching Learning Developer"]
        }
    },
    componentDidMount() {
        var data = this.state.data;
        var occupation = this.state.occupation;
        const chart = new Highcharts.Chart('chart', {
            chart: {
                backgroundColor: '#484849',
                renderTo: 'charts',
                type: 'line',
            },
            title: {
                text: '',
            },
            tooltip: {
                valueDecimals: 2,
                valueSuffix: ' %',
                shared: true,
                hideDelay: 300,
                animation: false,
                positioner: function (labelWidth, labelHeight, point) {
                    var tooltipX, tooltipY;
                    if (point.plotX + labelWidth > $scope.chart.plotWidth) {
                        tooltipX = point.plotX + $scope.chart.plotLeft - labelWidth - 20;
                    } else {
                        tooltipX = point.plotX + $scope.chart.plotLeft + 20;
                    }
                    tooltipY = point.plotY + $scope.chart.plotTop - 50;
                    return {
                        x: tooltipX,
                        y: tooltipY
                    };
                }
            },
            xAxis: {
                gridLineWidth: 1,
                // Get width tickInterval
                tickInterval: (this.currentPeriod / 3) * 30 * 24 * 60 * 60 * 1000,
                type: 'datetime',
                tickLength: 0,
                gridLineColor: '#848484',
                lineColor: '#484849',
                lineWidth: 1,
                dateTimeLabelFormats: {
                    day: "%A, %b %e, %Y",
                    month: '%b\' %e',
                    year: "%Y"
                },
                labels: {
                    style: {
                        color: '#808080',
                        fontSize: '10px'
                    }
                }
            },
            yAxis: {
                title: '',
                gridLineWidth: 0,
                opposite: true,
                labels: {
                    formatter: function () {
                        return this.value + ' %';
                    },
                    style: {
                        color: '#808080',
                        fontSize: '10px'
                    }
                }
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            marker: {
                enabled: false,

            },

            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        });
    },
    render: function () {
        var style = {
            marginTop: "25px",
            marginBottom: "0px"
        };
        return (
            <View
                style={style}
                id="chart"
            >
            </View>
        )
    }
});
