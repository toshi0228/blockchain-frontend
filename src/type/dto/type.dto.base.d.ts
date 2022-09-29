interface PageQueryParams {
  pageSize?: number;
  pageNumber?: number;
}

interface QueryParams extends PageQueryParams {
  [key: string]: any;
}

interface Pagination<T> {
  pageCount: number;
  totalItemCount: number;
  pageNumber: number;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  firstItemOnPage: number;
  lastItemOnPage: number;
  contents: T[];
}
