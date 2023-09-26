export default class User {

	_id;
	_name;

	constructor(id, name) {
		this._id = id;
		this._name = name;
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}
}
