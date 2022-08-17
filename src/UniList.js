import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import FetchData from './FetchData';

const UniList = () => {
  const { universities, error } = FetchData(
    'http://universities.hipolabs.com/search?country=Malaysia'
  );
  if (error) console.log(error);
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>University List</TableCaption>
          <Thead>
            <Tr>
              <Th>domains</Th>
              <Th>aplha_two_code</Th>
              <Th>country</Th>
              <Th>web_pages</Th>
              <Th>name</Th>
              <Th>state-province</Th>
            </Tr>
          </Thead>
          <Tbody>
            {universities.map(uni => (
              <Tr key={uni.name}>
                <Td>{uni.domains}</Td>
                <Td>{uni.alpha_two_code}</Td>
                <Td>{uni.country}</Td>
                <Td>{uni.web_pages}</Td>
                <Td>{uni.name}</Td>
                <Td>{uni['state - province']}</Td> 
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UniList;
