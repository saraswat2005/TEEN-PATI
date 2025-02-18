export default function LoginPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffb900] text-white p-2 rounded-lg hover:bg-yellow-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account? <a href="/signup" className="text-blue-400">Sign up</a>
          </p>
        </div>
      </div>
    );
  }
  
  export function SignupPage() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
        <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffb900] text-white p-2 rounded-lg hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account? <a href="/signup" className="text-blue-400">Login</a>
          </p>
        </div>
      </div>
    );
  }
  