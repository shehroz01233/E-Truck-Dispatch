export type ComparisonColumn = {
  key: string;
  label: string;
};

export type ComparisonRow = {
  factor: string;
  [key: string]: string;
};

type Props = {
  heading: string;
  description?: string;
  tableTitle: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  compactTop?: boolean;
};

export default function ComparisonTableSection({
  heading,
  description,
  tableTitle,
  columns,
  rows,
  compactTop = false,
}: Props) {
  const firstColumn = columns[0];
  const otherColumns = columns.slice(1);

  /*
   * Existing sections keep their original mt-6 spacing.
   * Extra spacing is added only when a description is supplied
   * and there is no table title between the description and table.
   */
  const tableSpacing =
    description && !tableTitle ? "mt-12 sm:mt-14" : "mt-6";

  return (
    <section
      className={`bg-[#1c1c1c] px-4 pb-12 text-white sm:px-8 sm:pb-16 lg:px-16 lg:pb-20 ${
        compactTop ? "pt-8 sm:pt-10 lg:pt-12" : "pt-12 sm:pt-16 lg:pt-20"
      }`}
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        {/* Heading */}
        {heading ? (
          <h2 className="mx-auto max-w-[28rem] text-center font-['Outfit'] text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] lg:text-[3rem]">
            {heading}
          </h2>
        ) : null}

        {/* Optional description */}
        {description ? (
          <p className="mx-auto mt-6 max-w-[42rem] text-center font-['DM_Sans'] text-base leading-[1.4] text-white/90 sm:text-lg">
            {description}
          </p>
        ) : null}

        {/* Optional table title */}
        {tableTitle ? (
          <h3
            className={`${
              heading || description ? "mt-10 sm:mt-12" : "mt-0"
            } font-['Outfit'] text-[1.125rem] font-semibold leading-[1.3] sm:text-[1.5rem] lg:text-[2rem]`}
          >
            {tableTitle}
          </h3>
        ) : null}

        {/* Mobile card layout */}
        <div className={`${tableSpacing} grid gap-4 sm:hidden`}>
          {rows.map((row, rowIndex) => (
            <article
              key={`${row.factor}-${rowIndex}`}
              className="overflow-hidden border border-[#b34b0c] bg-[#161616]"
            >
              {firstColumn ? (
                <div className="bg-[#b34b0c] px-4 py-3 font-['Outfit'] text-[1rem] font-semibold leading-[1.25] text-white">
                  {row[firstColumn.key]}
                </div>
              ) : null}

              <div className="divide-y divide-[#b34b0c]">
                {otherColumns.map((column) => (
                  <div key={column.key} className="px-4 py-3">
                    <p className="font-['Outfit'] text-[0.8125rem] font-semibold text-white">
                      {column.label}
                    </p>

                    <p className="mt-1 font-['DM_Sans'] text-[0.8125rem] leading-[1.45] text-white/85">
                      {row[column.key]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Tablet/Desktop table layout */}
        <div
          className={`${tableSpacing} hidden w-full overflow-x-auto sm:block`}
        >
          <table className="w-full min-w-[52rem] border-collapse border border-[#b34b0c] font-['DM_Sans'] lg:min-w-0">
            <thead>
              <tr className="bg-[#b34b0c]">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="border-r border-[#1c1c1c] px-10 py-5 text-left font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] last:border-r-0 lg:px-14 lg:text-[2rem]"
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={`${row.factor}-${rowIndex}`}
                  className={
                    rowIndex % 2 === 0 ? "bg-[#1c1c1c]" : "bg-[#161616]"
                  }
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="border border-[#b34b0c] px-10 py-4 text-[0.875rem] leading-[1.45] text-white/85 lg:px-14 lg:py-5 lg:text-[1.125rem]"
                    >
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}