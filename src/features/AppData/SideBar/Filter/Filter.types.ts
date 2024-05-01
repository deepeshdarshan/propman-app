namespace FilterTypes {
  export namespace PriceFilter {
    export type PFType = {
      readonly value: string;
      readonly text: string;
    };

    export type IType = {
      [key: string]: PFType;
    };

    export type DType = {
      value: string | number[];
    };

    export const Types: IType = {
      LTH: { value: "LTH", text: "Less than %currsign%" },
      MTH: { value: "MTH", text: "More than %currsign%" },
      ERR: { value: "ERR", text: "No price filters available" },
      INT: { value: "INT", text: "" },
    };

    export type Interval = {
      type: PFType;
      data: DType;
    };
  }

  export type Style = {
    title: string;
    content?: string;
    mt10?: string;
  };

  export interface FType {
    readonly order: number;
    readonly value: string;
  }

  export interface KType extends FType {}

  interface IType {
    [key: string]: FType;
  }

  export const Type: IType = {
    HN: { order: 1, value: "HN" },
    GN: { order: 2, value: "GN" },
    PR: { order: 3, value: "PR" },
    SR: { order: 4, value: "SR" },
    DS: { order: 5, value: "DS" },
    PH: { order: 6, value: "PH" },
  };

  export interface Filter {
    readonly type: FType;
    readonly key: KType;
  }

  export type State = {
    filters: Filter[];
    status: "success" | "pending" | "error" | "idle";
  };
}

export default FilterTypes;
