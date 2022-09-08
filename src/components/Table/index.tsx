import styles from './styles.module.css'
import { Tasks } from '../Tasks/index'
import { TaskInterface } from '../../App'
import { TbHourglassLow } from 'react-icons/tb';

interface Props {
    tasks: TaskInterface[],
    onDelete: (taskId: string) => void,
    onComplete: (taskId: string) => void
}
export function Table({ tasks, onDelete, onComplete }: Props) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter( (task) => task.isCompleted).length;

    return(
        <section className={styles.table}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p>Concluídas</p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.tasks}>
                {tasks.map((task) => (
                    <Tasks key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
                ))}


            {tasks.length <= 0 && (
                <section className={styles.empty}>
                    <div>
                        <p>Ainda não há tarefas cadastradas.</p>
                    </div>
                </section>
            )}
            </div>
        </section>
    )
}