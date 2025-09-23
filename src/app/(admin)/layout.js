'use client'
import { AdminNavbar, Unauthorized, Loader } from "./admin-components"
import Sessionwrapper from "../sessionwrapper/route";
import { useSession } from "next-auth/react"


export default function AdminLayout({ children }) {
  const { data: session, status } = useSession()

  if (status === 'loading') return <Loader/>;


  if (session) {
    return (
      <div className="admin-container">
        <Sessionwrapper>
          <AdminNavbar />
          {children}
        </Sessionwrapper>
      </div>
    )
  }

  return (
    <div><Unauthorized /></div>
  )
}
