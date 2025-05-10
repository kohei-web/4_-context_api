import { InputForm } from "../../atoms/InputForm";
import styles from "../../../assets/commons/style.module.css";

export const AddTodo = (props) => {
    const { inputValue, onChangeText, handleKeyUp } = props;

    return (
        <div>
            <h2 className={styles.commonsTodo}>{"todo追加"}</h2>
            <InputForm
                inputValue={inputValue}
                onChangeText={onChangeText}
                placeholder="Todoを追加"
                handleKeyUp={handleKeyUp}
            />
        </div>
    )
}
