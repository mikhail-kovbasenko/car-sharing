export default class Order {
	constructor(data) {
		this.orderStatusId = {};
		this.cityId = {};
		this.pointId = {};
		this.carId = {};
		this.color = "";
		this.dateFrom = new Date(data.extraData.rentFrom).getTime();
		this.dateTo = new Date(data.extraData.rentTo).getTime();
		this.rateId = 0;
		this.price = 0;
		this.isFullTank = data.extraData.fuel;
		this.isNeedChildChair = data.extraData.babyChair;
		this.isRightWheel = data.extraData.rightHandDrive;
	}

}
