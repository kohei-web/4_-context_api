import { useContext, createContext } from "react";
import { useTodo } from "../hooks/useTodo";

/**
 * TodoContext
 *
 *
 */

// 空の倉庫を作る
const TodoContext = createContext({});


/**
 * TodoProvider
 *
 * @param children
 * @constructor
 *
 */

// TodoList用contextAPIを定義
export const TodoProvider = ({ children }) => {
    const {
        showTodoList,
        originalText,
        searchText,
        handleSetOriginalText,
        createTodo,
        handleSetSearchText,
        handleTodoDelete,
    } = useTodo();

    return (
        <TodoContext.Provider
            value={{
                showTodoList,
                originalText,
                searchText,
                handleSetOriginalText,
                createTodo,
                handleSetSearchText,
                handleTodoDelete
            }}
        >
            {children}
        </TodoContext.Provider>
    )

}

/**
 * useTodoContext
 */

// 使いやすいようにuseContextを関数として定義する
export const useTodoContext = () => useContext(TodoContext);
