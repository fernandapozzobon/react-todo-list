import './styles/global.css'
import { Header } from './components/Header'
import { Table } from './components/Table'
import { useState } from 'react'

export interface TaskInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    {
      id: '1',
      title: 'Dar banho no meu peixe',
      isCompleted: false
    },
    {
      id: '2',
      title: 'Comprar café',
      isCompleted: true
    }
  ]);

  function handleTasks(taskTitle: string) {
    setTasks([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter( task => task.id !== taskId);
    setTasks(newTasks);
  }

  function checkTaskById(taskId: string) {
    const newTasks = tasks.map( task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
    <>
      <Header onHandleTasks={handleTasks}/>
      <Table tasks={tasks} onDelete={deleteTaskById} onComplete={checkTaskById}/>
    </>
  )
}
export default App
