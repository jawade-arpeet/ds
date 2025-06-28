import React from "react";

import { cn } from "@/lib/utils/cn";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {}

interface TableHeadCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {}

export const Table: React.FC<TableProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <thead
      className={cn(className)}
      {...props}
    >
      {children}
    </thead>
  );
};

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tbody
      className={cn("divide-table-divide divide-y", className)}
      {...props}
    >
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <tr
      className={cn(
        "bg-table-row hover:bg-table-row-hover transition-colors duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
};

export const TableHeadCell: React.FC<TableHeadCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <th
      scope="col"
      className={cn(
        "h-14 truncate p-4 text-left text-sm font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td
      scope="col"
      className={cn("h-14 truncate p-4 text-left text-sm", className)}
      {...props}
    >
      {children}
    </td>
  );
};
