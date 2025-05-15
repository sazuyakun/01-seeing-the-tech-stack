export default function AuthLayout({ children }){
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
