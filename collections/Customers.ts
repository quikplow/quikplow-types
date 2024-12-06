import { ProviderDocType, RequestDocType } from ".";
import { NotificationType } from "../fields";
import { AddressReadType } from "../fields/Address";
import { MediaType } from "./Media";

export type NewCustomerDocType = {
  photo?: string | MediaType
  email: string
  firstName: string
  lastName: string
  phone: string
  addresses?: AddressReadType[]
  providersCanContact?: boolean
  termsAccepted: boolean
}

export type CustomerDocType = NewCustomerDocType & {
  id: string
  stripeCustomerID: string
  stripeCard?: {
    brand: string
    last4: string
    paymentMethodID: string
  }
  reviews?: Array<{
    request: RequestDocType | string
    provider: ProviderDocType | string
    stars: number
  }>
  notifications?: Array<NotificationType>
  createdAt: Date
  updatedAt: Date
}

export type LoginCustomerType = {
  user: CustomerDocType
  token: string
}
