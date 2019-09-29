import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CardColor from "./CardColor";

const GET_COLORS_PAGINATE = gql`
  query GetColorsPaginate($take: Int!, $skip: Int!) {
    getColorsPaginate(pagination: { take: $take, skip: $skip }) {
      id
      color
      hexvalue
    }
  }
`;

const styles = {
  cardFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  }
};

const QueryColors = () => {
  const { data } = useQuery(GET_COLORS_PAGINATE, {
    variables: {
      take: 10,
      skip: 0
    }
  });

  return (
    <>
      {data ? (
        <div style={styles.cardFlexBox}>
          {data.getColorsPaginate.map(color => (
            <div key={color.id}>
              <CardColor hexvalue={color.hexvalue} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p
            style={{ fontSize: "2em", textAlign: "center", paddingTop: "5em" }}
          >
            Loading...
          </p>
        </>
      )}
    </>
  );
};

export default QueryColors;
