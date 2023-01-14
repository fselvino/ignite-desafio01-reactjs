
import { PlusCircle,Trash} from 'phosphor-react'
import styles from './Task.module.css'

export function Task(){
    

    return (
        <li className={styles.contentList}>
                            <div>         
                                <input type="checkbox" className={styles.checkbox}/>
                                <label>Minha primeira tarefa e fazer essa pagina funcionar</label>                                                       
                            </div>  
                            <Trash/>                          
                        </li> 
    )

}