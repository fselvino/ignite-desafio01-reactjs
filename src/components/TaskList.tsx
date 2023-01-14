import { PlusCircle,Trash} from 'phosphor-react'
import { Task } from './Task'

import styles from './TaskList.module.css'

export function TaskList() {
    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div>
                    <input type="text" placeholder='Adicione uma nova tarefa' />
                    <button>
                        <span>Criar</span>
                        <PlusCircle />
                    </button>
                </div>
            </header>
            <main className={styles.content}>
                <header className={styles.headerTask}>
                    <div className={styles.taskCriada}>
                        <span>Tarefas criadas</span>
                        <input type="text" />
                    </div>
                    <div className={styles.taskConlcuidas}>
                        <span>Concluídas</span>
                        <input type="text" />
                    </div>
                </header>
                <div>
                    <ul className={styles.taskList}>
                        <Task/> 
                        <Task/> 
                        <Task/> 
                        <Task/> 
                    </ul>
                </div>
            </main>
        </section>
    )
}