import Table from "../../components/Table";
import Title from "../../components/Title";
import { Get } from "../../helpers/api";

import "./styles.scss";

const Products = () => {
  const url = "https://dummyjson.com/products?limit=10";

  const data = Get(url);

  return (
    <>
      <Title text="Produtos" />
      <div className="Products">{data && <Table data={data} />}</div>
    </>
  );
};

export default Products;
