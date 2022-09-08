import styles from './styles.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onHandleTasks: (taskTitle: string) => void;
}

export function Header({ onHandleTasks }: Props) {
    const [title, setTitle] = useState("");
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onHandleTasks(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
    }
    return(
        <header className={styles.header}>
            <img src="src/assets/Logo.svg" alt="" />

            <form className={styles.form} onSubmit={handleSubmit}>
                <input placeholder='Nova tarefa' onChange={onChangeTitle} value={title}/>
                     <button>
                        Criar
                        <AiOutlinePlusCircle/>
                    </button>
            </form>
        </header>
    )
}