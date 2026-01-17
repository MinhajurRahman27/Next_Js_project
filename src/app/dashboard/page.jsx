"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen py-30 flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black py-30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {session.user?.name || session.user?.email}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-6 py-3 rounded-2xl font-semibold transition-all"
          >
            Sign Out
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20">
            <div className="text-gray-400 text-sm mb-2">Total Guns</div>
            <div className="text-white text-3xl font-bold">47</div>
            <div className="text-green-400 text-sm mt-2">+3 this month</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20">
            <div className="text-gray-400 text-sm mb-2">Categories</div>
            <div className="text-white text-3xl font-bold">12</div>
            <div className="text-blue-400 text-sm mt-2">Assault Rifles, SMGs, etc.</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20">
            <div className="text-gray-400 text-sm mb-2">Favorites</div>
            <div className="text-white text-3xl font-bold">8</div>
            <div className="text-purple-400 text-sm mt-2">Your collection</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20">
            <div className="text-gray-400 text-sm mb-2">Last Updated</div>
            <div className="text-white text-3xl font-bold">2d</div>
            <div className="text-yellow-400 text-sm mt-2">ago</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => router.push("/allguns")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all text-left"
            >
              <div className="text-lg mb-1">Browse All Guns</div>
              <div className="text-sm text-gray-400">View complete collection</div>
            </button>
            
            <button
              onClick={() => router.push("/")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all text-left"
            >
              <div className="text-lg mb-1">Home</div>
              <div className="text-sm text-gray-400">Back to main page</div>
            </button>
            
            <button
              onClick={() => router.push("/howitworks")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all text-left"
            >
              <div className="text-lg mb-1">How It Works</div>
              <div className="text-sm text-gray-400">Learn more</div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <div className="text-white font-semibold">AK-47 Viewed</div>
                <div className="text-gray-400 text-sm">2 hours ago</div>
              </div>
              <div className="text-blue-400 text-sm">View Details</div>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-white/10">
              <div>
                <div className="text-white font-semibold">M4A1 Added to Favorites</div>
                <div className="text-gray-400 text-sm">1 day ago</div>
              </div>
              <div className="text-blue-400 text-sm">View Details</div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="text-white font-semibold">Profile Updated</div>
                <div className="text-gray-400 text-sm">3 days ago</div>
              </div>
              <div className="text-blue-400 text-sm">View Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
