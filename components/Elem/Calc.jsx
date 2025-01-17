import { memo, useMemo, useState } from 'react';
import classes from './Calc.module.css';
import { config } from './consts';



function DataForm({ columns, values, setValues, children }) {

    return <li>
        {columns.map(({ setVal }, i) => <span key={i}>
            {setVal
                ? <input
                    value={values[i]}
                    onInput={event => setValues((event.target).value)} />
                : ''}
        </span>)}
        <hr />
        <span>
            {children}
        </span>
    </li>;

}


export const FormCalc = memo(function FormCalc({ props }) {
    console.log('FormCalc=');
    const
        [valueAge, setValueAge] = useState(''),
        [valueHeight, setValueHeight] = useState(''),
        [valueWeight, setValueWeight] = useState(''),
        [valueForm, setValueForm] = useState('lifeNot'),
        [valueGender, setValueGender] = useState(''),
                   [show, setShow] = useState(false);

    return <div className={classes.calc}>
        <h3>КАЛЬКУЛЯТОР КБЖУ</h3>
        <p>Ваш пол:</p>
            <button style={{backgroundColor: valueGender === 'M' || '' ? 'green' : ''}}
            onClick={()=>{setValueGender('M')} }>Мужской </button>

            <button style={{backgroundColor: valueGender === 'F' || '' ? 'green' : ''}}
            onClick={()=>{setValueGender('F') }}> Женский </button>
            {console.log('Пол=', valueGender)}
            <br />
            Ваш возраст:
            <br />
            <input type='number' value={valueAge}
                onInput={event => setValueAge(event.target.value)} />
            <br />
            Ваш рост:
            <br />
            <input type='number' value={valueHeight}
                onInput={event => setValueHeight(event.target.value)} />
            <br />
            Ваш вес:
            <br />
            <input type='number' value={valueWeight}
                onInput={event => setValueWeight(event.target.value)} />
            <br />

        <form onSubmit={event => setValueForm(event.target.value) } >
         Ваш образ жизни: 
           <br />
            <select placeholder="Не указано" value={valueForm} onChange = {event => setValueForm(event.target.value) }>
                <option  value="lifeNot">Не указано</option>
                <option value="lifeSmall">Малоподвижный</option>
                <option value="lifeMedium">Тренировки 1-3 раза в неделю</option>
                <option value="lifeLarge">Тренировки 3-5 раза в неделю</option>
                <option value="LifeExtrim">Высокие нагрузки каждый день</option>
            </select>
          
        </form>
        <br />
      {  console.log('valueForm', valueForm)}
        {/* <input type="checkbox" value={checked} onChange={toggleCheckbox} /> */}
        
        <button style={{backgroundColor: show ? 'green' : ''}} 
        onClick={() => setShow(!show)    }> Рассчитать </button>
        <fieldset >
        {show && <Calc children={{valueAge, valueHeight, valueWeight, valueForm, valueGender}} />}
        </fieldset>
    </div>
});




function Calc({children}) {
     //const children={valueAge, valueHeight, valueWeight, valueForm, valueGenderM, valueGenderF};
    return <>
<fieldset>
    Данные для расчета:
    <span>{children.valueAge}   </span>
    <span>{children.valueHeight}   </span>
    <span>{children.valueWeight}   </span>
    <span>{children.valueForm}   </span>
    <span>{children.valueGender}   </span>

</fieldset>
{console.log('form yes')}
    </>;
}