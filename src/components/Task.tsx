
import { PlusCircle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import { TaskProps } from './TaskList'



export interface ContentProps {
    content:TaskProps
    onDeleteTask:(id:string)=>void
}



export function Task({content, onDeleteTask}: ContentProps) {

    function handleDeleteTask(){    
        onDeleteTask(content.id)
    }

   

    return (
        <li className={styles.contentList}>
            <div>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                </label>
                <label>{content.title}</label>
            </div>          
            <Trash
            onClick={handleDeleteTask}
            />          
        </li>
    )

}