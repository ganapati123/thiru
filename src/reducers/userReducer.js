export default function UserReducer(state=[],action)
{
    switch(action.type)
    {
        case 'UserAction':
            return action.payload;
            break;

        default:
            return state;

    }
}