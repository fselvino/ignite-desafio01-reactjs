import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task'

import styles from './TaskList.module.css'

export interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
}


export function TaskList() {

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(event: FormEvent) {

        event.preventDefault()



        if (newTaskTitle) {

            const newtask = {
                id: uuidv4(), //cria um id unico atraves do uuid
                title: newTaskTitle,
                isComplete: false
            }

            setTasks(tasks => [...tasks, newtask]);
            setNewTaskTitle('');

        }


        // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    }

    function deleteTask(id:string){
        const taskWithoutDeleteOne = tasks.filter( task => {
            return task.id !== id

        })
        setTasks(taskWithoutDeleteOne)
        console.log(id)
    }

    const totalTasks = tasks.length
    const concluidas = ` 2 de ${totalTasks}`


    return (
        <section className={styles.section}>
            <header className={styles.header}
                onClick={handleCreateNewTask}
            >

                <div>
                    <input
                        type="text"
                        placeholder='Adicione uma nova tarefa'
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        value={newTaskTitle}
                    />
                    <button
                        type='submit'
                    >
                        <span>Criar</span>
                        <PlusCircle />
                    </button>
                </div>

            </header>
            <main className={styles.content}>
                <header className={styles.headerTask}>
                    <div className={styles.taskCriada}>
                        <span>Tarefas criadas</span>
                        <input
                            type="text"
                            onChange={(e) => { }}
                            value={totalTasks}
                        />
                    </div>
                    <div className={styles.taskConlcuidas}>
                        <span>Concluídas</span>
                        <input
                            onChange={(e) => { }}
                            type="text"
                            value={concluidas}

                        />
                    </div>
                </header>
                <div>
                    <ul className={styles.taskList}>
                        {tasks.map(itens => {
                            return (
                                <Task
                                    onDeleteTask={deleteTask}
                                    key={itens.id}
                                    content={itens}                   

                                />
                            )
                        })}

                    </ul>
                </div>
            </main>
        </section>
    )
}