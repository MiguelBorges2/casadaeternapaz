<template>
<div class="w-100">
    <end></end>
    <secont></secont>
    <final></final>
</div>

</template>

<script>
import navbar from '@/components/navbar.vue';
import hero from '@/components/hero.vue';
import sec from '@/components/sec.vue';
import end from '@/components/end.vue';
import secont from '@/components/secont.vue';
import final from '@/components/final.vue';
export default {
    name: "home",
    components: {
        navbar,
        hero,
        sec,
        end,
        secont,
        final
    }
}
</script>
<style>

</style>