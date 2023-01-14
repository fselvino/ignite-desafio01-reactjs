
import { PlusCircle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {


    return (
        <li className={styles.contentList}>
            <div>
                <label className={styles.checkbox}>
                    <input type="checkbox" />
                </label>
                <label>Minha primeira tarefa e fazer essa pagina funcionar</label>
            </div>
            <Trash />


        </li>
    )

}