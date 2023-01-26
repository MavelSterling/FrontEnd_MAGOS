<template>
  <div class="form-group" @keypress="$emit('contenido', this.valor)">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input
        :type="type"
        class="form-control"
        :class="getClasses(size, valid)"
        :name="name"  
        :placeholder="placeholder"
        :isRequired="isRequired"
        :readonly="readonlyx"
        v-model="valor"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "argon-input",
  data(){
    return {
      valor : this.value
    }
  },
  props: {
    readonlyx: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    icon: String,
    iconDir: String,
    name: String,
    id: String,
    value: String,
    placeholder: String,
    type: String,
    isRequired: Boolean,
  },
  methods: {
    getClasses: (size, valid) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
    hasIcon: (icon) => (icon ? "input-group" : null), 
  },
};
</script>
