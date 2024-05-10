export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen text-[#000000]">
      {children}
    </div>
  );
}
