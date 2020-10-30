import ReactPaginate from 'react-paginate';

export default function Pagination(props) {
    return <ReactPaginate
    pageCount={props.pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={props.pageChange}
  />
}