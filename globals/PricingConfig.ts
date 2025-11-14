export type PricingConfig = {
  id: string;
  widthOptions?: {
    oneCar?: number;
    twoCars?: number;
    threeCars?: number;
    fourCars?: number;
    fiveCars?: number;
    moreThanFiveLessThanTen?: number;
    moreThanTenLessThanTwenty?: number;
  };
  lengthOptions?: {
    oneCar?: number;
    twoCars?: number;
    threeCars?: number;
    fourCars?: number;
    fiveCars?: number;
    footballField?: number;
    twoFootballFields?: number;
    moreThanTwoFootballFields?: number;
  };
  depthOptions?: {
    "0To6"?: {
      min?: number;
      max?: number;
    };
    "6To12"?: {
      min?: number;
      max?: number;
    };
    moreThan12?: {
      min?: number;
      max?: number;
    };
  };
  addons?: {
    stake?: number;
    citySidewalkShovel?: number;
    northWalkwayShovel?: number;
    southWalkwayShovel?: number;
    eastWalkwayShovel?: number;
    westWalkwayShovel?: number;
    citySidewalkSalt?: number;
    northWalkwaySalt?: number;
    southWalkwaySalt?: number;
    eastWalkwaySalt?: number;
    westWalkwaySalt?: number;
  };
  quikplowMarginPercentage?: number;
  cancellationFee?: number;
};
