import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddMeal = () => {
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [categ, setCateg] = useState("");
  const [file, setFile] = useState("");
  let items = { name, categ, price, file };
  let navigate = useNavigate();
  async function handleMeal() {
    let result = await fetch("http://localhost:8000/api/add", {
      method: "POST",
      body: JSON.stringify(items),
      headers: "application/json",
      accept: "application/json",
    });
    if (items) {
      navigate("/");
    }
  }

  return (
    <div>
      <form onSubmit={handleMeal}>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Meal Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="meal name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Category</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="categ"
            onChange={(e) => setCateg(e.target.value)}
            value={categ}
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">Price </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div class="form-group">
          <label htmlFor="exampleInputPassword1">image </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setFile(e.target.value)}
            value={file}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMeal;
