import { PropsWithChildren, FC } from "react";
import styles from "./Column.module.scss";
import cn from "clsx";

interface IColumn {
  size: number;
  className?: string;
}

const Column: FC<PropsWithChildren<IColumn>> = ({
  children,
  size,
  className,
}) => {
  return (
    <div
      className={cn(className, styles.column)}
      style={{ gridColumn: `span ${size} / span ${size}` }}
    >
      {children}
    </div>
  );
};

export default Column;