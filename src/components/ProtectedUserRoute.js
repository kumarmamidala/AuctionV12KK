import { Navigate } from 'react-router-dom'

const ProtectedUserRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedUserRoute
