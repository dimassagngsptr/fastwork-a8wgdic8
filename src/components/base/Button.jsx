import clsx from "clsx";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={clsx(
        "bg-[#CC0E16] py-[7px] px-4 border border-white rounded",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
