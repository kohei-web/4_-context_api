/**
 * TodoTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 *
 */

import { TodoList } from "../../components/organisms/TodoList";
import { AddTodo } from "../../components/organisms/AddTodo";
import { SearchTodo } from "../../components/organisms/SearchTodo";
import { useTodoContext } from "../../contexts/TodoContext";

export const TodoTemplate = () => {
    const {
        showTodoList,
        originalText,
        searchText,
        handleSetOriginalText,
        createTodo,
        handleSetSearchText,
        handleTodoDelete
    } = useTodoContext();

    return (
        <div>
            {/* todoListの追加 */}
            <AddTodo
                inputValue={originalText}
                onChangeText={handleSetOriginalText}
                handleKeyUp={createTodo}
            />
            {/* todoListの検索 */}
            <SearchTodo
                searchText={searchText}
                handleChangeSearchText={handleSetSearchText}
            />
            {/* todoListの表示 */}
            <TodoList
                showTodoList={showTodoList}
                handleTodoDelete={handleTodoDelete}
            />
        </div>
    )
};
