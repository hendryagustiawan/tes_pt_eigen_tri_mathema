import { Row } from "antd";
import { CustomHeader } from "../components/CustomHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardArticel } from "../components/CardArticel";

export const Home = () => {
  const [articel, setArticel] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://newsapi.org/v2/everything?q=tesla&from=2023-02-01&sortBy=publishedAt&apiKey=28ed6685306542668cc198629ea45c8b",
    })
      .then(({ data }) => {
        setArticel(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <CustomHeader />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {articel.map((el, index) => {
          return (
            <div key={index}>
              <CardArticel dataArticel={el} />;
            </div>
          );
        })}
      </Row>
    </>
  );
};
