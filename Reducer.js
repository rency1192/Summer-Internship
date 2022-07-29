export const initialState =
{
    user: null
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET-User":
            {
                return {
                    ...state, 
                    user: action.user,
                }
            }
        default:
            return state;
    }
}
export default reducer;