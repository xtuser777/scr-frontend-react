class TruckType {
  constructor(
    public id: number = 0,
    public description: string = '',
    public axes: number = 0,
    public capacity: number = 0,
  ) {}
}

export default TruckType;
