import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  cardStyle: {
    width: 175,
    height: 200,
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

const CardColor = ({ hexvalue }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/${hexvalue}`,
          state: {
            hexvalue: `${hexvalue}`
          }
        }}
      >
        <Card style={styles.cardStyle}>
          <div style={{ height: 155, backgroundColor: `#${hexvalue}` }}></div>
          <CardContent style={styles.cardContentStyle}>
            <p style={styles.font}>#{hexvalue}</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardColor;
