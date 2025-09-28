import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <span className="text-lg text-gray-500">No user logged in.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8">
      <img
        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-purple-700 mb-1">{user.name}</h2>
      <p className="text-gray-600 mb-6">{user.email}</p>
      <div className="w-full">
        {/* User cart section placeholder */}
      </div>
    </div>
  );
};

export default Profile;
