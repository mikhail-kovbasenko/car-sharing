export default class Order {
	constructor({orderState, appState}) {
		this.orderStatusId = appState.orderStatusList[0].id;
		this.cityId = this._getCityId(orderState.locationData);
		this.pointId = this._getPickPointId(orderState.locationData);
		this.carId = orderState.modelData.checkedModel;
		this.color = orderState.extraData.color;
		this.dateFrom = new Date(orderState.extraData.rentFrom).getTime();
		this.dateTo = new Date(orderState.extraData.rentTo).getTime();
		this.rateId = orderState.extraData.rate.id;
		this.price = 0;
		this.isFullTank = orderState.extraData.fuel;
		this.isNeedChildChair = orderState.extraData.babyChair;
		this.isRightWheel = orderState.extraData.rightHandDrive;
	}
	static defaultCityId = "6005b8f9ad015e0bb6997778";
	static defaultPickPointId = "6005b92cad015e0bb699777b";
	_getCityId(data) {
		const city = data.cityList.find(item => item.name === data.city);

		return !city ? Order.defaultCityId : city.id;
	}
	_getPickPointId(data) {
		const city = this._getCityId(data);
		const pickUpPointByCity = data.pickUpPointList.filter(item => {
			if(!item.cityId) return false;
			if(item.cityId.id === city) return item;
		});
		

		if(pickUpPointByCity.length < 1) return Order.defaultPickPointId;

		const pickUpPointName = data.pickUpPoint.slice(0, data.pickUpPoint.indexOf(','));
		const pickUpPoint = pickUpPointByCity.find(item => item.name === pickUpPointName);

		return pickUpPoint ? pickUpPoint.id : Order.defaultPickPointId;
	}

}
