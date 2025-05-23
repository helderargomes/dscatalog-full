import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";

import "./styles.css";
import ReactPaginate from "react-paginate";

type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ forcePage, pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      previousLabel={
        <div className="pagination-arrow-container" data-testid="arrow-previous">
          <ArrowIcon />
        </div>
      }
      nextLabel={
        <div className="pagination-arrow-container" data-testid="arrow-next">
          <ArrowIcon />
        </div>
      }
    />
  );
};

export default Pagination;
