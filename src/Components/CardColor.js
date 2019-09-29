import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
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

const CardColor = ({ hexvalue }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/${hexvalue}`,
          state: {
            hexvalue: hexvalue
          }
        }}
        replace
        style={{ textDecoration: "none" }}
      >
        <Card style={styles.cardStyle}>
          <div style={{ height: "80%", backgroundColor: `#${hexvalue}` }}></div>
          <CardContent style={styles.cardContentStyle}>
            <p style={styles.font}>#{hexvalue}</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardColor;
