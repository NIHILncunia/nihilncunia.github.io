import React, { useState, useRef, memo } from 'react';
import styled from 'styled-components';

const Dices = memo(({id, setId, setResult, fumble, dice1, classname}) => {
    const d4 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 4);
        const d4 = 'D4 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d4,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d6 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 6);
        const d6 = 'D6 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d6,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d8 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 8);
        const d8 = 'D8 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d8,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d10 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 10);
        const d10 = 'D10 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d10,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d12 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 12);
        const d12 = 'D12 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d12,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d20 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 20);
        const d20 = 'D20 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d20,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const d100 = (e) => {
        e.preventDefault();
        dice1 = Math.ceil(Math.random() * 100);
        const d100 = 'D100 ▶';
        setId(id + 1);
        if(dice1 === 1) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: d100,
            fumble: fumble,
            classname: classname,
            mdice: '',
            Boxclass: '',
            value: dice1,
            dicevalue: 'dicevalue'
        }]);
    };

    const _2d6 = (e) => {
        e.preventDefault();
        let TotalDice = 0;
        let _2d6Box = [];
        let i = 0;
        while(i < 2) {
            dice1 = Math.ceil(Math.random() * 6);
            _2d6Box.push(dice1);
            TotalDice = TotalDice + _2d6Box[i];
            i = i + 1;
        }
        setId(id + 1);
        if(_2d6Box.includes(1)) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        const _2d6 = `2D6 ▶`;
        _2d6Box = _2d6Box.join(',');
        const Boxclass = 'DicesBox';
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: _2d6,
            fumble: fumble,
            classname: classname,
            mdice: _2d6Box,
            Boxclass: Boxclass,
            value: TotalDice,
            dicevalue: 'dicevalue'
        }]);
    };

    const _3d6 = (e) => {
        e.preventDefault();
        let TotalDice = 0;
        let _3d6Box = [];
        let i = 0;
        while(i < 3) {
            dice1 = Math.ceil(Math.random() * 6);
            _3d6Box.push(dice1);
            TotalDice = TotalDice + _3d6Box[i];
            i = i + 1;
        }
        setId(id + 1);
        if(_3d6Box.includes(1)) {
            fumble = '펌블!';
            classname ='Fumble';
        } else {
            fumble = '';
            classname = 'NoFumble';
        }
        const _3d6 = `3D6 ▶`;
        _3d6Box = _3d6Box.join(',');
        const Boxclass = 'DicesBox';
        setResult((prevResult) => [...prevResult, {
            id: id,
            result: _3d6,
            fumble: fumble,
            classname: classname,
            mdice: _3d6Box,
            Boxclass: Boxclass,
            value: TotalDice,
            dicevalue: 'dicevalue'
        }]);
    };

    return (
        <>
            <Button onClick={d4}>D4</Button>
            <Button onClick={d6}>D6</Button>
            <Button onClick={d8}>D8</Button>
            <Button onClick={d10}>D10</Button>
            <Button onClick={d12}>D12</Button>
            <Button onClick={d20}>D20</Button>
            <Button onClick={d100}>D100</Button>
            <Button onClick={_2d6}>2D6</Button>
            <Button onClick={_3d6}>3D6</Button>
        </>
    );
});

export const Button = styled.button`
    color: #eeeeee;
    padding: 5px 10px;
    border: 2px solid #333333;
    background: #333333;
    margin: 2px;
    font-size: 14pt;
    border-radius: 10px;
    font-weight: 500;

    &:hover {
        color: #eeeeee;
        background: #666666;
        border: 2px solid #666666;
    }
`;

export const TopLine = styled.hr`
    border: 0px;
    margin: 50px 0px;
    border-bottom: 5px dotted #333333;
`;

export const ResultList = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0px 20px;
    border-top: 10px solid #333333;
    border-bottom: 10px solid #333333;
    max-width: 100%;

    p {
        font-size: 20pt;
        color: #333333;
        padding: 10px;
        width: calc(100% - 40px);
        border-top: 3px dotted #333333;
        border-bottom: 3px dotted #333333;
        margin: -3px auto;
        word-break:break-all;
        text-align: justify;
    }

    span.Fumble {
        padding: 0px 20px;
        display: inline;
        background: #a51818;
        color: #eeeeee;
        margin-left: 20px;
        border-radius: 10px;
    }

    .DicesBox {
        padding: 5px 10px;
        color: #eeeeee;
        display: inline;
        border-radius: 10px;
        margin-left: 5px;
        background: #aaaaaa;
        font-size: 12pt;
        position: relative;
        bottom: 3px;
    }

    .ListId {
        font-weight: 900;
        padding: 0px 10px;
        display: inline-block;
    }

    .ListResult {
        margin-left: 10px;
    }

    .dicevalue {
        margin-left: 10px;
        padding: 0px 20px;
        color: #eeeeee;
        background: #333333;
        border-radius: 10px;
    }
`;

export const InputBox = styled.div`
    background: #333333;
    padding: 20px 10px;
    margin: 20px 0px;
    border-radius: 30px;

    label {
        display: block;
        text-align: center;
        color: #eeeeee;
        font-size: 16pt;
        font-weight: 900;
    }

    input {
        display: block;
        padding: 10px;
        width: calc(100% - 40px);
        font-size: 20pt;
        margin: 0px auto;
        margin-top: 10px;
        text-align: center;
        border: none;
        border-radius: 20px;
        background: #555555;
        color: #eeeeee;

        &::placeholder {
            color: #888888;
        }

        &:hover {
            background: #666666;

            &::placeholder {
                color: #aaaaaa;
            }
        }
    }

    button {
        color: #eeeeee;
        background: #555555;
        padding: 5px 10px;
        border: none;
        font-size: 24pt;
        width: calc(100% - 20px);
        display: block;
        margin: 0px auto;
        margin-top: 20px;
        border-radius: 20px;
        font-weight: 900;
        font-family: 'Noto Sans KR', 'Noto Sans Japanese', sans-serif;

        &:hover {
            color: #333333;
            background: #ffffff;
        }
    }
`;

export default Dices;