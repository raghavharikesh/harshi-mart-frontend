export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}
      <div className="hidden lg:flex bg-black text-white items-center justify-center p-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Harshi Mart
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Modern shopping experience with
            premium products and secure payments.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">

          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              {title}
            </h2>

            <p className="mt-2 text-gray-500">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}