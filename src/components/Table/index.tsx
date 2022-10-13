import { useState } from "react";
import { Delete } from "../../helpers/api";
import { Product, Products } from "../../types/product";
import Button from "../Button";
import { IconEdit, IconGlass, IconTrash } from "../Icons";
import LinkButton from "../LinkButton";
import Modal from "../Modal";

import "./styles.scss";

interface TableProps {
  data: Products;
}

const Table = (props: TableProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentIn] = useState("");
  // const products = props.data.products;

  function remove(id: string) {
    setOpenModal(true);
    setCurrentIn(id);
  }

  function deleteProduct(id: string) {
    Delete(id);
    removeFromList(id);
    setOpenModal(false);
  }

  //state e função criado para simular remoção
  const [products, setProducts] = useState<Product[]>(props.data.products);
  function removeFromList(id: any) {
    setProducts(
      products.filter((product) => {
        return product.id != id;
      })
    );
  }

  function renderHeader() {
    return (
      <tr>
        <th>Nome do produto</th>
        <th>Ações</th>
      </tr>
    );
  }
  function renderData() {
    return products?.map((item: any, i) => (
      <tr key={item.id}>
        <td>{item.title}</td>
        {renderActions(item.id)}
      </tr>
    ));
  }

  function renderActions(id: any) {
    return (
      <td className="Table__links">
        <LinkButton to={`/product/${id}`} title="Ver Dados">
          {IconGlass}
        </LinkButton>
        <LinkButton to={`/product/update/${id}`} title="Alterar" color="green">
          {IconEdit}
        </LinkButton>
        <Button onClick={() => remove(id)} color="red" round>
          {IconTrash}
        </Button>
      </td>
    );
  }
  return (
    <>
      <table className="Table">
        <thead>{renderHeader()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          action={() => deleteProduct(currentId)}
        />
      )}
    </>
  );
};

export default Table;
