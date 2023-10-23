import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "./../query";
import { getProducts } from "@/features/query"; 

const useQueryProdutcts = (skip, options) => {
  return useQuery(
    [`get-products`, { skip }],
    () => getProducts(skip),
    {
      ...options
    }
  );
}

export {
  useQueryProdutcts
}