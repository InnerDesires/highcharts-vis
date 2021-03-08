const METRIC_TYPES = {
    DOT: 'scatter',
    COLUMN: 'column',
    LINE: 'line',
    AREA: 'area'
}

export default function parseZones(mstrApi) {
    let res = {};
    let zonesArr = ['', METRIC_TYPES.LINE, METRIC_TYPES.COLUMN, METRIC_TYPES.AREA, METRIC_TYPES.DOT]
    let zones = mstrApi.zonesModel.getDropZones().zones;
    for (let i = 1; i < zones.length; i++) {
        zones[i].items.forEach((el) => {
            res[el.n] = zonesArr[i]
        })
    }
    return res;
}