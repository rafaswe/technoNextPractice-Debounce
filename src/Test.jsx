import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
// import useDebounce from './hooks/useDebounce'

const Country = () => {
    const [search,setSearch]=useState("")
    const [countryList,setCountryList]=useState([])

    // const debeounceSearchTerm= useDebounce(search)

    const source = axios.CancelToken.source();
    console.log(search)

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((response)=>setCountryList(response.data))
        .catch((error)=>console.log(error))

        return () => {
          source.cancel('Cleanup: Component unmounted');
          // console.log("DOne")
        };
    },[])

    const countries = useMemo(()=>{
      
      // if(search==="") return countryList;
        // if (!search) return countryList[0];

        // const countriesName = countryList.map((country) => country.name.common);
      
        return countryList.filter((country) =>{
          return (
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
        }
        );
    },[search,countryList])


    // console.log(countries)
    // console.log(countriesName)


    return (
        <div>
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
          <p>Results</p>
          <ul>
            {countries.map((country,index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ul>
          
        </div>
      );
}

export default Country