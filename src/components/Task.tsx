
import { ClockClockwise, PlusCircle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'
import { TaskProps } from './TaskList'



export interface ContentProps {
    content:TaskProps
    onDeleteTask:(id:string)=>void
    onCompletedTask:(id:string)=>void
}



export function Task({content, onDeleteTask, onCompletedTask}: ContentProps) {

    const [taskIsCompleted, setTaskIsCompleted] = useState(false);

    //Deleta tarefa 
    function handleDeleteTask(){    
        onDeleteTask(content.id)
    }


    //Troca o valor de isCompleted
    function handleCompletedTask(){        
        {
            /**
             * Atualiza o estado taskIsCompleted conforme conforme 
             * parametro checked de checkbox
             */
            taskIsCompleted ? setTaskIsCompleted(false) : setTaskIsCompleted(true);
          }

          //Repasa para funcão o id a ser atualizado.
          onCompletedTask(content.id)

    }

    return (
        <li className={styles.contentList}>
            <div className={styles.containerCheckbox}>
                <label className={styles.checkbox}>
                    <input                     
                    type="checkbox" 
                    onClick={handleCompletedTask}                   
                    />
                </label>
                <label
                className={content.isComplete===true ? styles.complete: ''}
                
                >{content.title}</label>
            </div>          
            <Trash
            onClick={handleDeleteTask}
            />          
        </li>
    )

}