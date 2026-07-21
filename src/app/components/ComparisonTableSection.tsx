import type { Variants } from "motion/react";
import * as motion from "motion/react-client";

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

const smoothEase = [0.22, 1, 0.36, 1] as const;

const headingViewport = {
  once: true,
  amount: 0.55,
  margin: "0px 0px -50px 0px",
} as const;

const tableViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -60px 0px",
} as const;

/*
|--------------------------------------------------------------------------
| Heading area
|--------------------------------------------------------------------------
*/

const headingGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.11,
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
  },
};

const tableTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Mobile card animations
|--------------------------------------------------------------------------
*/

const mobileHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.55,
      ease: smoothEase,
      delayChildren: 0.18,
    },
  },
};

const mobileHeaderTextVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

const mobileDetailsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

const mobileDetailVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
};

const mobileLabelVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.34,
      ease: smoothEase,
    },
  },
};

const mobileValueVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: smoothEase,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Desktop table animations
|--------------------------------------------------------------------------
*/

const tableSceneVariants: Variants = {
  hidden: {},
  visible: {},
};

const tableFrameVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.75,
      ease: smoothEase,
      delayChildren: 0.16,
    },
  },
};

const tableHeaderVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 0.65,
      ease: smoothEase,
      delayChildren: 0.22,
      staggerChildren: 0.1,
    },
  },
};

const headerCellVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: smoothEase,
    },
  },
};

const tableBodyVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.09,
    },
  },
};

const tableCellVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
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

  const hasHeadingContent = Boolean(heading || description || tableTitle);

  return (
    <section
      className={`bg-[#1c1c1c] px-4 pb-12 text-white sm:px-8 sm:pb-16 lg:px-16 lg:pb-20 ${
        compactTop ? "pt-8 sm:pt-10 lg:pt-12" : "pt-12 sm:pt-16 lg:pt-20"
      }`}
    >
      <div className="mx-auto w-full max-w-[97.5rem]">
        {/* Heading area */}
        {hasHeadingContent ? (
          <motion.div
            variants={headingGroupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={headingViewport}
          >
            {heading ? (
              <motion.h2
                variants={headingVariants}
                className="mx-auto max-w-[28rem] text-center font-['Outfit'] text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.5rem] lg:text-[3rem]"
              >
                {heading}
              </motion.h2>
            ) : null}

            {description ? (
              <motion.p
                variants={descriptionVariants}
                className="mx-auto mt-6 max-w-[42rem] text-center font-['DM_Sans'] text-base leading-[1.4] text-white/90 sm:text-lg"
              >
                {description}
              </motion.p>
            ) : null}

            {tableTitle ? (
              <motion.h3
                variants={tableTitleVariants}
                className={`${
                  heading || description ? "mt-10 sm:mt-12" : "mt-0"
                } font-['Outfit'] text-[1.125rem] font-semibold leading-[1.3] sm:text-[1.5rem] lg:text-[2rem]`}
              >
                {tableTitle}
              </motion.h3>
            ) : null}
          </motion.div>
        ) : null}

        {/* Mobile card layout */}
        <div className={`${tableSpacing} grid gap-4 sm:hidden`}>
          {rows.map((row, rowIndex) => {
            const entersFromLeft = rowIndex % 2 === 0;

            /*
             * Plain server-created object.
             * No callback variant is passed to Motion.
             */
            const mobileCardVariants: Variants = {
              hidden: {
                opacity: 0,
                x: entersFromLeft ? -32 : 32,
                y: 22,
                scale: 0.98,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: smoothEase,
                  delayChildren: 0.08,
                  staggerChildren: 0.1,
                },
              },
            };

            return (
              <motion.article
                key={`${row.factor}-${rowIndex}`}
                variants={mobileCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                  margin: "0px 0px -50px 0px",
                }}
                className="overflow-hidden border border-[#b34b0c] bg-[#161616]"
              >
                {firstColumn ? (
                  <motion.div
                    variants={mobileHeaderVariants}
                    className="bg-[#b34b0c] px-4 py-3 font-['Outfit'] text-[1rem] font-semibold leading-[1.25] text-white"
                  >
                    <motion.div variants={mobileHeaderTextVariants}>
                      {row[firstColumn.key]}
                    </motion.div>
                  </motion.div>
                ) : null}

                <motion.div
                  variants={mobileDetailsVariants}
                  className="divide-y divide-[#b34b0c]"
                >
                  {otherColumns.map((column) => (
                    <motion.div
                      key={column.key}
                      variants={mobileDetailVariants}
                      className="px-4 py-3"
                    >
                      <motion.p
                        variants={mobileLabelVariants}
                        className="font-['Outfit'] text-[0.8125rem] font-semibold text-white"
                      >
                        {column.label}
                      </motion.p>

                      <motion.p
                        variants={mobileValueVariants}
                        className="mt-1 font-['DM_Sans'] text-[0.8125rem] leading-[1.45] text-white/85"
                      >
                        {row[column.key]}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* Tablet/Desktop table layout */}
        <motion.div
          variants={tableSceneVariants}
          initial="hidden"
          whileInView="visible"
          viewport={tableViewport}
          className={`${tableSpacing} hidden w-full sm:block`}
        >
          <motion.div
            variants={tableFrameVariants}
            className="w-full overflow-x-auto"
          >
            <table className="w-full min-w-[52rem] border-collapse border border-[#b34b0c] font-['DM_Sans'] lg:min-w-0">
              <motion.thead variants={tableHeaderVariants}>
                <tr className="bg-[#b34b0c]">
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="border-r border-[#1c1c1c] px-10 py-5 text-left font-['Outfit'] text-[1.25rem] font-semibold leading-[1.2] last:border-r-0 lg:px-14 lg:text-[2rem]"
                    >
                      <motion.div variants={headerCellVariants}>
                        {column.label}
                      </motion.div>
                    </th>
                  ))}
                </tr>
              </motion.thead>

              <motion.tbody variants={tableBodyVariants}>
                {rows.map((row, rowIndex) => {
                  const rowVariants: Variants = {
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: smoothEase,
                        delayChildren: 0.04,
                        staggerChildren: 0.06,
                      },
                    },
                  };

                  return (
                    <motion.tr
                      key={`${row.factor}-${rowIndex}`}
                      variants={rowVariants}
                      className={
                        rowIndex % 2 === 0
                          ? "bg-[#1c1c1c]"
                          : "bg-[#161616]"
                      }
                    >
                      {columns.map((column, columnIndex) => {
                        const cellVariants: Variants = {
                          hidden: {
                            opacity: 0,
                            x: columnIndex === 0 ? -18 : 18,
                          },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.4,
                              ease: smoothEase,
                            },
                          },
                        };

                        return (
                          <td
                            key={column.key}
                            className="border border-[#b34b0c] px-10 py-4 text-[0.875rem] leading-[1.45] text-white/85 lg:px-14 lg:py-5 lg:text-[1.125rem]"
                          >
                            <motion.div variants={cellVariants}>
                              {row[column.key]}
                            </motion.div>
                          </td>
                        );
                      })}
                    </motion.tr>
                  );
                })}
              </motion.tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}