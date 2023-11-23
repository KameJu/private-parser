import cn from "clsx";
import { PropsWithChildren, FC } from "react";
import styles from "./Row.module.scss";

interface IRow {
  className?: string;
}

const Row: FC<PropsWithChildren<IRow>> = ({ children, className }) => {
  return <div className={cn(className, styles.row)}>{children}</div>;
};

export default Row;