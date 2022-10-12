import { useArray } from './useArray';

export const useHandleList = (listArray = []) => {

    const {
        array: list,
        filter: filterList,
        unshift: unshiftList,
        map: mapList,
    } = useArray(listArray);

    const handleInsert = (value) => {
        unshiftList({
            id: Math.floor(Math.random() * 100),
            name: value,
        });
    };

    const handleEdit = (id, value) => {
        mapList((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    name: value
                }
            }
            return item;
        });
    };

    const handleDelete = (id) => {
        filterList((item) => item.id !== id);
    };

    return {
        list,
        handleInsert,
        handleEdit,
        handleDelete
    }
}
