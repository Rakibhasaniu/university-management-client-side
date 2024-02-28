// export const semesterOptions = [
//     { value: '01', label: 'Autumn' },
//     { value: '02', label: 'Summer' },
//     { value: '03', label: 'Fall' },
//   ];

import { CurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

  

const protectedRoute = ({children}:{children: ReactNode}) => {
  const token = useAppSelector(CurrentUser);
  if(!token){
    return <Navigate to="/login" replace={true} />;
  }
  return children;

};

export default protectedRoute;