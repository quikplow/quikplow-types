import { MediaType } from '../collections/Media';

const propertyTypeOptions = ['commercial', 'residential'] as const;
export type PropertyType = typeof propertyTypeOptions[number];

const drivewaySurfaceTypeOptions = ['paved', 'dirt', 'gravel'] as const;
export type DrivewaySurfaceType = typeof drivewaySurfaceTypeOptions[number];

const drivewayShapeTypeOptions = ['straight', 'curvy', 'horseshoe'] as const;
export type DrivewayShapeType = typeof drivewayShapeTypeOptions[number];

const drivewayWidthTypeOptions = ['oneCar', 'twoCars', 'threeCars', 'fourCars', 'fiveCars', 'moreThanFiveLessThanTen', 'moreThanTenLessThanTwenty'] as const;
export type DrivewayWidthType = typeof drivewayWidthTypeOptions[number];

const drivewayLengthTypeOptions = ['oneCar', 'twoCars', 'threeCars', 'fourCars', 'fiveCars', 'footballField', 'twoFootballFields', 'moreThanTwoFootballFields'] as const;
export type DrivewayLengthType = typeof drivewayLengthTypeOptions[number];

const drivewayRelocationDistanceTypeOptions = ['inDriveway', 'close', 'moderate', 'far', 'veryFar'] as const;
export type DrivewayRelocationDistanceType = typeof drivewayRelocationDistanceTypeOptions[number];

export type AddressType = {
  line1: string
  line2?: string
  city: string
  state: string
  zip: number
  nickname?: string
  type: PropertyType
  geolocation?: [number, number]
  drivewayDetails: {
    surface: DrivewaySurfaceType
    shape: DrivewayShapeType
    width: DrivewayWidthType
    length: DrivewayLengthType
    relocationDescription: string
    relocationDistance: DrivewayRelocationDistanceType
    photo?: string | MediaType
  }
}

export type AddressReadType = AddressType & {
  id: string
}
