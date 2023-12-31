import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import "./Form.css";
import Input from "../Input";
import InputSelect from "../InputSelect";
import { useState } from "react";
import axios from "axios";
import LoaderWhite from "../LoaderWhite";

const Form = () => {
  const [number, setNumber] = useState("");
  const Type = ["Earning", "Spending"];
  const Category = ["Primary", "Secondary"];
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    transactionName: "",
    type: Type[0],
    category: Category[0],
    amount: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleAmount = (e) => {
    const value = e.target.value;
    if (value === "" || (!isNaN(value) && value >= 0)) {
      setNumber(value);
      setFormData({ ...formData, amount: value });
    }
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, transactionName: e.target.value });
  };
  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setFormData({ ...formData, date: dateValue });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log(formData);
    axios
      .post(import.meta.env.VITE_API_CRUD, formData)
      .then((response) => {
        console.log("Transaction added:", response.data);
        setNumber("");
        setFormData({
          transactionName: "",
          type: "",
          category: "",
          amount: "",
          date: "",
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formStyles = {
    visibility: isLoading ? "hidden" : "visible",
  };

  return (
    <>
      <div className="container text-center pt-5 pb-4 title-form">
        <h1 className="pt-5">Add New Transaction</h1>
        <p>Please fill up the blank field below</p>
      </div>
      <div className="container parent-form rounded shadow">
        <form className="in-area" onSubmit={handleFormSubmit}>
          <Input
            parentInput={"text-white pb-4"}
            className={"form-control"}
            children={"Transaction Name"}
            value={formData.name}
            onChange={handleNameChange}
            type={"text"}
          />
          <InputSelect
            parentClass={"text-white pb-4"}
            className={"form-control"}
            textLabel={"Type"}
            onChange={handleTypeChange}
            dinamisOption={Type}
          />
          <InputSelect
            parentClass={"text-white pb-4"}
            className={"form-control"}
            textLabel={"Category"}
            onChange={handleCategoryChange}
            dinamisOption={Category}
          />
          <Input
            parentInput={"text-white pb-4"}
            className={"form-control"}
            children={"Amount"}
            type={"text"}
            value={formData.amount}
            onChange={handleAmount}
          />
          <Input
            parentInput={"text-white pb-4"}
            className={"form-control"}
            children={"Date"}
            value={formData.date}
            onChange={handleDateChange}
            type={"date"}
          />
          <div className="text-center d-flex flex-column gap-2 pt-3">
            <div style={formStyles}>
              <button
                className="btn btn-outline-light btn-submit"
                type="submit">
                Add Transaction
              </button>
            </div>
            {isLoading && <LoaderWhite />}
            <div style={formStyles}>
              <Link to="/dashboard" className="btn btn-cancel" type="cancel">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
