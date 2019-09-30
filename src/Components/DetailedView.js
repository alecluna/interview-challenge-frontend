import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import SmallDetailedList from "./SmallDetailedList";

const styles = {
  cardStyle: {
    height: "40vh",
    margin: 15,
    borderRadius: 5
  },
  cardContentStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  font: { fontSize: "1.8em" },
  buttonStyle: {
    marginBottom: "1.5em",
    height: "3.7em",
    width: "15em",
    borderRadius: 7,
    backgroundColor: "#FFFFFF",
    borderColor: "black"
  }
};

const DetailedView = props => {
  return (
    <>
      <Card style={styles.cardStyle}>
        <div
          style={{
            height: "80%",
            backgroundColor: `#${props.match.params.hexvalue}`
          }}
        ></div>
        <CardContent style={styles.cardContentStyle}>
          <p style={styles.font}>#{props.match.params.hexvalue}</p>
        </CardContent>
      </Card>
      <SmallDetailedList />
      <div style={styles.buttonPosition}>
        <Link
          to={{
            pathname: "/"
          }}
        >
          <button style={styles.buttonStyle}>
            <p style={{ fontSize: "1.3em" }}> Clear </p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default DetailedView;
