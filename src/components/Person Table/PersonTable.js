import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "../SweetAlert/Toast";

const PersonTable = () => {
  const [person, setPerson] = useState("");
  const url = "https://hotel-booking-api-ju41.onrender.com/room";

  const Delete = (id) => {
    axios({
      method: "delete",
      url: `https://hotel-booking-api-ju41.onrender.com/admin/delete/${id}`,
    })
      .then((result) =>
        Toast.fire({
          icon: "success",
          title: result.data,
        })
      )
      .catch((err) =>
        Toast.fire({
          icon: "error",
          title: err,
        })
      );
  };

  useEffect(() => {
    axios
      .get(url)
      .then((user) => {
        let x = 1;

        const persons = user.data.map((props) => {
          return (
            <>
              <tr key={props._id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {x++}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {props.fullname}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {props.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {new Date(props.checkIn).toDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {new Date(props.checkOut).toDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <p
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => Delete(props._id)}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            </>
          );
        });
        setPerson(persons);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <div className="flex flex-col h-full w-5/6 bg-slate-50">
        <div className="overflow-x-auto ">
          <div className="p-1.5 w-full inline-block align-middle ">
            <div className=" border rounded-lg  ">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Check-In
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Check-Out
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">{person}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonTable;
