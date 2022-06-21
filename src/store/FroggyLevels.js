import { createSlice } from '@reduxjs/toolkit'

const init = {
  currentLevel:1,
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
    },
    {
      level: 2,
      questionDescription: (
        <>
          <p>
            Используй
            <code className={'help'}>justify-content</code>, еще раз, чтоб
            помочь этим лягушатам попасть на их лилии. Помни, что это свойство
            CSS выравнивает элементы горизонтально и принимает следующие
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
        </>
      ),

      answer: 'justify-content: center;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow'],
      lilypad: { justifyContent: 'center' },
    },
    {
      level: 3,
      questionDescription: (
        <>
          <p>
            Помоги всем трем лягушатам найти их лилии, просто используя
            <code className={'help'}>justify-content</code>. В этот раз, у
            лилий много пространства вокруг.
          </p>
          <p>
            Если ты чувствуешь, что забыл возможные значения свойства, ты можешь
            навести курсор на название свойства, чтоб посмотреть их. Попробуй
            навести курсор на{' '}
            <code className={'help'}>justify-content</code> .
          </p>
        </>
      ),

      answer: 'justify-content: space-around;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-around' },
    },
    {
      level: 4,
      questionDescription: (
        <>
          <p>
            Теперь лилии по краям уплыли к берегам, увеличив пространство между
            ними. Используй{' '}
            <code className={'help'}>justify-content</code>. В этот раз, у
            лилий одинаковое расстояние между ними.
          </p>
        </>
      ),

      answer: 'justify-content: space-between;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-between' },
    },
    {
      level: 5,
      questionDescription: (
        <>
          <p>
            Теперь используй <code className={'help'}>align-items</code>{' '}
            чтоб помочь лягушатам добратся к нижней части пруда. Это CSS
            свойство выравнивает элементы вертикально и принимает следующие
            значения:
          </p>
          <ul>
            <li>
              <code>flex-start</code>: Элементы выравниваются по верхнему краю
              контейнера.
            </li>
            <li>
              <code>flex-end</code>: Элементы выравниваются по нижнему краю
              контейнера.
            </li>
            <li>
              <code>center</code>: Элементы выравниваются вертикально по центру
              контейнера.
            </li>
            <li>
              <code>baseline</code>: Элементы отображаются на базовой линии
              контейнера.
            </li>
            <li>
              <code>stretch</code>: Элементы растягиваются, чтоб заполнить
              контейнер.
            </li>
          </ul>
        </>
      ),

      answer: 'align-items: flex-end;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { alignItems: 'flex-end' },
    },
    {
      level: 6,
      questionDescription: (
        <>
          <p>
            Направь лягушонка в центр пруда, используя
            <code className={'help'}>justify-content</code> и
            <code className={'help'}>align-items</code> вместе.
          </p>
        </>
      ),

      answer: 'justify-content: center; align-items: center;',
      isValid: false,
      pondHeight: 2,
      colors: ['green'],
      lilypad: { justifyContent: 'center', alignItems: 'center' },
    },
    {
      level: 7,
      questionDescription: (
        <>
          <p>
            Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с
            достаточно большим пространством вокруг них. Используй комбинацию{' '}
            <code className={'help'}>justify-content</code> и{' '}
            <code className={'help'}>align-items</code>.
          </p>
        </>
      ),

      answer: 'justify-content: space-around; align-items: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { justifyContent: 'space-around', alignItems: 'flex-end' },
    },
    {
      level: 8,
      questionDescription: (
        <>
          <p>
            Лягушатам нужно выстроиться в порядке их лилий, используя{' '}
            <code className={'help'}>flex-direction</code>. Это CSS
            свойство задает направление, в котором будут расположены элементы в
            контейнере, и принимает следующие значения:
          </p>
          <ul>
            <li>
              <code>row</code>: элементы размещаются по направлению текста.
            </li>
            <li>
              <code>row-reverse</code>: элементы отображаются в обратном порядке
              к направлению текста.
            </li>
            <li>
              <code>column</code>: элементы располагаются сверху вниз.
            </li>
            <li>
              <code>column-reverse</code>: элементы располагаются снизу вверх.
            </li>
          </ul>
        </>
      ),

      answer: 'flex-direction: row-reverse;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'row-reverse' },
    },
    {
      level: 9,
      questionDescription: (
        <>
          <p>
            Помоги лягушатам расположиться на своих лилиях используя{' '}
            <code className={'help'}>flex-direction</code>. Это CSS
            свойство задает направление, в котором будут расположены элементы в
            контейнере и принимает следующие значения:
          </p>
          <ul>
            <li>
              <code>row</code>: Элементы размещаются по направлению текста.
            </li>
            <li>
              <code>row-reverse</code>: Элементы отображаются в обратном порядке
              к направлению текста.
            </li>
            <li>
              <code>column</code>: Элементы распологаются сверху вниз.
            </li>
            <li>
              <code>column-reverse</code>: Элементы распологаются снизу вверх.
            </li>
          </ul>
        </>
      ),

      answer: 'flex-direction: column;',
      isValid: false,
      pondHeight: 1,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'column' },
    },
    {
      level: 10,
      questionDescription: (
        <>
          <p>
            Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они
            почти на своих местах, все же придется применить и{' '}
            <code className={'help'}>flex-direction</code> и{' '}
            <code className={'help'}>justify-content</code>, чтоб
            поместить их на свои лилии.
          </p>
          <p>
            Заметь, что когда ты устанавливаешь направление в обратном порядке
            для ряда или колонки, начало (start) и конец (end) тоже меняются
            местами.
          </p>
        </>
      ),

      answer: 'flex-direction: row-reverse; justify-content: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
    },
    {
      level: 11,
      questionDescription: (
        <>
          <p>
            Помоги лягушатам найти их лилии с помощью{' '}
            <code className={'help'}>flex-direction</code> и{' '}
            <code className={'help'}>justify-content</code>.
          </p>
          <p>
            Заметь, когда в качестве направления выбрана колонка, то{' '}
            <code className={'help'}>justify-content</code> влияет на
            вертикальное выравнивание, а{' '}
            <code className={'help'}>align-items</code> на горизонтальное.
          </p>
        </>
      ),

      answer: 'flex-direction: column; justify-content: flex-end;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: { flexDirection: 'column', justifyContent: 'flex-end' },
    },
    {
      level: 12,
      questionDescription: (
        <>
          <p>
            Помоги лягушатам найти их лилии с помощью{' '}
            <code className={'help'}>flex-direction</code> и{' '}
            <code className={'help'}>justify-content</code>.
          </p>
        </>
      ),

      answer: 'flex-direction: column-reverse; justify-content: space-between;',
      isValid: false,
      pondHeight: 2,
      colors: ['green', 'yellow', 'red'],
      lilypad: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
      },
    },
    {
      level: 13,
      questionDescription: (
        <>
          <p>
            Помоги лягушатам найти их лилии с помощью{' '}
            <code className={'help'}>flex-direction</code>,{' '}
            <code className={'help'}>justify-content</code> и{' '}
            <code className={'help'}>align-items</code>.
          </p>
        </>
      ),

      answer:
        'flex-direction: row-reverse; align-items: flex-end; justify-content: center;',
      isValid: false,
      pondHeight: 3,
      colors: ['green', 'yellow', 'red'],
      lilypad: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
    },
    // {
    //   level: 14,
    //   questionDescription: (
    //     <>
    //       <p>
    //         Иногда изменения порядка отображения элементов в контейнере
    //         недостаточно. В таких случаях мы можем применить свойство{' '}
    //         <code className={classes.help}>order</code> для конкретных
    //         элементов. По умолчанию, значение этого свойства у элементов равно
    //         0, но мы можем задать положительное или отрицательное целое число
    //         этому свойству.
    //       </p>
    //       <p>
    //         Используй свойство <code className={classes.help}>order</code>, чтоб
    //         разместить лягушат на своих лилиях.
    //       </p>
    //     </>
    //   ),

    //   answer: 'order: 1;',
    //   isValid: false,
    //   pondHeight: 1,
    //   colors: ['green', 'yellow', 'red'],
    //   lilypadItem: { color: 'yellow', style: { order: '2' } },
    // },
    // {
    //   level: 15,
    //   questionDescription: (
    //     <>
    //       <p>
    //         Используй свойство <code className={classes.help}>order</code>, чтоб
    //         отправить красного лягушонка на его лилию.
    //       </p>
    //     </>
    //   ),

    //   answer: 'order: -1;',
    //   isValid: false,
    //   pondHeight: 1,
    //   colors: ['green', 'green', 'green', 'red', 'green'],
    //   lilypadItem: { color: 'red', style: { order: '-1' } },
    // },
    // {
    //   level: 16,
    //   questionDescription: (
    //     <>
    //       <p>
    //         Используй свойство <code className={classes.help}>order</code>, чтоб
    //         отправить красного лягушонка на его лилию.
    //       </p>
    //     </>
    //   ),

    //   answer: 'align-self: end;',
    //   isValid: false,
    //   pondHeight: 1,
    //   colors: ['green', 'green', 'yellow', 'green', 'green'],
    //   lilypadItem: { color: 'yellow', style: { alignSelf: 'flex-end' } },
    // },
  ],
};

export const FroggySlice = createSlice({
	name: 'froggy',
	initialState: init,
    reducers:{
        gameStyle:(state,action)=>{
            state.value = action.payload;
        },
        complete(state){
          console.log('tuura');
          state.currentLevels = state.currentLevels.map(item=>{
            return item.level === state.currentLevel ? {...item,isValid : true} : item
          })
        },
        notComplete(state){
          console.log('tuuraemes');
          state.currentLevels = state.currentLevels.map(item=>{
            return item.level === state.currentLevel ? {...item,isValid : false} : item
          })
        }
    }
})

export const FroggyAction = FroggySlice.actions
