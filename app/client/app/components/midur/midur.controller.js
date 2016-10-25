var self;

class MidurController {
	constructor(MidurService) {
		"ngInject";

		self = this;
		this.name = 'midur';
		this.MidurService = MidurService;
		clearTable();
	}

	addMidur() {
		// validation part
		if(this.startTime === '' || this.endTime === '' || this.sourceId === '' ||this.groupName === ''){
			return alert('please enter all the fields (comment are optional)');
		}

		this.MidurService.addMidur(this.startTime,this.endTime,this.sourceId,this.groupName,this.comments);

		clearTable();
	}

	getMidurim(){
		return this.MidurService.getMidurim();
	}

}

function clearTable() {
	self.startTime = '';
	self.endTime = '';
	self.sourceId = '';
	self.groupName = '';
	self.comments = '';
}


export default MidurController;
