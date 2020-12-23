import * as highcharts from 'highcharts'

export default function (mstrApi, mstrmojo) {
    let domNode = mstrApi.domNode;
    domNode.parentNode.style.userSelect = 'text';
    domNode.style.userSelect = 'text';

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
                series[value.name] = {
                    type: ['line', 'area', 'column'][index % 3],
                    name: value.name,
                    data: [parseFloat(value.v)]
                }
            } else {
                series[value.name].data.push(parseFloat(value.v))
            }
        });
    });

    let myChart = highcharts.chart(domNode.id, {
        chart: {
            
        },
        title: {
            text: undefined
        },
        xAxis: {
            categories: categories[Object.keys(categories)[0]].categories,
            title: {
                text: undefined //categories[Object.keys(categories)[0]].name
            }
        },
        yAxis: {
            title: {
                text: undefined //categories[Object.keys(categories)[0]].name
            }
        },
        series: Object.keys(series).map(valueName => { return series[valueName] })
    });
}
