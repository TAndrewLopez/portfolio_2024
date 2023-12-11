import { useMemo } from "react";

const useFill = ({ twClass }: { twClass: string }) => {
  const fillColor = useMemo(() => {
    const classes = twClass.split(" ");
    const hasFill = classes.reduce((acc, el, i) => {
      if (el.includes("fill")) acc = i;
      return acc;
    }, -1);

    if (hasFill) return classes[hasFill];
    return null;
  }, [twClass]);
  return fillColor;
};

export default useFill;
