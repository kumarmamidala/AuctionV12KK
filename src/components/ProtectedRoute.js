import { Navigate } from 'react-router-dom'
import TopBar from './TopBar'

const ProtectedRoute = ({ user, children }) => {
  if (user) {
    ;<TopBar />
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
