import React from "react";
import ReactCollapsingTable from "react-collapsing-table";
import "./Style.css"

const Table = ({ rows, columns }) => {
  return (
    <div>
      <h1 className="Collpase-Table-Head">Domain Auctions</h1>
      <div className="auction-table">
      <ReactCollapsingTable rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default Table;
