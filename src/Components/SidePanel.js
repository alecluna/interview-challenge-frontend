import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import RandomButton from "../Components/RandomButton";

const GET_COLORS_SIDEPANEL = gql`
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
    marginTop: "6em",
    marginBottom: "1.5em",
    height: "3.7em",
    width: "15em",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    borderColor: "black"
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
          <RandomButton />
          {data.getColorsPaginate.map(color => (
            <span key={color.id} style={styles.spanStyle}>
              <p>{color.color}</p>
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
