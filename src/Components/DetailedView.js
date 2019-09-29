import React from "react";
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

const DetailedView = ({ hexvalue }) => {
  return (
    <>
      <Card style={styles.cardStyle}>
        <div style={{ height: 155, backgroundColor: `#${hexvalue}` }}></div>
        <CardContent style={styles.cardContentStyle}>
          <p style={styles.font}>#{hexvalue}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailedView;
