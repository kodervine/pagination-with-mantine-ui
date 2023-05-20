import { Group, Pagination, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { mockData } from "./data";

function App() {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(1);

  const startingIndex = (pageNumber - 1) * pageSize;
  const pageData = mockData.slice(startingIndex, startingIndex + pageSize);

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  return (
    <Stack spacing="xs">
      <Title>Learning Pagination</Title>
      <Group>
        <Text weight={500}>First Name</Text>
        <Text weight={500}>Last Name</Text>
        <Text weight={500}>Year</Text>
      </Group>
      {pageData.map((data) => (
        <Group key={data.id}>
          <Text>{data.firstName}</Text>
          <Text>{data.lastName}</Text>
          <Text>{data.yearOfBirth}</Text>
        </Group>
      ))}
      <Pagination
        total={Math.ceil(mockData.length / pageSize)}
        withEdges
        page={pageNumber}
        onChange={handlePageChange}
        styles={() => ({
          item: {
            background: "none",
            border: "1px solid gray",
          },
        })}
      />
    </Stack>
  );
}

export default App;
