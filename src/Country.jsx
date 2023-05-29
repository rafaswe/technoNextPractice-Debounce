import axios from 'axios';
import { useEffect, useState } from 'react';
import useDebounce from './hooks/useDebounce';

const Country = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = useDebounce(() => {
    if (searchQuery.trim() !== '') {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredUsers);
    } else {
      setSearchResults(users);
    }
  }, 500);

//  whith lodash library
  // const debouncedSearch = useMemo(
  //   () =>
  //     debounce((value) => {
  //       if (value.trim() !== '') {
  //         const filteredUsers = users.filter((user) =>
  //           user.name.toLowerCase().includes(value.toLowerCase())
  //         );
  //         setSearchResults(filteredUsers);
  //       } else {
  //         setSearchResults(users);
  //       }
  //     }, 1000),
  //   [users]
  // );






  console.log(debouncedSearch)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search Users" />
      <p>Results</p>
      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};



export default Country;