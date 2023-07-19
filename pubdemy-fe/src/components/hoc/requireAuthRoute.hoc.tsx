import React, { PropsWithChildren, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppDispatch } from '../../redux/store/store'
import { IsAuth } from '../../customHooks/isAuth.hook'

type RequireAuthProp = {
    children:ReactNode;
}

const RequireAuthRoute = ({children}:RequireAuthProp) => {
    const isAuth = IsAuth;
  if (!isAuth()) {
    return <Navigate to="/" />
  }
  return <>{children}</>
}
export default RequireAuthRoute;