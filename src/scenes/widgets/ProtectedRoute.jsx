import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const isAuth=Boolean(useSelector(state=>state.token))
    
    useEffect(()=>{
       if(!isAuth) navigate('/')
    },[isAuth,navigate])

   return isAuth ? children : null
}

export default ProtectedRoute