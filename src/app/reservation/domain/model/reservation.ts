export class Reservation {
  aquaticCenterid : string
  activityType : string
  participantName : string
  participans : string
  weatherTemperature : string
  reservedAt : string


  constructor(aquaticCenterid: string, activityType: string, participantName: string, participans: string, weatherTemperature: string, reservedAt: string) {
    this.aquaticCenterid = aquaticCenterid;
    this.activityType = activityType;
    this.participantName = participantName;
    this.participans = participans;
    this.weatherTemperature = weatherTemperature;
    this.reservedAt = reservedAt;
  }
}


