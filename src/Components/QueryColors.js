import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_COLORS = gql`
  query getColors {
    color {
      id
      color
      hexvalue
    }
  }
`;

const QueryColors = () => (
  <Query query={GET_COLORS}>
    {({ data }) =>
      data ? (
        <>
          {data.getColors.map(color => (
            <ul key={color.id}>
              <li>{color.color}</li>
              <li>{color.hexvalue}</li>
            </ul>
          ))}
        </>
      ) : (
        <>No Data!!</>
      )
    }
  </Query>
);

export default QueryColors;
