mstrmojo.requiresCls('mstrmojo.vi.models.editors.CustomVisEditorModel');

const { WIDGET_TYPE: $WT } = mstrmojo.vi.models.editors.CustomVisEditorModel;

mstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel = mstrmojo.declare(
  mstrmojo.vi.models.editors.CustomVisEditorModel,
  null,
  {
    scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVisEditorModel',
    cssClass: 'highchartsvis-editor-model',
    getCustomProperty() {
      return [
        {
          name: 'Графік',
          value: [
            {
              style: $WT.EDITORGROUP,
              items: [
                {
                  style: $WT.CHECKBOXANDLABEL,
                  propertyName: "invertChart",
                  labelText: "Поміняти місцями вісі"
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
                }
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
    },
  },
);
