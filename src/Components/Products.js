import React from "react";
import Tshirts from "../assets/plain_tshirt.jpg";
import Beanie from "../assets/beanie.jpg";
import Hat from "../assets/hat.jpg";
import Shades from "../assets/shades.jpg";
import ColoMug from "../assets/mug.jpg";
import GiftSet from "../assets/gift_set.jpg";
import Poster from "../assets/poster.jpg";
import StarsPoster from "../assets/stars_poster.jpg";
import RiverPoster from "../assets/river_poster.jpg";
import Bandana from "../assets/bandana.jpg";

import "./Products.css";
import { Card, Button, Typography, Image } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";

const Products = () => {
  const { Meta } = Card;
  const { Title } = Typography;

  return (
    <>
      <Card className="products__title">
        <Title level={3}>
          <CoffeeOutlined /> Rock our Merch! <CoffeeOutlined />
        </Title>
      </Card>
      <Card className="products__container">
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Tshirts} />}
        >
          <Meta title="Plain TShirts $14.00" />
          <Button className="products__btn one">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Bandana} />}
        >
          <Meta title="Bandana $8.00" />
          <Button className="products__btn two">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Shades} />}
        >
          <Meta title="Shades $25.00" />
          <Button className="products__btn three">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Hat} />}
        >
          <Meta title="Plain Hat $20.00" />
          <Button className="products__btn four">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Beanie} />}
        >
          <Meta title="Plain Beanie $12.00" />
          <Button className="products__btn five">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={GiftSet} />}
        >
          <Meta title="Gift Set $20.00" />
          <Button className="products__btn six">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={Poster} />}
        >
          <Meta title="Camping Poster $15.00" />
          <Button className="products__btn seven">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={StarsPoster} />}
        >
          <Meta title="Night Sky Poster $15.00" />
          <Button className="products__btn eight">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={RiverPoster} />}
        >
          <Meta title="River Poster $15.00" />
          <Button className="products__btn nine">Add to Cart</Button>
        </Card>
        <Card
          className="products__card"
          hoverable
          cover={<Image alt="example" src={ColoMug} />}
        >
          <Meta title="Colorado Mug $12.00" />
          <Button className="products__btn ten">Add to Cart</Button>
        </Card>
      </Card>
    </>
  );
};

export default Products;
