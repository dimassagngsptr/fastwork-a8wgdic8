import clsx from "clsx";

const SelectOption = ({ children, className, ...props }) => {
  return (
    <select {...props} className={clsx("px-2 py-2 outline-none", className)}>
      {children}
    </select>
  );
};

export default SelectOption;
