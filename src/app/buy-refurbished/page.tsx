"use client";

import React, { useState } from "react";
import styles from "./buyrefurbished.module.scss";
import Text from "@/components/input/text";
import { useModalContext } from "@/context/modal/ModalContext"; // Ensure you're using the correct context
import Modal from "@/components/modal"; // Assuming Modal is available
import Button from "@/components/input/button";
import Link from "next/link";

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
};

const products: Product[] = [
  {
    id: 1,
    image:
      "https://i5.walmartimages.com/asr/af622720-d5cd-40fa-b0e7-19a4d9a8f926_1.fda96212c7c3a0b9126ab439938990b1.jpeg",
    title: "HP Pavilion 9000",
    price: "$450",
  },
  {
    id: 2,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/Toshiba_PDA09U_002004_16GB_Excite_7_7_Tablet_860030.jpg",
    title: "Notebook Air 720",
    price: "$200",
  },
  {
    id: 3,
    image: "http://m.phonegg.com/32/3243b-3.jpg",
    title: "iPhone 4",
    price: "$300",
  },
  {
    id: 4,
    image:
      "https://www.mytrendyphone.eu/images/Samsung-Galaxy-S9-64GB-Pre-owned-Good-Condition-Midnight-Black-23082019-01-p.jpg",
    title: "Samsung Galaxy S9",
    price: "$250",
  },
  {
    id: 5,
    image:
      "https://www.informationq.com/wp-content/uploads/2013/11/Dell-Inspiron-15-3521-15.6-inch-Laptop-Black.jpg",
    title: "Dell Inspiron 15",
    price: "$500",
  },
  {
    id: 6,
    image:
      "https://diamu.com.bd/wp-content/uploads/2019/04/google-pixel-3xl.jpg",
    title: "Google Pixel 3",
    price: "$280",
  },
  {
    id: 7,
    image:
      "https://1.bp.blogspot.com/-ibE5xUWGnQ8/Xx8AiKrCGAI/AAAAAAAAcKk/0qxFS45IQkQm6V6BbQpM-r_qv_K_AgPqwCLcBGAsYHQ/s2048/macbook%2Bair%2B2015%2B%2B3.jpg",
    title: "MacBook Air 2015",
    price: "$600",
  },
  {
    id: 8,
    image:
      "https://www.bhphotovideo.com/images/images2000x2000/sony_1289_5363_xperia_z3_dual_d6633_1091972.jpg",
    title: "Sony Xperia Z3",
    price: "$220",
  },
  {
    id: 9,
    image:
      "https://www.asus.com/us/Commercial-Laptops/ASUS-Chromebook-C202SA/websites/global/products/bqM4xvobKQ44iv6y/img/laptop-without-antenna.png",
    title: "Asus Chromebook C202",
    price: "$180",
  },
  {
    id: 10,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/ThinkPad_X1_Carbon_2015/x12015.jpg",
    title: "Lenovo ThinkPad X1 Carbon",
    price: "$700",
  },
];

function BuyRefurbished() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const modalController = useModalContext();

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    modalController.open(
      <ProductModal product={product} close={modalController.close} />
    );
  };

  return (
    <div className={styles.container}>
      <h2>Buy Refurbished Products</h2>

      {/* Search input field */}
      <Text
        label=""
        placeholder="Search..."
        callback={(e) => setSearchTerm(e)}
      />

      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyClick(product)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ProductModal = ({
  product,
  close,
}: {
  product: Product;
  close: () => void;
}) => {
  return (
    <Modal settings={{ closeCallback: close }}>
      <div className={styles.modalContent}>
        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className={styles.modalImage}
        />
        <p>Price: {product.price}</p>
        <div className={styles.modalButtons}>
          <Button clickCallback={close}>Close</Button>
          <Link href={"/payment"}>
            <Button clickCallback={close}>Buy</Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default BuyRefurbished;
