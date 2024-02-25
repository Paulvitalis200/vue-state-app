import {ref} from 'vue'

export default function() {
    const numbers = ref([1,2,3,4,5,6,7,8,9])


    const addNumber = (number) => {
        numbers.value.push(number)
    }

    const filterNum = (number) => {
        return numbers.value.filter((num) => {return num >= number})
    }
    return { numbers, addNumber, filterNum}


}