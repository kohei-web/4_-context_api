/**
 * TodoList
 *
 * @package components
 *
 */

import styles from "./TodoList.module.css";

/**
 *
 * @param {*} props
 * @return {*}
 *
 */

export const TodoList = (props) => {
    const { showTodoList, handleTodoDelete } = props;

    return (
        <ul>
            {showTodoList.map((todo) => {
                return (
                    <li className={styles.list} key={todo.id}>
                        <span>{todo.title}</span>
                        <button
                            className={styles.deleteButton}
                            onClick={() => handleTodoDelete(todo.id)}
                        >
                            {"削除ボタン"}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};
