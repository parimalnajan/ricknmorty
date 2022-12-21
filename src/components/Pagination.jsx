import Pagination from "react-js-pagination";
import React from "react";

const PaginationComponent = () => {
  return (
    <div>Pagination 
      <Pagination
      activePage={15}
      innerClass={"pagination-wrapper"} 
      itemClass={"pagination-items"}
      activeClass={"pagination-active"}
      hideDisabled={true}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      />
  </div>
  )
}

export default PaginationComponent