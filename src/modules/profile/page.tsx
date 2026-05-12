import Navbar from "@/components/layout/navbar";

import ProtectedRoute from "@/components/common/protected-route";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold">
          My Profile
        </h1>
      </main>
    </ProtectedRoute>
  );
}