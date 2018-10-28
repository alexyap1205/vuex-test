<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Local Property is: {{ localProperty }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['doubleCounter']),
            localProperty() {
                return 10;
            }
        }
    }
</script>