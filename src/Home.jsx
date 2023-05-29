import debounce from 'lodash.debounce'
import { useCallback, useState } from 'react'

const mockResults = ['John', 'Jane', 'Joe', 'Jill']

const getSearchResults = async (searchTerm) => {
// mock an API call to get search results 
console.log('making an API request') 
await new Promise((resolve) => setTimeout(resolve, 1000))
return mockResults.filter((result) =>
result.toLowerCase().includes (searchTerm.toLowerCase()))
}


export default function Home() {

const [searchResults, setSearchResults] = useState([])
const [searchTerm, setSearchTerm] = useState("")
// const handleSearch = async (searchTerm) => { 
//     const results = await getSearchResults (searchTerm) 
//     setSearchResults (results)}


const request = debounce(async (searchTerm)=> {
    const results = await getSearchResults (searchTerm) 
    setSearchResults (results)
},500)


const debounceRequest = useCallback((searchTerm)=>{
    request(searchTerm)
},[])

const onChange=(e)=>{
    setSearchTerm(e.target.value)
    debounceRequest(e.target.value)
}

return (
    <div>
        <input type='text' value={searchTerm} onChange={(e)=>onChange(e)} />
        <div>
            Result: 
            {searchResults.map((result) =>(
                <div key={result}>{result}</div>
            ))}
        </div>
    </div>
    )

}