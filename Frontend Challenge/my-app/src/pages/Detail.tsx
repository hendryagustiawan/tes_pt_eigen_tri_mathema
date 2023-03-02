import React from "react";
import { Typography, Image } from "antd";
import { CustomHeader } from "../components/CustomHeader";
import { useLocation } from "react-router-dom";

const { Title, Text } = Typography;

export const Detail = () => {
  const location = useLocation();
  const state = location.state;
  const time = new Date(state.publishedAt);

  return (
    <>
      <CustomHeader />
      <Title level={2} style={{ textAlign: "center" }}>
        {state.title}
      </Title>
      <div style={{ padding: "30px" }}>
        <div style={{ display: "flex" }}>
          <Text type="success" style={{ paddingRight: 10 }}>
            {state.author}
          </Text>
          <Text>{time.toString()}</Text>
        </div>
        <Image style={{ aspectRatio: 16 / 9, marginTop: 10 }} src={state.urlToImage} />
        <div style={{ fontSize: 18, marginTop: 10 }}>
          <Text>{state.content}</Text>
          <Text>{state.description}</Text>
        </div>
        <Text>
          {" "}
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Source : </Text>
          {state.url}
        </Text>
      </div>
    </>
  );
};
