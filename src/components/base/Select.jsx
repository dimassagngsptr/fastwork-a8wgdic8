import clsx from "clsx";

const SelectOption = ({ children, className }) => {
  return (
    <select name="" id="" className={clsx("px-2 py-2 outline-none", className)}>
      {children}
    </select>
  );
};

export default SelectOption;
