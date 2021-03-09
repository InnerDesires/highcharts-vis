import * as highcharts from 'highcharts'
import parseZones from './dataProcessor'


export default function (mstrApi, mstrmojo) {
    mstrApi.addThresholdMenuItem();
    mstrApi.addUseAsFilterMenuItem();
    
    let currentSelection = [];
    
    let domNode = mstrApi.domNode;
    domNode.parentNode.style.userSelect = 'text';
    domNode.style.userSelect = 'text';
    
    let chartTypeDict = parseZones(mstrApi);

    let data = mstrApi.dataInterface.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.ROWS_ADV,
        { hasSelection: true, hasTitleName: true, hasThreshold: true }
    );
    let categories = []
    let series = {};

    data.forEach(row => {
        row.headers.forEach(header => {
            if (!categories[header.tname]) {
                categories[header.tname] = {
                    name: header.tname,
                    categories: [header.name]
                }
            } else {
                categories[header.tname].categories.push(header.name)
            }
        });
        
        row.values.forEach((value) => {
            if (!series[value.name]) {
                let colorByPoint = typeof value.threshold !== 'undefined';
                series[value.name] = {
                    type: chartTypeDict[value.name] || 'line',
                    name: value.name,
                    data: [parseFloat(value.rv)],
                    colorByPoint: colorByPoint,
                    colors: [value.threshold && value.threshold.fillColor],
                    point: {
                        events: {
                            select: function (event) {
                                currentSelection.push(data[this.x].headers[0].attributeSelector);
                                mstrApi.applySelection(currentSelection);
                            },
                            unselect: function (event) {
                                let index = currentSelection.findIndex(el => {
                                    return data[this.x].headers[0].attributeSelector.tid === el.tid;
                                });
                                if (index > -1) {
                                    currentSelection.splice(index, 1);
                                }
                                mstrApi.applySelection(currentSelection);
                            }
                        }
                    }
                }
            } else {
                let valueToPush = parseFloat(value.rv);
                series[value.name].data.push(valueToPush)
                series[value.name].colors.push(value.threshold && value.threshold.fillColor)
            }
        });
    });

    let myChart = highcharts.chart(domNode.id, {
        colors: getDefaultColors(mstrApi),
        chart: {
            inverted: mstrApi.getProperty('invertChart') === 'true',
            zoomType: 'xy',
            style: {
                fontFamily: mstrApi.getProperty('chartFont').fontFamily
            }
        },
        legend: {
            enabled: !mstrApi.getProperty('hideLegend') === 'true'
        },
        tooltip: {
            pointFormat: '<b>{point.category}</b>: <b>{point.y}</b><br/>'
        },
        credits: {
            enabled: false
        },

        plotOptions: {
            series: {
                stacking: mstrApi.getProperty('stackCol') === 'true' ? 'normal' : undefined,
                allowPointSelect: true
            }
        },
        title: {
            text: undefined
        },
        xAxis: {
            opposite: mstrApi.getProperty('oppositeX') === 'true',
            reversed: mstrApi.getProperty('reversedX') === 'true',
            categories: categories[Object.keys(categories)[0]].categories,
            title: {
                text: undefined //categories[Object.keys(categories)[0]].name
            },
            labels: {
                autoRotation: [-90],
                autoRotationLimit: 90
            },
        },
        yAxis: {
            opposite: mstrApi.getProperty('oppositeY') === 'true',
            reversed: mstrApi.getProperty('reversedY') === 'true',
            title: {
                text: undefined //categories[Object.keys(categories)[0]].name
            },
            gridLineColor: mstrApi.getProperty('hideYGrid') === 'true' ? '#00000000' : '#e6e6e6'
        },
        series: Object.keys(series).map(valueName => { return series[valueName] })
    });
    
    setTimeout(() => {
        mstrApi.raiseEvent({
            name: 'renderFinished',
            id: mstrApi.k
        });
    }, 2000);
}

function getDefaultColors(mstrApi) {
    let resArr = [];
    for (let i = 1; i <= 10; i++) {
        resArr.push(mstrApi.getProperty(`metric${i}FillColor`).fillColor)
    }
    return resArr;
}

