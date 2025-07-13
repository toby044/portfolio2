<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="grow">
            <slot name="left" />
        </div>
        <div class=grow>
            <slot name="center" />
        </div>
        <div class="grow">
            <slot name="right" />
        </div>
    </div>
</template>
<script setup></script>
