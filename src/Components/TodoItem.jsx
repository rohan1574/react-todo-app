
import { MdDelete, MdEdit } from 'react-icons/md';
import CheckButton from '../Components/CheckButton'
import styles from '../styles/modules/todoItem.module.scss';




const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem() {
  

  
 

  return (
    <>
      <div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
       <CheckButton></CheckButton>
          <div className={styles.texts}>
            <p
            
            >
           tt
            </p>
            <p className={styles.time}>
              p
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
           
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default TodoItem;