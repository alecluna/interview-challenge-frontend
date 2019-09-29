import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CardColor from "./CardColor";

export const GET_COLORS = gql`
  query {
    getColors {
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
  const { data } = useQuery(GET_COLORS);

  return (
    <>
      {data ? (
        <div style={styles.cardFlexBox}>
          {data.getColors.map(color => (
            <div key={color.id}>
              <CardColor hexvalue={color.hexvalue} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p>Loading....</p>
        </>
      )}
    </>
  );
};

export default QueryColors;
