import "./Table.scss";

interface TableProps {
  hasSearch: boolean;
  columns: string[];
  keys: string[];
  data: any;
}

function Table({ hasSearch, columns, keys, data }: TableProps) {
  return (
    <>
      <input
        type="text"
        className={"search-bar-" + (hasSearch ? "on" : "off")}
      />
      <table className="table">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, i: number) => (
            <tr key={i}>
              {keys.map((key, i) => (
                <td key={i}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
