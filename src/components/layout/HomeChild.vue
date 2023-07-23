<template>
    <div>
        <input type="text" @input="sendData" />
    </div>
</template>
<script>
export default {
    methods: {
        sendData(e) {
            this.$emit('fromChild', e.target.value);
            console.log(e.target);
        }
    }
};
</script>
<style lang=""></style>
