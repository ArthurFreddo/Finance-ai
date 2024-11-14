"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-green-400 text-primary hover:bg-muted">
            <CircleIcon className="mr-2 fill-primary" size={10} />
            Depósito
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="bg-red-400 text-destructive hover:bg-muted">
            <CircleIcon className="mr-2 fill-red-600" size={10} />
            Despesa
          </Badge>
        );
      } else;
      <Badge className="bg-muted text-destructive hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Investimento
      </Badge>;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
