import React from 'react'
import classes from './editProperty.module.css'

const EditProperty = () => {
  const { id } = useParams()
  const { token } = useSelector((state) => state.auth)
  const [propertyDetails, setPropertyDetails] = useState(null)
  const [photo, setPhoto] = useState(null)
  const [initialPhoto, setInitialPhoto] = useState(null)
  const [error, setError] = useState(false)
  const [emptyFields, setEmptyFields] = useState(false)
  const navigate = useNavigate()

  return (
    <div></div>
  )
}

export default EditProperty