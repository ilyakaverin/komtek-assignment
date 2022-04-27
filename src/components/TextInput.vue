<template>
    <section>
        <span>{{placeholder}}</span>
<input
        v-bind:class="[errors.includes(`${inputName}`) ? 'danger' : null]"
        :type="type"
        :placeholder="placeholder"
        @input="$emit(`update:${inputName}`, $event.target.value)"
        v-model="this.field"
      />
    <span class="error" v-if="errors.includes(`${inputName}`)">Ошибка</span>

    </section>

  
</template>

<script>
export default {
    props: {
        inputName: String,
        placeholder: String,
        errors: Array,
        type: String,
        fieldProp: String
    },
    data() {
        return {
            field: this.fieldProp
        }

    }

}
</script>

<style scoped>
input {
     padding: 10px;
     width: 100%;
     border: 2px solid black;
     margin-top: 5px;
}
.error {
  color: red;
}
.danger {
  border: 1px solid red;
}


</style>