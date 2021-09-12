import axios from "axios";
import Pagination from "components/Pagination";
import React, { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

export default function DataTable() {
  const [activePage, setActivePage] = useState(0);

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    numberOfElements: 0,
    content: [],
    empty: true,
    size: 0,
  });

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`
      );
      setPage(response.data);
    })();
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <div className="d-flex justify-content-center w-100">
        <Pagination page={page} onPageChange={changePage} />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
