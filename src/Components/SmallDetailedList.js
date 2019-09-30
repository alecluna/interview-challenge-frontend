import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

const GET_DETAILED_LIST = gql`
  query GetColorsPaginate($take: Int!, $skip: Int!) {
    getColorsPaginate(pagination: { take: $take, skip: $skip }) {
      id
      color
      hexvalue
    }
  }
`;

const styles = {
  smallCardFlexBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  cardStyle: {
    width: 150,
    height: 200,
    margin: 15,
    borderRadius: 5
  },
  cardContentStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  font: { fontSize: "1em" }
};

const SmallDetailedList = () => {
  const { data } = useQuery(GET_DETAILED_LIST, {
    variables: {
      take: 5,
      skip: 0
    }
  });

  return (
    <>
      {data ? (
        <div style={styles.smallCardFlexBox}>
          {data.getColorsPaginate.map(data => (
            <div key={data.id}>
              <Link
                to={{
                  pathname: `/${data.hexvalue}`,
                  state: {
                    hexvalue: data.hexvalue
                  }
                }}
                replace
                style={{ textDecoration: "none" }}
              >
                <Card style={styles.cardStyle}>
                  <div
                    style={{
                      height: "80%",
                      backgroundColor: `#${data.hexvalue}`
                    }}
                  ></div>
                  <CardContent style={styles.cardContentStyle}>
                    <p style={styles.font}>#{data.hexvalue}</p>
                  </CardContent>
                </Card>
              </Link>
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

export default SmallDetailedList;
