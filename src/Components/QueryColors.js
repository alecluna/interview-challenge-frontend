import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CardColor from "./CardColor";
import Pagination from "./Pagination";
import { useSpring, animated } from "react-spring";

const GET_COLORS_PAGINATE = gql`
  query GetColorsPaginate($take: Int!, $skip: Int!) {
    getColorsPaginate(pagination: { take: $take, skip: $skip }) {
      id
      color
      hexvalue
    }
  }
`;

const GET_COLOR_LENGTH = gql`
  query {
    getColors {
      id
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
  const queryPaginate = useQuery(GET_COLORS_PAGINATE, {
    variables: {
      take: 10,
      skip: 0
    }
  });
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  const queryLength = useQuery(GET_COLOR_LENGTH);

  const { data, loading, error, fetchMore, updateQuery } = queryPaginate;
  const { data: dataLength } = queryLength;

  if (loading)
    return (
      <p
        style={{
          fontSize: "2em",
          textAlign: "center",
          paddingTop: "5em"
        }}
      >
        Loading...
      </p>
    );
  if (error) return <p>ERROR</p>;

  return (
    <>
      {data ? (
        <animated.div style={props}>
          <div style={styles.cardFlexBox}>
            {data.getColorsPaginate.map(color => (
              <div key={color.id}>
                <CardColor hexvalue={color.hexvalue} />
              </div>
            ))}
          </div>
        </animated.div>
      ) : (
        <> Error </>
      )}

      <>
        {dataLength ? (
          <>
            <Pagination
              length={data}
              dataLength={dataLength.getColors.length}
              fetchMore={fetchMore}
              updateQuery={updateQuery}
            />
          </>
        ) : (
          <> Loading List... </>
        )}
      </>
    </>
  );
};

export default QueryColors;
