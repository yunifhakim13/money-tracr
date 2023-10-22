import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Table.css";

const Table = () => {
  return (
    <>
      <div className="container text-left parent-table">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <h1 className="title-table">Transaction History</h1>
          <Link className="add-transaction btn">Add Transaction</Link>
        </div>
        <table className="table style-table text-center">
          <thead>
            <tr>
              <th className="head-table" scope="col">
                Transaction Name
              </th>
              <th className="head-table" scope="col">
                Type
              </th>
              <th className="head-table" scope="col">
                Category
              </th>
              <th className="head-table" scope="col">
                Amount
              </th>
              <th className="head-table" scope="col">
                Date
              </th>
              <th className="head-table" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4">Dapat Hadiah</td>
              <td className="py-4">
                <p className="text-uppercase rounded p-1 type-spending">
                  Spending
                </p>
              </td>
              <td className="py-4">Entertaiment</td>
              <td className="py-4">Rp. 15.000.000,00</td>
              <td className="py-4">24/10/2023</td>
              <td className="py-4">
                <button className="btn btn-success me-1 border-light edit-style">
                  Edit
                </button>
                <button className="btn btn-danger delete-style">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-4">Potong Rambut</td>
              <td className="py-4">
                <p className="text-uppercase rounded p-1 type-earning">
                  Earning
                </p>
              </td>
              <td className="py-4">Lifestyle</td>
              <td className="py-4">Rp 30.000,00</td>
              <td className="py-4">17/10/2023</td>
              <td className="py-4">
                <button className="btn btn-success me-1 border-light edit-style">
                  Edit
                </button>
                <button className="btn btn-danger delete-style">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
