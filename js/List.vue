<template>
    <div>
        <button>全选</button>
        <ul>
            <li v-for="(item , index) in list" :key="index" >
                <label>
                    <input type="checkbox" :checked="check">
                </label>
                <span>name: {{item.name}}</span>
                <span> age: {{item.age}}</span>
                <span>sex: {{item.sex}}</span>
                <span>上移</span>
                <span>下移</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                check: false,
                checked: [],
                list: [
                    {id: 1, name: '王冰', age: '21', sex: '女'},
                    {id: 2, name: '张三', age: '21', sex: '男'},
                    {id: 3, name: '张三', age: '21', sex: '男'},
                ]
            }
        },
        method: {
            allSelect() {

            },
            select(item) {
                this.checked.push(item.id)
            },
            upMove(index, row) {
                if (index === 0) {
                    alert('已经是列表最后一行，无法移动啦~');
                    return false
                }
                let cur = this.list[index];
                let prev = this.list[index - 1];
                this.list.splice(index - 1, 2, cur, prev)
            }
        }
    }
</script>
<style>

</style>