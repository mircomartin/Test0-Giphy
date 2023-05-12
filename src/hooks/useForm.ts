import { useReducer } from 'react'

interface Props {
  initialKeyword: string 
  initialRating: string
}

type ACTIONS =
| { type: 'UPDATE_KEYWORD', payload: string }
| { type: 'UPDATE_RATING', payload: string }

interface ReducerState {
  times: number
  keyword: string
  rating: string
}

const reducer = (state: ReducerState, action: ACTIONS) => {
  switch (action.type) {
    case 'UPDATE_KEYWORD':
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1
      }
    case 'UPDATE_RATING':
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export const useForm = ({ initialKeyword, initialRating }: Props) => {

  const INITIAL_STATE: ReducerState = {
    times: 0,
    keyword: decodeURI(initialKeyword ?? ''),
    rating: initialRating ?? 'g'
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const { times, keyword, rating } = state

  return {
    times,
    keyword,
    rating,
    dispatch
  }
}
