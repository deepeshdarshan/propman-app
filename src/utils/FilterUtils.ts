import FilterTypes from "../features/AppData/SideBar/Filter/Filter.types";

export default class FilterUtils {
  private static sortByType = (
    f1: FilterTypes.Filter,
    f2: FilterTypes.Filter
  ) => f1.type.order - f2.type.order;

  private static sortByKey = (f1: FilterTypes.Filter, f2: FilterTypes.Filter) =>
    f1.key.order - f2.key.order;

  static comparator = (f1: FilterTypes.Filter, f2: FilterTypes.Filter) => {
    const sortRes = FilterUtils.sortByType(f1, f2);
    return sortRes !== 0 ? sortRes : FilterUtils.sortByKey(f1, f2);
  };

  static isEqual = (f1: FilterTypes.Filter, f2: FilterTypes.Filter) =>
    f1.type.value === f2.type.value && f1.key.value === f2.key.value;

  static range = (start: number, stop: number, step: number) =>
    stop > start
      ? Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      )
      : [];

  static updateObject = (oldObject: any, updateProperties: any) => {
    return {
      ...oldObject,
      ...updateProperties,
    };
  };

  static intervals = (min: number, max: number, noOfIntervals: number = 5) => {
    const types = FilterTypes.PriceFilter.Types;
    const intervals: FilterTypes.PriceFilter.Interval[] = [];
    const diff = Math.ceil(max) - Math.ceil(min);
    if (diff > 9) {
      const diffLen = diff.toString().length + 1;
      const divisor = diffLen <= noOfIntervals ? diffLen : noOfIntervals;
      const size = FilterUtils.roundTo10(Math.ceil(diff / divisor), false);
      let newMin = FilterUtils.roundTo10(min) + size;
      let newMax = 0;
      intervals.push(FilterUtils.addInterval(types.LTH, newMin.toString())); 
      while (newMin <= max) {
        newMax = newMin + size;
        if (newMax < max)
          intervals.push(FilterUtils.addInterval(types.INT, [newMin + 1, newMax]));
        else break;
        newMin = newMax;
      }
      intervals.push(FilterUtils.addInterval(types.MTH, newMin.toString()));
    } else if (diff >= 0) {
      const newMax = FilterUtils.roundTo10(Math.ceil(max), false);
      intervals.push(FilterUtils.addInterval(types.LTH, newMax.toString()));
    } else {
      intervals.push(FilterUtils.addInterval(types.ERR, ""));
    }
    return intervals;
  };

  private static addInterval = (
    type: FilterTypes.PriceFilter.PFType,
    data: string | number[]
  ): FilterTypes.PriceFilter.Interval => {
    return { type: type, data: { value: data } };
  };

  private static roundTo10 = (_num: number, _roundToDown: boolean = true) => {
    try {
      const _threshold = 19;
      if (_num < _threshold) return _num;
      else {
        const _rem = _num % 10;
        // const _div10 = _num / 10;
        // return Math.round(_div10) * 10;
        const _downOperand = _roundToDown ? 0 : 1;
        const _operand = _rem < 5 ? _downOperand : 1;
        const _div10 = (_num / 10).toString();
        return (parseInt(_div10, 10) + _operand) * 10;
      }
    } catch (e) {
      return _num;
    }
  };
}
