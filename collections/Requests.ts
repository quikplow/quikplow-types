import { MediaType } from ".";
import { AddressReadType, AddressType } from "../fields/Address";
import { CustomerDocType } from "./Customers";
import { ProviderDocType } from "./Providers";

export type AdditionalServicesType = {
  stake?: boolean
  citySidewalkShovel?: boolean
  northWalkwayShovel?: boolean
  eastWalkwayShovel?: boolean
  southWalkwayShovel?: boolean
  westWalkwayShovel?: boolean
  citySidewalkSalt?: boolean
  northWalkwaySalt?: boolean
  eastWalkwaySalt?: boolean
  southWalkwaySalt?: boolean
  westWalkwaySalt?: boolean
}

export type ActivityTimeLogType = {
  requestedTime: Date
  acceptedTime?: Date
  onTheWayTime?: Date
  startedTime?: Date
  completedTime?: Date
  canceledTime?: Date
}

const statusTypes = ['open', 'accepted', 'onTheWay', 'inProgress', 'completed', 'canceled'] as const;
export type StatusTypes = typeof statusTypes[number];

export type NewRequestDocType = {
  id: string
  customer: CustomerDocType
  provider?: ProviderDocType | string
  snowDepth: '0To6' | '6To12' | 'moreThan12'
  additionalServices?: AdditionalServicesType
  address: AddressReadType | AddressType
  cost: number
  status: StatusTypes
  currentlyStaked?: boolean
  finishedPhoto?: MediaType | string
  activityTimeLog: ActivityTimeLogType
}

export type RequestDocType = NewRequestDocType & {
  id: string
  createdAt: Date
  reviewsSubmitted?: {
    byCustomer: boolean
    byProvider: boolean
  }
  canceledBy?: 'customer' | 'provider'
  stripePaymentIntentID?: string
  pricingConfig: {
    widthOptions: {
      oneCar: number
      twoCars: number
      threeCars: number
      fourCars: number
      fiveCars: number
      moreThanFiveLessThanTen: number
      moreThanTenLessThanTwenty: number
    }
    lengthOptions: {
      twoCars: number
      oneCar: number
      threeCars: number
      fourCars: number
      fiveCars: number
      footballField: number
      twoFootballFields: number
      moreThanTwoFootballFields: number
    }
    depthOptions: {
      '0To6': {
        min: number
        max: number
      }
      '6To12': {
        min: number
        max: number
      }
      moreThan12: {
        min: number
        max: number
      }
    }
    addons: {
      stake: number
      citySidewalkShovel: number
      northWalkwayShovel: number
      southWalkwayShovel: number
      eastWalkwayShovel: number
      westWalkwayShovel: number
      citySidewalkSalt: number
      northWalkwaySalt: number
      southWalkwaySalt: number
      eastWalkwaySalt: number
      westWalkwaySalt: number
    }
  }
}
