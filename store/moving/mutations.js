/**
 * @author monkeywang
 * Date: 17/3/15
 */
import * as types from './types'
export const mutations = {
  [types.MOVING_TITLE] (state, {title}){
    state.title = title
  },
  [types.MOVING_LIST] (state, {list}){
    state.movingList = list
  },
  [types.MOVING_LOADING] (state, {loading}){
    state.loadingMoving = loading
  },
  [types.UP_COMBODY] (state, {upcomBody}){
    state.upcomBody = upcomBody;
  }
}
