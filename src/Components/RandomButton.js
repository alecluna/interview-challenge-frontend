import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Redirect } from "react-router-dom";

const GET_RANDOM_COLOR = gql`
  query($id: ID!) {
    getColorID(id: $id) {
      hexvalue
    }
  }
`;

const styles = {
  buttonStyle: {
    marginTop: "6em",
    marginBottom: "1.5em",
    height: "3.7em",
    width: "15em",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    borderColor: "black"
  }
};

const RandomButton = () => {
  const [loadRandColor, { called, data }] = useLazyQuery(GET_RANDOM_COLOR, {
    variables: {
      id: Math.trunc(Math.random() * 100)
    },
    fetchPolicy: "cache-first"
  });

  return (
    <>
      {called && data ? (
        <>
          <Redirect
            to={{
              pathname: `/${data.getColorID.hexvalue}`,
              state: {
                hexvalue: data.getColorID.hexvalue
              }
            }}
          />
          <button onClick={() => loadRandColor()} style={styles.buttonStyle}>
            <p style={{ fontSize: "1.3em" }}> Random Color </p>
          </button>
        </>
      ) : (
        <button onClick={() => loadRandColor()} style={styles.buttonStyle}>
          <p style={{ fontSize: "1.3em" }}> Random Color </p>
        </button>
      )}
    </>
  );
};

export default RandomButton;
