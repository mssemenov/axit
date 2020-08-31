<template>
    <section class="_py-8">
        <slot></slot>
    </section>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (min-width: 0px) {
    ._py-8{
        padding-top: 3em;
        padding-bottom: 3em;
    }
}
@media screen and (min-width:768px) {
    ._py-8{
        padding-top: 5.5em;
        padding-bottom: 5.5em;
    }
}
@media screen and (min-width:992px) {
    ._py-8{
        padding-top: 8em;
        padding-bottom: 8em;
    }
}
</style>