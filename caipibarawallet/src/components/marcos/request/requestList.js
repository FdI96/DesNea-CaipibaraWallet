import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Spinner } from "../common/Spinner";
import { RequestAuthor } from "./RequestAuthor";
import { TimeAgo } from "./TimeAgo";
import { selectAllRequests, fetchRequests } from "./requestSlice";

const RequestListTable = ({ items }) => {
  return (
    <div className="mt-2 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Moneda
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Precio (unidad)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((row, i) => {
                  return (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.coinType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <RequestAuthor userId={row.userId} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.date}
                        <TimeAgo timestamp={row.date} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                          <Link
                            to={`/request/${row.id}`}
                            className="button muted-button"
                          >
                            Ver Solicitud
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RequestList = () => {
  const dispatch = useDispatch();
  const requests = useSelector(selectAllRequests);

  const requestStatus = useSelector((state) => state.requests.status);
  const error = useSelector((state) => state.requests.error);

  useEffect(() => {
    if (requestStatus === "idle") {
      dispatch(fetchRequests());
    }
  }, [requestStatus]);

  let content;

  if (requestStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (requestStatus === "succeeded") {
    // Sort posts in reverse chronological order by datetime string
    const orderedRequests = requests
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = <RequestListTable items={orderedRequests} />;
  } else if (requestStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Requests</h2>
      {content}
    </section>
  );
};
