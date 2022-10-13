import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { IconEdit, IconTrash } from "../../components/Icons";
import LinkButton from "../../components/LinkButton";
import Modal from "../../components/Modal";
import Title from "../../components/Title";
import { Delete, Get } from "../../helpers/api";
import { Product } from "../../types/product";

import "./styles.scss";

const ProductDetails = () => {
  const [openModal, setOpenModal] = useState(false);

  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const data: Product = Get(url);

  interface ImagesProps {
    imagesArray: [string] | undefined;
  }

  function remove(id: any) {
    setOpenModal(true);
  }

  function deleteProduct(id: any) {
    Delete(id);
    setOpenModal(false);
  }

  function Images({ imagesArray }: ImagesProps) {
    const [img, setImg] = useState(imagesArray?.at(-1));
    return (
      <div className="Images">
        <div className="Images__list">
          {imagesArray?.map((image) => (
            <img
              key={image.substring(30)}
              className="Images__list__sm"
              src={image}
              alt=""
              onClick={() => setImg(image)}
            />
          ))}
        </div>
        <img className="Images__lg" src={img} alt="" />
      </div>
    );
  }

  return (
    <>
      <Title text="Produto Selecionado" />
      {data && (
        <div className="ProductDetails">
          <Images imagesArray={data.images} />
          <div className="ProductDetails__info">
            <div className="Table__links">
              <LinkButton
                to={`/product/update/${id}`}
                title="Alterar"
                color="green"
              >
                {IconEdit}
              </LinkButton>
              <Button onClick={() => remove(id)} color="red" round>
                {IconTrash}
              </Button>
            </div>
            <h2 className="ProductDetails__title">{data.title}</h2>
            <p className="ProductDetails__description">{data.description}</p>
            <p className="ProductDetails__price">
              <span>Preço:</span>
              R${data.price}
            </p>
            <p className="ProductDetails__discountPercentage">
              <span>Porcentagem de desconto: </span>
              {data.discountPercentage}%
            </p>
            <p className="ProductDetails__rating">
              <span> Avaliação: </span>
              {data.rating}
            </p>
            <p className="ProductDetails__stock">
              <span>Estoque: </span>
              {data.stock}
            </p>
            <p className="ProductDetails__brand">
              <span>Marca: </span>
              {data.brand}
            </p>
            <p className="ProductDetails__category">
              <span>Categoria: </span>
              {data.category}
            </p>
            <div className="ProductDetails__buttons">
              <LinkButton
                to={`/product/update/${id}`}
                title="Alterar"
                color="green"
              />
              <LinkButton
                to={`/product/delete/${id}`}
                title="Excluir"
                color="red"
              />
            </div>
          </div>
        </div>
      )}
      {openModal && (
        <Modal closeModal={setOpenModal} action={() => deleteProduct(id)} />
      )}
    </>
  );
};

export default ProductDetails;
