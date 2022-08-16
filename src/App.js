import React from 'react';
import { Box, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer,
 } from '@chakra-ui/react';
import UseFetch from "./UseFetch";

function App() {
  const { data, loading, error} = UseFetch(
    "http://universities.hipolabs.com/search?country=Malaysia"
  );

  if (loading) return <Text>LOADING...</Text> 

  if (error) console.log(error);

  return (
      <Box fontSize="md">
        <Text textAlign='center' fontSize='25px' marginBottom='15px' marginTop='15px'>Universities in Malaysia</Text>
        <TableContainer>
          <Table variant='simple' size='sm'>
            <Thead bgColor='gray.100'> 
              <Tr>
                <Th>Domains</Th>
                <Th>Alpha-two-code</Th>
                <Th>Country</Th>
                <Th>Web-pages</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(data => (
                <Tr key={data.name}>
                  <Td>{data.domains}</Td>
                  <Td>{data.alpha_two_code}</Td>
                  <Td>{data.country}</Td>
                  <Td>{data.web_pages}</Td>
                  <Td>{data.name}</Td>
                </Tr>
              ))}
              
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
  );
}

export default App;
