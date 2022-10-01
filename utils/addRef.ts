import { MutableRefObject } from "react";

const addRef =
  (refArr: MutableRefObject<HTMLElement[]>, idx: number) =>
  (el: HTMLElement | null) => {
    if (el) {
      refArr.current[idx] = el;
    }
  };

export default addRef;
