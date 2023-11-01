import { Link } from "react-router-dom";
import "./Table.css";
import { useState, useEffect } from "react";
import axios from "axios";
import InputSelect from "../InputSelect";
import Input from "../Input";
import Loader from "../Loader";

const Table = () => {
  const [posts, setPosts] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const Type = ["Earning", "Spending"];
  const Category = ["Primary", "Secondary"];

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_CRUD)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [isLoading]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    setIsLoading(true);

    if (confirmDelete) {
      try {
        const res = await axios.delete(
          `${import.meta.env.VITE_API_CRUD}/${id}`
        );
        setIsLoading(false);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = posts.find((item) => item.id === id);
    if (itemToEdit) {
      setEditItemId(id);
      setEditedItem({ ...itemToEdit });
    }
  };

  const saveEditedItem = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_CRUD}/${editItemId}`,
        editedItem
      );

      setEditItemId(null);
      setEditedItem({});
      setIsLoading(false);
      // location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const cancelEdit = () => {
    setEditItemId(null);
    setEditedItem({});
  };

  return (
    <>
      <div className="container text-left parent-table">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <h1 className="title-table">Transaction History</h1>
          <Link to="/transaction" className="add-transaction btn">
            Add Transaction
          </Link>
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
          {isLoading ? (
            <tbody>
              <td></td>
              <td></td>
              <td>
                <Loader />
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          ) : (
            <tbody>
              {posts.map((item, index) => (
                <tr
                  key={index}
                  className={
                    item.type === "Spending" ? "type-spending" : "type-earning"
                  }>
                  {editItemId === item.id ? (
                    <>
                      <td>
                        <Input
                          className={"form-control text-center px-1"}
                          type="text"
                          value={editedItem.transactionName}
                          onChange={(e) =>
                            setEditedItem({
                              ...editedItem,
                              transactionName: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <InputSelect
                          className={"form-control text-center pt-1"}
                          onChange={(e) =>
                            setEditedItem({
                              ...editedItem,
                              type: e.target.value,
                            })
                          }
                          dinamisOption={Type}
                        />
                      </td>
                      <td>
                        <InputSelect
                          className={"form-control text-center p-1"}
                          onChange={(e) =>
                            setEditedItem({
                              ...editedItem,
                              category: e.target.value,
                            })
                          }
                          dinamisOption={Category}
                        />
                      </td>
                      <td>
                        <Input
                          className={"form-control text-center px-1"}
                          type="text"
                          value={editedItem.amount}
                          onChange={(e) =>
                            setEditedItem({
                              ...editedItem,
                              amount: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <Input
                          className={"form-control text-center px-1"}
                          type="date"
                          value={editedItem.date}
                          onChange={(e) =>
                            setEditedItem({
                              ...editedItem,
                              date: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td className="py-4">
                        <button
                          className="btn btn-success me-1 border-light edit-style"
                          onClick={saveEditedItem}>
                          Save
                        </button>
                        <button
                          className="btn btn-danger delete-style"
                          onClick={cancelEdit}>
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-4">{item.transactionName}</td>
                      <td className="py-4">
                        <p
                          className={`text-uppercase rounded p-1 ${
                            item.type === "Spending"
                              ? "type-spending"
                              : "type-earning"
                          }`}>
                          {item.type}
                        </p>
                      </td>
                      <td className="py-4">{item.category}</td>
                      <td className="py-4">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(item.amount)}
                      </td>
                      <td className="py-4">{item.date}</td>
                      <td className="py-4">
                        <button
                          className="btn btn-success me-1 border-light edit-style"
                          onClick={() => handleEdit(item.id)}>
                          Edit
                        </button>
                        <button
                          className="btn btn-danger delete-style"
                          onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Table;
