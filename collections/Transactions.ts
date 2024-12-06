import { CustomerDocType, ProviderDocType } from "."

export type TransactionType = {
  customer: CustomerDocType
  provider: ProviderDocType
}

export type TransactionReadType = TransactionType & {
  id: string
}
