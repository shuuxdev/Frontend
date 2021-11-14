const authorize = (state: string = "Unauthorized", action: IAuthorize) => {
    switch (action.type) {
        case "SIGN_IN":
            if (action.payload.username == "shuu" && action.payload.password == 123)
                return "Authorized";
            else
                return "Unauthorized";

            break;
        default:
            return state;
    }
}
interface IAuthorize {
    type: string;
    payload: {
        username: string,
        password: number
    }
}
export default authorize;