import React, { useState, useRef, memo } from 'react';
import Dices, { Button, TopLine, ResultList, InputBox } from './Dices';
import './DiceRollGame.scss';

const DiceRollGame = memo(() => {
    const [dice, setDice] =useState('');
    const [dices, setDices] = useState('');
    const [modify, setModify] = useState('');
    const [result, setResult] = useState([{
        id: 0,
        result: '주사위를 굴리세요.',
        fumble: '',
        classname: 'NoFumble',
        mdice: '',
        Boxclass: '',
        value: '',
        dicevalue: ''
    }]);
    const [id, setId] = useState(1);
    const inputRef = useRef(null);

    let dice1;
    let fumble;
    let classname;
    let dicebox = [];

    const rolldice = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * dice);

        import('./DiceIf').then(({ default: DiceIf }) => {
            if(dice === '') {
                console.log('--------------------1: 다이스 값이 없음--------------------');
                setId(id + 1);
                const message = '값을 입력해 주사위를 굴리세요.';
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: message,
                    fumble: '',
                    classname: 'NoFumble',
                    mdice: '',
                    Boxclass: '',
                    value: '',
                    dicevalue: ''
                }]);
                inputRef.current.focus();
            } else if(Number(dice) <= 1) {
                console.log('--------------------2: 다이스 값이 0이거나 1임--------------------');
                setId(id + 1);
                const message = '2면 이상의 주사위를 굴려주세요.';
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: message,
                    fumble: '',
                    classname: 'NoFumble',
                    mdice: '',
                    Boxclass: '',
                    value: '',
                    dicevalue: ''
                }]);
                inputRef.current.focus();
            } else if(Number(dice) > 1 && ((dices === '' || Number(dices) <= 1) && (modify === '' || Number(modify) === 0))) {
                console.log('--------------------3: 다이스값 존재. 주사위 굴림--------------------');
                setId(id + 1);
                let dice2 = `D${dice}`;
                dice2 = `${dice2} ▶`;
                if(dice1 === 1) {
                    fumble = '펌블!';
                    classname ='Fumble';
                    console.log('--------------------◀ 1이 나와 주사위 굴림 실패! ▶--------------------');
                } else {
                    fumble = '';
                    classname = 'NoFumble';
                }
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: dice2,
                    fumble: fumble,
                    classname: classname,
                    mdice: '',
                    Boxclass: '',
                    value: dice1,
                    dicevalue: 'dicevalue'
                }]);
                inputRef.current.focus();
            } else if(Number(dice) > 1 && (Number(modify) >= 1 && Number(dices) > 1)) {
                console.log('--------------------4: 다이스 개수 / 보정치 존재. 반영해서 굴림.--------------------');
                let totaldice = 0;
                const dice2 = dices + 'D' + dice + '+' + Number(modify);
                let i = 0;
                while(i < dices) {
                    dice1 = Math.ceil(Math.random() * dice);
                    dicebox.push(dice1);
                    totaldice = totaldice + dicebox[i];
                    i = i + 1;
                }
                let dice3 = totaldice;
                dice3 = `${dice2} ▶`;
                setId(id + 1);
                if(dicebox.includes(1)) {
                    fumble = '펌블!';
                    classname ='Fumble';
                    console.log('--------------------◀ 1이 나와 주사위 굴림 실패! ▶--------------------');
                } else {
                    fumble = '';
                    classname = 'NoFumble';
                }
                const message = `${dice3}`;
                dicebox = dicebox.join(',');
                const dice4 = dicebox + ' + ' + Number(modify);
                const Boxclass = 'DicesBox';
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: message,
                    fumble: fumble,
                    classname: classname,
                    mdice: dice4,
                    Boxclass: Boxclass,
                    value: (totaldice+Number(modify)),
                    dicevalue: 'dicevalue'
                }]);
                inputRef.current.focus();
            } else if(Number(dice) > 1 && Number(modify) >= 1) {
                console.log('--------------------5: 보정치 존재. 반영해서 주사위 굴림--------------------');
                setId(id + 1);
                let dice2 = `D${dice}+${Number(modify)}`;
                const dicd3 = dice1 + ' + ' + Number(modify);
                dice2 = `${dice2} ▶`;
                if(dice1 === 1) {
                    fumble = '펌블!';
                    classname ='Fumble';
                    console.log('--------------------◀ 1이 나와 주사위 굴림 실패! ▶--------------------');
                } else {
                    fumble = '';
                    classname = 'NoFumble';
                }
                const Boxclass = 'DicesBox';
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: dice2,
                    fumble: fumble,
                    classname: classname,
                    mdice: dicd3,
                    Boxclass: Boxclass,
                    value: (dice1+Number(modify)),
                    dicevalue: 'dicevalue'
                }]);
                inputRef.current.focus();
            } else if(Number(dice) > 1 && Number(dices) > 1) {
                console.log('--------------------6: 다이스 개수 존재. 반영해서 주사위 굴림--------------------');
                let totaldice = 0;
                const dice2 = dices + 'D' + dice;
                let i = 0;
                while(i < dices) {
                    dice1 = Math.ceil(Math.random() * dice);
                    dicebox.push(dice1);
                    totaldice = totaldice + dicebox[i];
                    i = i + 1;
                }
                let dice3 = totaldice;
                dice3 = `${dice2} ▶`;
                setId(id + 1);
                if(dicebox.includes(1)) {
                    fumble = '펌블!';
                    classname ='Fumble';
                    console.log('--------------------◀ 1이 나와 주사위 굴림 실패! ▶--------------------');
                } else {
                    fumble = '';
                    classname = 'NoFumble';
                }
                const message = `${dice3}`;
                dicebox = dicebox.join(',');
                const Boxclass = 'DicesBox';
                setResult((prevResult) => [...prevResult, {
                    id: id,
                    result: message,
                    fumble: fumble,
                    classname: classname,
                    mdice: dicebox,
                    Boxclass: Boxclass,
                    value: totaldice,
                    dicevalue: 'dicevalue'
                }]);
                inputRef.current.focus();
            }
        });
    };

    const onChangesetDiceInput = (e) => {
        setDice(e.target.value);
    };

    const onChangesetDicesInput = (e) => {
        setDices(e.target.value);
    };

    const onChangesetModifyInput = (e) => {
        setModify(e.target.value);
    };

    return (
        <>
            <Dices id={id} setId={setId} setResult={setResult} fumble={fumble} dice1={dice1} />
            <TopLine />
            <form onSubmit={rolldice}>
                <InputBox>
                    <label>주사위 개수</label>
                    <input type="number" ref={inputRef} placeholder="입력하세요." value={dices} onChange={onChangesetDicesInput} />
                    <br/>
                    <label>주사위 면 수</label>
                    <input type="number" ref={inputRef} placeholder="입력하세요." value={dice} onChange={onChangesetDiceInput} />
                    <br/>
                    <label>더할 수</label>
                    <input type="number" ref={inputRef} placeholder="입력하세요." value={modify} onChange={onChangesetModifyInput} />
                    <br/>
                    <button>굴리기!</button>
                </InputBox>
            </form>
            <ResultList>
                {result.slice().reverse().map((resultList) => (
                    <p key={`${resultList.id}-${resultList.result}`}>
                        <span className="ListId">{resultList.id}</span>:
                        <span className="ListResult">{resultList.result}</span>
                        <span className={resultList.dicevalue}>{resultList.value}</span>
                        <span className={resultList.Boxclass}>{resultList.mdice}</span>
                        <span className={resultList.classname}>{resultList.fumble}</span>
                    </p>
                ))}
            </ResultList>
        </>
    );
});

export default DiceRollGame;