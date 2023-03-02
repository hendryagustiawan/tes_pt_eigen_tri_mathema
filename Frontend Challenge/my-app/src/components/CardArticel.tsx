import React from "react";
import { Card, Col, Button } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

interface typeData {
  dataArticel: {
    author: string;
    description: string;
    content: string;
    publishedAt: string;
    urlToImage: string;
    title: string;
    url: string;
  };
}

export const CardArticel = ({ dataArticel }: typeData) => {
  return (
    <div>
      <Col span={4} style={{ margin: 30 }}>
        <Card hoverable style={{ width: 240, aspectRatio: 1 / 1 }} cover={<img alt="example" src={dataArticel.urlToImage} />}>
          <Meta title={dataArticel.title} description={dataArticel.content} />
          <Link
            to="/detail"
            state={{ author: dataArticel.author, description: dataArticel.description, content: dataArticel.content, publishedAt: dataArticel.publishedAt, urlToImage: dataArticel.urlToImage, title: dataArticel.title, url: dataArticel.url }}
          >
            <Button style={{ marginTop: 10, color: "yellow" }} type="primary">
              Detail
            </Button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};
