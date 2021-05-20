import React from "react";
import Tshirts from "../assets/tshirts.jpg";
import Beanie from "../assets/beanie.jpg";
import Hat from "../assets/hat.jpg";
import Shades from "../assets/shades.jpg";
import ColoMug from "../assets/mug.jpg";

import "./Products.css";
import { Card, Button, Typography } from "antd";

const Products = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <>
      <Title level={2}>Merch For Sale</Title>
      <Card className="products__container">
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Tshirts} />}
        >
          <Meta title="Plain TShirts $14.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={ColoMug} />}
        >
          <Meta title="Colorado Dreamin Mug $14.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Shades} />}
        >
          <Meta title="Shades $25.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Hat} />}
        >
          <Meta title="Plain Hat $20.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Beanie} />}
        >
          <Meta title="Plain Beanie $12.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Tshirts} />}
        >
          <Meta title="Plain TShirts $14.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={ColoMug} />}
        >
          <Meta title="Colorado Dreamin Mug $14.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Shades} />}
        >
          <Meta title="Shades $25.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Hat} />}
        >
          <Meta title="Plain Hat $20.00" />
          <Button>Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<img alt="example" src={Beanie} />}
        >
          <Meta title="Plain Beanie $12.00" />
          <Button>Add to Cart</Button>
        </Card>
      </Card>
    </>
  );
};

export default Products;
