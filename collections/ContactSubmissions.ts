import { CustomerDocType, ProviderDocType } from ".";

type ContactTopicsType = 'general' | 'badRequest' | 'billing'

export type NewContactSubmissionDocType = {
  user: CustomerDocType | ProviderDocType | string
  topic: ContactTopicsType
  message: string
}
