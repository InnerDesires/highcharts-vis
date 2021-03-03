import * as highcharts from 'highcharts'

const METRIC_TYPES = {
    DOT: 'scatter',
    COLUMN: 'column',
    LINE: 'line',
    AREA: 'area'
}
let g_mstrApi;

export default function (mstrApi, mstrmojo) {
    g_mstrApi = mstrApi
    mstrApi.addThresholdMenuItem();
    mstrApi.addUseAsFilterMenuItem();
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
        row.values.forEach((value, index) => {

            if (!series[value.name]) {
                let colorByPoint = typeof value.threshold !== 'undefined';
                series[value.name] = {
                    type: chartTypeDict[value.name] || 'line',
                    name: value.name,
                    data: [parseFloat(value.rv)],
                    colorByPoint: colorByPoint,
                    colors: [value.threshold && value.threshold.fillColor]
                }
            } else {
                let valueToPush = parseFloat(value.rv);
                series[value.name].data.push(valueToPush)
                series[value.name].colors.push(value.threshold && value.threshold.fillColor)
            }
        });
    });

    let myChart = highcharts.chart(domNode.id, {
        colors: getDefaults().colors,
         chart: {
            inverted: propHelperBinary('invertChart'),
            zoomType: 'xy'
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
            opposite: propHelperBinary('oppositeX'),
            reversed: propHelperBinary('reversedX'),
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
            opposite: propHelperBinary('oppositeY'),
            reversed: propHelperBinary('reversedY'),
            title: {
                text: undefined //categories[Object.keys(categories)[0]].name
            }
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

function getDefaults() {
    return {
        colors: ['#057B48', '#91C964', '#F8D490', '#F69C91', '#46AFE6', '#005591', '#4C4C4E']
    }
}

function propHelperBinary(propName) {
    return g_mstrApi.getProperty(propName) === 'true';
}

function parseZones(mstrApi) {
    let res = {

    };
    let zonesArr = ['', METRIC_TYPES.LINE, METRIC_TYPES.COLUMN, METRIC_TYPES.AREA, METRIC_TYPES.DOT]
    let zones = mstrApi.zonesModel.getDropZones().zones;
    for (let i = 1; i < zones.length; i++) {
        zones[i].items.forEach((el, index) => {
            res[el.n] = zonesArr[i]
        })
    }
    /* Object.keys(res).forEach(key => {
        alert(`${key} = ${res[key]}`)
    }) */
    return res;
}