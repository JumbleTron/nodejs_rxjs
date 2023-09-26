import User from "../models/User";
import generateId from "../helpers/generateId";
import { userSubject
} from "../observators/userObservator";

export default class UserService {
	users;

	constructor() {
		this.users = [];
	}

	createUser(name) {
		const user = new User(generateId(), name)
		this.users.push(user)
		userSubject.next(user);
	}

	removeUser(id) {
		this.users = this.users.filter((user) => user.id !== id);
	}
}
