import {FroggyAction} from '../../store/FroggyLevels'
export const check = (level,style,dispatch)=>{
    if(level.answer.split('').sort().join('').trim() === style.split('').sort().join('').trim()) {
        dispatch(FroggyAction.complete());
      } else {
        dispatch(FroggyAction.notComplete())
      }
}