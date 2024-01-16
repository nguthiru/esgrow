<template>
    <div class="nav-item">
        <div class="nav-item-icon">

            <i :class="icon_class"></i>
        </div>

        <div class="nav-item-text">

            <span>
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    "icon_class": {
        required: true,
        default: "fas fa-home"
    },
    "text": {
        required: true,
        default: "Home"
    }
})

</script>