<template>
    <v-card
        :color="active ? 'primary' : 'grey lighten-1'"
        class="ma-4"
        height="400"
        width="400"
        @click="toggle"
    >
        <v-row
        class="fill-height"
        align="center"
        justify="center"
        >
        <v-scale-transition>
            <v-icon
            v-if="active"
            color="white"
            size="48"
            v-text="'mdi-close-circle-outline'"
            ></v-icon>
        </v-scale-transition>
        </v-row>
    </v-card>
</template>

<script>
export default {

};
</script>

<style>

</style>
