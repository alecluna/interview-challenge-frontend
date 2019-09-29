import React, { useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";

const styles = {
  cardStyle: {
    width: 500,
    height: 300,
    margin: 15,
    borderRadius: 5
  },
  cardContentStyle: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  font: { fontSize: "1em" }
};

const DetailedView = props => {
  return (
    <>
      <Card style={styles.cardStyle}>
        <div
          style={{
            height: 155,
            backgroundColor: `#${props.match.params.hexvalue}`
          }}
        ></div>
        <CardContent style={styles.cardContentStyle}>
          <p style={styles.font}>#{props.match.params.hexvalue}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailedView;
