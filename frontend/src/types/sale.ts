export type Sale = {
  id: number;
  visited: number;
  deals: number;
  ammount: number;
  date: string;
  sellerDTO: {
    id: number;
    name: string;
  };
};

export type SalePage = {
  content: Sale[];
  last: boolean;
  first: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
};

export type SaleSum = {
  sellerName: string;
  sum: number;
};

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
};
