import React from "react";

const Header = () => {
  return (
    <div className="header mt-4 text-center border shadow w-50 m-auto">
      <form>
        <div className=" form-group">
          <label htmlFor="exampleInputEmail1">Number of Table</label>

          <select name="number" className="btn  ms-4 ">
            {" "}
            Number :
            <option selected value={1}>
              1
            </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
