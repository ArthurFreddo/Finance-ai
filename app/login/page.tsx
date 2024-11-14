import Image from "next/image";
import "../globals.css";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex h-full flex-col items-start justify-center p-8 max-w-[500px] mx-auto">
        <div className="flex items-start space-x-4">
          <Image
            src="/logo.svg"
            width={173}
            height={39}
            alt="Finance AI"
            className="mb-8"
          />
          <Image
            src="/icon.png"
            width={40}
            height={40}
            alt="Icone Finance AI"
          />
        </div>
        <h1 className="mb-3 text-4xl font-bold space-x-4">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-4" /> Fazer Login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
