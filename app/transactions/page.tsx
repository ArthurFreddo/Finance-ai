import { transactionColumns } from "@/app/transactions/_columns";
import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/data_table";
import { db } from "@/app/_lib/prisma";
import { ArrowDownUpIcon } from "lucide-react";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div>
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
