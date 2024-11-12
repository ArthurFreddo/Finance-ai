import Image from "next/image";
import "../globals.css";
import { Button } from "../components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex h-full flex-col items-start justify-center p-8 max-w-[500px] mx-auto">
        <div className="flex items-center space-x-4">
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
        <Button variant="outline">
          <LogInIcon className="mr-2 justify-center" /> Fazer Login ou criar
          conta
        </Button>
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
