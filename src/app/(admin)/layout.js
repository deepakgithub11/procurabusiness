// app/(admin)/layout.jsx
export const metadata = {
  title: "Admin Panel",
  description: "Admin section layout",
}

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      {children}
    </div>
  )
}
