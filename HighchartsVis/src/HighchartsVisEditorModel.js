mstrmojo.requiresCls('mstrmojo.vi.models.editors.CustomVisEditorModel');

const { WIDGET_TYPE: $WT } = mstrmojo.vi.models.editors.CustomVisEditorModel;

mstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel = mstrmojo.declare(
  mstrmojo.vi.models.editors.CustomVisEditorModel,
  null,
  {
    scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel',
    cssClass: 'highchartsvis-editor-model',
    getCustomProperty() {
      let props = [
        {
          name: 'Графік',
          value: [
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.LABEL,
                  labelText: 'Шрифт візуалізації'
                },
                {
                  style: $WT.CHARACTERGROUP,
                  propertyName: 'chartFont',
                  items: [
                    {
                      childName: 'fontStyle',
                      disabled: true
                    }, {
                      childName: 'fontSize',
                      disabled: true
                    }, {
                      childName: 'fontColor',
                      disabled: true
                    }
                  ]
                }

              ]
            },
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "invertChart",
                  labelText: "Поміняти місцями вісі"
                },
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "hideLegend",
                  labelText: "Приховати легенду"
                },
                /* {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "showAxes",
                  labelText: "Відображати вісі"
                } */
              ],
            },
          ],
        },
        {
          name: 'Колонки',
          value: [
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "stackCol",
                  labelText: "Накладання колонок"
                }
              ],
            },
          ],
        },
        {
          name: 'Вісь Y',
          value: [
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "oppositeY",
                  labelText: "Підписи з протилежної сторони"
                },
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "reversedY",
                  labelText: "Інвертувати вісь"
                },
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "hideYGrid",
                  labelText: "Приховати сітку"
                },
              ],
            },
          ],
        },
        {
          name: 'Вісь X',
          value: [
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "oppositeX",
                  labelText: "Підписи з протилежної сторони"
                },
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "reversedX",
                  labelText: "Інвертувати вісь"
                }
              ],
            },
          ],
        }
      ];
      let metricColors = {
        name: 'Кольори метрик',
        value: [
          {
            style: $WT.EDITORGROUP,
            items: [

            ]
          }
        ]
      }
      for (let i = 1; i <= 10; i++) {
        metricColors.value[0].items.push(
          {
            style: $WT.TWOCOLUMN,
            items: [{
              style: $WT.LABEL,
              width: "37%",
              labelText: `Метрика ${i}`
            }, {
              style: $WT.FILLGROUP,
              width: "63%",
              propertyName: `metric${i}FillColor`,
              items: [{
                childName: 'fillAlpha',
                disabled: true
              }]
            }
            ]
          }
        )
      }
      props.push(metricColors);
      return props;
    },
  },
);
