import React from "react";
import { Card, CardContent } from "@material-ui/core";
import SmallDetailedList from "./SmallDetailedList";

const styles = {
  cardStyle: {
    height: "50vh",
    margin: 15,
    borderRadius: 5
  },
  cardContentStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  font: { fontSize: "1.8em" }
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
    </>
  );
};

export default DetailedView;
