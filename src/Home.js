/**
 * @author Shanilka
 */
import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,

} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, changeLanguge } from '../redux/actions';

export default function Home() {
    const [email, setEmail] = useState('');
    const { todoList } = useSelector(state => state.moviesReducer);

    const dispatch = useDispatch();

    const removeFromList = todo => dispatch(removeTodo(todo));

    const changeLang = lang => dispatch(changeLanguge(lang));


    const addToList = todo => dispatch(addTodo(todo));

    const handleAddTodo = todo => {
        addToList(todo);
        setEmail("")
    };

    const handleRemoveTodo = todo => {
        removeFromList(todo);
    };

    const handleLanguage = lang => {
        removeFromList(todo);
    };

    return (
        <View style={styles.container}>
            {/* <TextInput
                style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10, color: 'black', paddingHorizontal: 15 }}
                keyboardType={"email-address"}
                value={email}
                placeholder={"Email"}
                placeholderTextColor={'black'}
                onChangeText={text => { setEmail(text); }}
            />

            <TouchableOpacity
                style={{ alignSelf: 'center', backgroundColor: 'red', paddingHorizontal: 35, paddingVertical: 15, margin: 10, borderRadius: 10 }}
                onPress={() => handleAddTodo(email)}>
                <Text style={{ fontSize: 18 }}>Add</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={{ alignSelf: 'center', backgroundColor: 'red', paddingHorizontal: 35, paddingVertical: 15, margin: 10, borderRadius: 10 }}
                onPress={() => changeLang("SI")}>
                <Text style={{ fontSize: 18 }}>සිංහල</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ alignSelf: 'center', backgroundColor: 'red', paddingHorizontal: 35, paddingVertical: 15, margin: 10, borderRadius: 10 }}
                onPress={() => changeLang("EN")}>
                <Text style={{ fontSize: 18 }}>ENGLISH</Text>
            </TouchableOpacity>

            {/* {todoList.length === 0 ? (
                <Text style={{ color: '#010101', fontSize: 18 }}>
                    Add a todo to the list.
                </Text>
            ) : (
                <FlatList
                    data={todoList}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => handleRemoveTodo(item)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            )} */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        padding: 10,
        justifyContent: 'center'
    }
});