import { BehaviorSubject } from "rxjs";

export const userSubject = new BehaviorSubject({id: null, name: null});

userSubject.subscribe({
	next: (user) => console.log(`User withId: ${user.id} has been created`),
});
