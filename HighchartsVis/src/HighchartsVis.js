import * as d3 from 'd3';
import cloud from 'd3-cloud';
import highcharts_module from 'highcharts_module';

// mojo module
mstrmojo.requiresCls('mstrmojo.CustomVisBase');

const { GraphicModel } = mstrmojo.customviz;
const { ENUM_RAW_DATA_FORMAT } = mstrmojo.models.template.DataInterface;

mstrmojo.plugins.HighchartsVis.HighchartsVis = mstrmojo.declare(
  mstrmojo.CustomVisBase,
  null,
  {
    scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVis',
    cssClass: 'highchartsvis',
    errorMessage: 'Either there is not enough data to display the visualization or the visualization configuration is incomplete.',
    errorDetails: 'This visualization requires one or more attributes and one metric.',
    useRichTooltip: false,
    reuseDOMNode: false,
    draggable: false,
    supportNEE: true,
    init(props) {
      this._super(props);
      this.setDefaultPropertyValues({
        stackCol: 'true',
        chartFont: {
          fontFamily: "Arial"
        }
      });
    },
    createGraphicModels() {
      const rawData = this.dataInterface.getRawData(ENUM_RAW_DATA_FORMAT.ROWS_ADV, {
        hasSelection: true,
        hasTitleName: true,
        hasThreshold: true,
        additionalAttrIds: this.additionalAttrIds,
      });

      return rawData.map(row => {
        const { values, headers } = row;
        const graphicModel = new GraphicModel();

        graphicModel.idValueMapping = row.idValueMapping;
        graphicModel.setCustomProperties({
          text: headers[0].name,
          value: values[0].rv,
        });
        graphicModel.setId(this.getSelectorHash(row.metricSelector));
        graphicModel.setSelector(row.metricSelector, true);
        return graphicModel;
      });
    },

    plot() {
      try {
        highcharts_module(this, mstrmojo);
      } catch (e) {
        alert(e);
        alert(e.stack);
      }
    },
  },
);
