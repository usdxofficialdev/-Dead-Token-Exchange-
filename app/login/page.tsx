export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 border rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 text-black rounded"
        />

        <button className="w-full p-3 bg-yellow-500 text-black font-bold rounded">
          Send OTP
        </button>
      </div>
    </div>
  );
}
