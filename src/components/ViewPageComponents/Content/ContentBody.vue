<template>
    <div>
        <p v-if="loading">Loading...</p>
        <p v-else>{{ content }}</p>
    </div>
</template>

<script>
export default {
    props: ["content"],
    data() {
        return { loading: true };
    },
    mounted() {
        setTimeout(() => (this.loading = false), 1000);
    },
};
</script>

<style scoped></style>