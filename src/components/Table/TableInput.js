import React from "react";

const TableInput = ({ row, accessor, CustomFunction }) => {
  const clicked = () => CustomFunction({ imageURL: row[accessor] });
  return (
    <span style={{ height: 100, width: 100}}>
         <label for="fname">Bid Amount:</label>
     <input type="text" id="fname" name="fname" style={{border:"1px solid black"}}/>
    </span>
  );
};

export default TableInput;
