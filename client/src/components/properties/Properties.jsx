import React, { useEffect, useState } from 'react'
import classes from './properties.module.css'
import { useLocation } from 'react-router-dom'


const Properties = () => {
  const [allProperties, setAllProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [state, setState] = useState(null)
  const query = (useLocation().search).slice(1)
  const arrQuery = query.split("&")
  const navigate = useNavigate()


 
  // fetch all properties

  useEffect(() => {
    const fetchAllProperties =async() => {
    const data = await request('/property/getAll', 'GET')
    setAllProperties(data)
    }
    fetchAllProperties()
  }, [])

  //parsing query params
  useEffect(() => {
    if(arrQuery && allProperties?.length > 0 && state === null){
      let formattedQuery = {}

      arrQuery.forEach((option, idx) => {
        const key = option.split("=")[0]
        const value = option.split("=")[1]

        formattedQuery ={...formattedQuery, [key]: value}

        if(idx === arrQuery.length -1){
          setState(formattedQuery)
          handleSearch(formattedQuery)
        }
      })
    }
  }, [allProperties, arrQuery])

  const handleSearch = (param = state) => {
    let options

    if(param?.nativeEvent) {
      options = state 
    } else {
      options = param
    }

    const filteredProperties = allProperties.filter((property) => {
      const priceRange = arrPriceRanges[options.priceRange]
    })
  }

  return (
    <div>Properties</div>
  )
}

export default Properties