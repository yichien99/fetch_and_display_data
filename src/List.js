import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import useFetch from './useFetch'

const List = () => {
    const { data, loading, error } = useFetch(
      "http://universities.hipolabs.com/search?country=Malaysia"
    );
  
    if (loading) return <h1> LOADING...</h1>;
    if (error) console.log(error);
  
    return ( 
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>Domains</Th>
                    <Th>Alpha Two Code</Th>
                    <Th>Country</Th>
                    <Th>Web Pages</Th>
                    <Th>Name</Th>
                </Tr>
                </Thead>
                <Tbody>
                {data.map(data => (
                    <Tr key={ data.name }>
                    <Td>{ data.domains }</Td>
                    <Td>{ data.alpha_two_code }</Td>
                    <Td>{ data.country }</Td>
                    <Td>{ data.web_pages }</Td>
                    <Td>{ data.name }</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
 
export default List;