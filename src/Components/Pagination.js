import React from "react";

const styles = {
  paginateStyles: {
    marginTop: "1.5em",
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
};

const Pagination = ({ dataLength, fetchMore }) => {
  let list = [];
  for (let i = 0; i <= Math.ceil(dataLength / 10); i++) {
    list.push(i);
  }

  return (
    <div style={styles.paginateStyles}>
      {list.map(index => (
        <li key={index}>
          <p
            onClick={() => {
              fetchMore({
                variables: {
                  take: 10,
                  skip: index * 10
                },
                updateQuery: (prev, { variables }) => {
                  if (!variables) return prev;
                  console.log(prev, variables);
                  return {
                    ...prev.data.getColorsPaginate,
                    ...variables.data.getColorsPaginate
                  };
                }
              });
            }}
            style={{ padding: 10 }}
          >
            {index}
          </p>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
