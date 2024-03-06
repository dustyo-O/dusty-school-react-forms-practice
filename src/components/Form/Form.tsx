import React, { useState } from 'react';
import type { FC, ChangeEvent, FormEvent } from 'react';

import { cnForm } from './Form.classname';

type FormProps = {
    onSubmit: (textFirst: string, textSecond: string) => void;
};

const DEFAULT_VALUE = '';

const Form: FC<FormProps> = ({ onSubmit }) => {
    const [textWhat, setTextWhat] = useState(DEFAULT_VALUE);
    const [textHowMany, setTextHowMany] = useState(DEFAULT_VALUE);

    const handleChangeWhat = (event: ChangeEvent<HTMLInputElement>) => {
        setTextWhat(() => event.target.value);
    }

    const handleChangeHowMany = (event: ChangeEvent<HTMLInputElement>) => {
        setTextHowMany(() => event.target.value);
    }

    const handleSendForm = (event: FormEvent) => {
        event.preventDefault();

        onSubmit(textWhat, textHowMany);

        setTextWhat(DEFAULT_VALUE);
        setTextHowMany(DEFAULT_VALUE);
    }

    return (
        <form className={cnForm()} onSubmit={handleSendForm}>
            <input
                className={cnForm('Input')}
                value={textWhat}
                onChange={handleChangeWhat}
            />
            <input
                className={cnForm('Input')}
                value={textHowMany}
                onChange={handleChangeHowMany}
            />
            <button className={cnForm('Add')}>Отправить</button>
        </form>
    );
}

export { Form };
