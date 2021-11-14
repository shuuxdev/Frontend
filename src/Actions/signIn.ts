const signIn = (payload: { username: string, password: number }) => {
    return {
        type: "SIGN_IN",
        payload: {
            username: payload.username,
            password: payload.password
        }
    }
}
export default signIn;