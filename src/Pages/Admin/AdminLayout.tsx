import { Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div>
        <p className="text-2xl font-bold">Admin Dashboard</p>
        <Outlet />
    </div>
  )
}

export default AdminLayout