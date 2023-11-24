const initState = {
    themeId: 1,
}

type initStateType = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}


export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number)=> ({type: 'SET_THEME_ID', id} as const);