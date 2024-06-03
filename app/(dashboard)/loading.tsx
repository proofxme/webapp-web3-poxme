import LogoPoxme from "@/logo-poxme";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <LogoPoxme/>
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Your data is being fetched, please be patient
        </p>
      </div>
    </div>
  )
}
