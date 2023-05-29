// import { useState } from 'react'
import './App.css'
import Country from './Country'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Country />
  
    </>
  )
}

export default App



// import axios from 'axios';
// import debounce from 'lodash.debounce';
// import { useEffect, useState } from 'react';

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users?name=${searchQuery}`);
//         setData(response.data);
//         // console.log(data)
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     const debouncedFetchData = debounce(fetchData, 500);

//     if (searchQuery) {
//       debouncedFetchData();
//     } else {
//       setData([]);
//     }

//     return () => {
//       debouncedFetchData.cancel();
//     };
//   }, [searchQuery]);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search..." />

//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App;
