import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";

import gql from "graphql-tag";

export const GET_COLORS_SIDEPANEL = gql`
  query {
    getColorsPaginate(pagination: { take: 10, skip: 0 }) {
      id
      color
      hexvalue
    }
  }
`;

const styles = {
  listStyle: {
    padding: "1.5em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  buttonStyle: {
    marginTop: "5em",
    marginBottom: 30,
    width: 200,
    borderRadius: 5,
    backgroundColor: "#FFFFFF"
  },
  spanStyle: {
    width: "100%",
    margin: 5
  }
};

const SidePanel = () => {
  const { data } = useQuery(GET_COLORS_SIDEPANEL);

  return (
    <>
      {data ? (
        <div style={styles.listStyle}>
          <Button variant="contained" style={styles.buttonStyle}>
            {" "}
            Random Color
          </Button>
          {data.getColorsPaginate.map(color => (
            <span key={color.id} style={styles.spanStyle}>
              {color.color}
            </span>
          ))}
        </div>
      ) : (
        <>
          <p>Error fetching data.</p>
        </>
      )}
    </>
  );
};

export default SidePanel;
