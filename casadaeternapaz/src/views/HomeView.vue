<template>
<div class="w-100">
    
    <hero></hero>
    <sec></sec>

</div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import hero from '@/components/hero.vue';
import sec from '@/components/sec.vue';

export default {
    name: "home",
    components: {
        navbar,
        hero,
        sec
    }
}
</script>
<style>

</style>