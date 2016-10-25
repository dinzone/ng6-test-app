export default class MidurService {
	constructor($resource) {
		"ngInject";

		this.midurim = [];
		this.$resource = $resource;
	}

	addMidur(startTime, endTime, sourceId, groupName, comments) {
		var tmp = {
			startTime,
			endTime,
			sourceId,
			groupName,
			comments
		};

		this.midurim.push(tmp);

		return true;
	}

	getMidurim() {
		return this.midurim;
	}
}
