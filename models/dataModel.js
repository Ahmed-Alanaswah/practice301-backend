class dataModel {
	constructor(data) {
		this.title = data.title;
		this.salePrice = data.salePrice;
		this.dealRating = data.dealRating;
		this.thumb = data.thumb;
	}
}

module.exports = { dataModel };
