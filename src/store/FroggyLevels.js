import { createSlice } from '@reduxjs/toolkit'

const init = {
    currentLevel: 1,
    value: '',
    currentLevels: [
      {
        level: 1,
        questionDescription: (
          <>
            <p>
              Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь
              лягушонку Фроги и его друзьям написанием CSS кода! Направь этого
              лягушонка на лилию справа используя свойство
              <code className={'help'}>
                justify-content
                <span className={'dropdown'}>
                  Выравнивает flex-элементы вдоль главной оси.
                  <br />
                  <br />
                  <code>flex-start (default)</code> <code>flex-end</code>{' '}
                  <code>center</code> <br /> <code>space-between</code>{' '}
                  <code>space-around</code>
                  <code>space-evenly</code>
                </span>
              </code>
              , которое выравнивает элементы горизонтально и принимает следующие
              значения:
            </p>
            <ul>
              <li>
                <code>flex-start</code>: Элементы выравниваются по левой стороне
                контейнера.
              </li>
              <li>
                <code>flex-end</code>: Элементы выравниваются по правой стороне
                контейнера.
              </li>
              <li>
                <code>center</code>: Элементы выравниваются по центру контейнера.
              </li>
              <li>
                <code>space-between</code>: Элементы отображаются с одинаковыми
                отступами между ними.
              </li>
              <li>
                <code>space-around</code>: Элементы отображаются с одинаковыми
                отступами вокруг них.
              </li>
            </ul>
            <p>
              Например, <code>justify-content: flex-end;</code> сдвинет лягушонка
              вправо.
            </p>
          </>
        ),
  
        answer: 'justify-content: flex-end;',
        isValid: false,
        pondHeight: 1,
        colors: ['green'],
        lilypad: { justifyContent: 'flex-end' },
      },]
}

export const FroggySlice = createSlice({
	name: 'froggy',
	initialState: init,
    reducers:{
        gameStyle:(state,action)=>{
            state.value = action.payload;
        }
    }
})

export const FroggyAction = FroggySlice.actions
