export default function (loggedStatus) {
	return {
		type: 'LOGIN',
		payload: loggedStatus
	};
}