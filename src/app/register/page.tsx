import AuthLayout from "@/modules/auth/auth-layout";
import RegisterForm from "@/modules/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your shopping journey"
    >
      <RegisterForm />
    </AuthLayout>
  );
}