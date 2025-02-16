import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useGetStanding } from "../hooks/use-get-standing";
import type { Standing } from "../domain/standing.domain";

function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export const FullStanding = () => {
  const { data: standings } = useGetStanding();
  console.log(standings);
  return (
    <div>
      <Table className="max-w-7xl">
        <TableHeader className="text-sm ">
          <TableRow>
            {table.map((item, index) => (
              <TableHead key={index} className={`${item.width}`}>
                <span className="hidden md:block">{item.name}</span>
                {item.nameMobile && (
                  <span className="md:hidden">{item.nameMobile}</span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {standings?.map((item) => (
            <TableRow key={item.id}>
              {table.map((column) => {
                if (column.key === "form") {
                  return (
                    <TableCellForm
                      key={column.key}
                      standing={item}
                      className={`${column.width} `}
                    />
                  );
                }
                if (column.key === "position") {
                  return (
                    <TableCell key={column.key} className={`${column.width}  `}>
                      <div>
                        <span className="text-xs md:text-sm">
                          {item.position}
                        </span>
                      </div>
                    </TableCell>
                  );
                }
                return (
                  <TableCell key={column.key} className={`${column.width}  `}>
                    <div
                      className={`${column.key === "team.name" ? "flex items-center gap-2" : ""}`}
                    >
                      {column.key === "team.name" &&
                        item.participant.image_path && (
                          <img
                            src={item.participant.image_path}
                            alt={item.participant.name}
                            className="inline-block w-8 h-8 mr-2"
                          />
                        )}
                      {column.key === "team.name" ? (
                        <>
                          <span className="hidden md:text-sm md:block">
                            {item.participant.name}
                          </span>
                          <span className="text-xs uppercase md:hidden">
                            {item.participant.short_code ||
                              item.participant.name.slice(0, 3)}
                          </span>
                        </>
                      ) : (
                        <span className="text-xs md:text-sm">
                          {
                            item.details.find(
                              (detail) =>
                                detail.type.developer_name === column.key
                            )?.value
                          }
                        </span>
                      )}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const TableCellForm = ({
  standing,
  className,
}: {
  standing: Standing;
  className: string;
}) => {
  return (
    <TableCell className={`w-20 px-0 text-center ${className}`}>
      <div className="flex justify-center gap-1">
        {standing.form.slice(standing.form.length - 5).map((item, index) => (
          <span
            key={index}
            className={`${
              item.form === "W"
                ? "bg-green-500"
                : item.form === "D"
                  ? "bg-yellow-500"
                  : "bg-red-500"
            } w-6 h-6 rounded-full flex items-center justify-center text-white font-bold`}
          >
            {item.form === "W" ? "V" : item.form === "D" ? "N" : "D"}
          </span>
        ))}
      </div>
      {/* <div className="flex justify-center gap-1">
        {form.split("").map((item, index) => (
          <span
            key={index}
            className={`${
              item === "W"
                ? "bg-green-500"
                : item === "D"
                  ? "bg-yellow-500"
                  : "bg-red-500"
            } w-6 h-6 rounded-full flex items-center justify-center text-white font-bold`}
          >
            {item === "W" ? "V" : item === "D" ? "N" : "D"}
          </span>
        ))}
      </div> */}
    </TableCell>
  );
};

const table = [
  {
    name: "Pos",
    nameMobile: "",
    width: "w-3 px-0 md:w-11 font-bold text-center",
    key: "position",
  },
  {
    name: "Club",
    nameMobile: "Club",
    width: "w-24 font-bold",
    key: "team.name",
  },
  {
    name: "Joué",
    nameMobile: "J",
    width: "w-10 px-0 text-center",
    key: "OVERALL_MATCHES",
  },
  {
    name: "Victoire",
    nameMobile: "V",
    width: "w-10 px-0 text-center",
    key: "OVERALL_WINS",
  },
  {
    name: "Nul",
    nameMobile: "N",
    width: "w-10 px-0 text-center",
    key: "OVERALL_DRAWS",
  },
  {
    name: "Défaite",
    nameMobile: "D",
    width: "w-10 px-0 text-center",
    key: "OVERALL_LOST",
  },
  {
    name: "Buts +",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "OVERALL_SCORED",
  },
  {
    name: "Buts -",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "OVERALL_CONCEDED",
  },
  {
    name: "Diff",
    nameMobile: "Diff",
    width: "w-10 px-0 text-center",
    key: "OVERALL_GOAL_DIFFERENCE",
  },
  {
    name: "Points",
    nameMobile: "Pts",
    width: "w-10 px-0 text-center font-extrabold",
    key: "TOTAL_POINTS",
  },
  {
    name: "Forme",
    width: "w-10 px-0 text-center hidden md:table-cell",
    key: "form",
  },
];
