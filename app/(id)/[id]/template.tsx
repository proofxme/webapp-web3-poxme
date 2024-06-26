import { getLogtoContext } from "@/lib/logto";

export default async function DashboardTemplate({children}: { children: React.ReactNode }) {
  const {isAuthenticated} = await getLogtoContext();

  return (
    <div className="flex flex-col w-full min-h-screen">
      {children}
    </div>
  );
}
