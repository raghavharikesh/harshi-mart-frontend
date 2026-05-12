import AuthLayout from "@/modules/auth/auth-layout";
import LoginForm from "@/modules/auth/login-form";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue shopping"
    >
      <LoginForm />
    </AuthLayout>
  );
}