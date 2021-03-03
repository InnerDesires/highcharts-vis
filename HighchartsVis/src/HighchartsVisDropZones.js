mstrmojo.requiresCls('mstrmojo.vi.models.CustomVisDropZones');

/**
 * @enum {number} ENUM_ALLOW_DROP_TYPE - { ATTRIBUTE, METRIC, ATTRIBUTE_AND_METRIC, ATTRIBUTE_OR_METRIC }
 */
const { ENUM_ALLOW_DROP_TYPE } = mstrmojo.vi.models.CustomVisDropZones;

// dropzone name list
const ATTRIBUTE = 'Attribute';
const LINE = 'Line';
const COLUMN = 'Column';
const AREA = 'Area';
const DOT = 'Dot';
const TOOLTIP = 'Tooltip';

mstrmojo.plugins.HighchartsVis.HighchartsVisDropZones = mstrmojo.declare(
  mstrmojo.vi.models.CustomVisDropZones,
  null,
  {
    scriptClass: 'mstrmojo.plugins.HighchartsVis.HighchartsVisDropZones',
    cssClass: 'highchartsvis-dropzones',
    getCustomDropZones() {
      return [
        {
          name: ATTRIBUTE,
          title: 'Атрибут',
          maxCapacity: 1,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE,
        },
        {
          name: LINE,
          title: 'Лінії',
          maxCapacity: 10,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC,
        },
        {
          name: COLUMN,
          title: 'Стовпчики',
          maxCapacity: 10,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC,
        },
        {
          name: AREA,
          title: 'Площа',
          maxCapacity: 10,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC,
        },
        {
          name: DOT,
          title: 'Точки',
          maxCapacity: 10,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC,
        }
      ];
    },
    getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
      const actions = [];
      /* let zoneName = this.getDropZoneName(zone);
      let result = [LINE, BAR, AREA, DOT].includes(zoneName)
      if (result) {
        this.getAddDropZoneObjectsActions(actions, TOOLTIP, droppedObjects, idx, extras);
      } */
      return actions;
    },
    getActionsForObjectsRemoved(zone, objects) {
      const actions = [];
      /* let zoneName = this.getDropZoneName(zone);
      let result = [LINE, BAR, AREA, DOT].includes(zoneName)
      if (result) {
        this.getRemoveDropZoneObjectsActions(actions, TOOLTIP, objects);
      } */
      return actions;
    },
  },
);
