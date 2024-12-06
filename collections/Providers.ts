import { RequestDocType } from ".";
import { CustomerDocType } from "./Customers";
import { MediaType } from "./Media";

type StripeDetailsType = {
  accountID: string
  payoutsEnabled: boolean
}

export type AcceptanceTypes = 'notRequested' | 'requested' | 'approved' | 'rejected'
export type RejectionTypes = 'insurance' | 'equipment' | 'license' | 'background' | 'banned'

export type NewProviderDocType = {
  email: string
  firstName: string
  lastName: string
  phone: string
  zip?: number
  is18YearsOrOlder?: boolean
  equipment: {
    plow?: boolean
    blower?: boolean
    shovel?: boolean
    atv?: boolean
    salt?: boolean
    stakes?: boolean
  }
  vehicle?: {
    make?: string
    model?: string
    year?: number
    color?: string
    plate?: string
  }
  photo?: MediaType | string
  insurance?: MediaType | string
  license?: MediaType | string
  reviews?: Array<{
    request: RequestDocType | string
    customer: CustomerDocType | string
    stars: number
  }>
  acceptanceStatus?: AcceptanceTypes
  rejectionReason?: RejectionTypes
  travelDistance?: 10 | 20 | 30 | 40
  termsAccepted: boolean
}

export type ProviderDocType = NewProviderDocType & {
  id: string
  coordinates: [number, number]
  stripeDetails: StripeDetailsType
  createdAt: Date
  updatedAt: Date
  activationRequestStep: number
  lastTextedAboutOpenRequests: Date
  accountPreferences?: {
    textMeAboutNewRequests?: 'yes' | 'no'
  }
}

export type LoginProviderType = {
  user: ProviderDocType
  token: string
}
