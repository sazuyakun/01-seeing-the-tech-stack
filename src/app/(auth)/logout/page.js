import LogoutButton from "../../../components/LogoutButton";

export default function LogoutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Log Out</h1>
      <p className="mb-4 text-center">Are you sure you want to log out?</p>
      <LogoutButton />
    </div>
  );
}
