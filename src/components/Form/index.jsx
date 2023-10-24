import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../index.css";
import "./Form.css";
import Input from "../Input";
import InputSelect from "../InputSelect";
import { useState } from "react";

const Form = () => {
  const [number, setNumber] = useState("");
  const Type = ["Earning", "Spending"];
  const Category = ["Primary", "Secundary"];

  // value tidak boleh <0 dan rupiah formatting
  const handleAmount = (e) => {
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

    const value = e.target.value;
    if (value === "" || (!isNaN(value) && value >= 0)) {
      setNumber(value);
    }
  };

  console.log(handleAmount);

  return (
    <>
      <div className="container text-center pt-5 pb-4 title-form">
        <h1 className="pt-5">Add New Transaction</h1>
        <p>Please fill up the blank field below</p>
      </div>
      <div className="container parent-form rounded shadow">
        <form className="in-area">
          <Input children={"Transaction Name"} type={"text"} />
          <InputSelect textLabel={"Type"} dinamisOption={Type}></InputSelect>
          <InputSelect
            textLabel={"Category"}
            dinamisOption={Category}></InputSelect>
          <Input
            children={"Amount"}
            type={"text"}
            value={number}
            onChange={handleAmount}
          />
          <Input children={"Date"} type={"date"} />
          <div className="text-center d-flex flex-column gap-2 pt-3">
            <div>
              <Link className="btn btn-outline-light btn-submit" type="submit">
                Add Transaction
              </Link>
            </div>
            <div>
              <Link to="/dashboard" className="btn btn-cancel" type="submit">
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
