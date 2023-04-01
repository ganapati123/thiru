export default function StudentReducer(state={},action)
{
    switch(action.type)
    {
        case 'StudentAction':
            return action.payload;
            break;

        default:
            return state;

    }
}