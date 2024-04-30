<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modalll">
      <h4>add teacher</h4>
      <input type="text" class="form-control" placeholder="teache name" />
      <input
        type="text"
        class="form-control"
        placeholder="teache phon number"
      />
      <input type="text" class="form-control" placeholder="teache email" />
      
  
    <div class="input-group mb-3">
    <input :type="showPassword ? 'text' : 'password'" class="form-control" placeholder="Password"  aria-describedby="basic-addon2">
    <button class="btn btn-secondary btn-sm" @click="togglePassword" type="button">show</button>
  </div>
  <button type="button" class="btn btn-primary btn-sm" @click="togolModal">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      showPassword: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style scope>
.modalll {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: var(--WhiteColor);
  border-radius: 10px;
}
.btn-primary {
  background-color: var(--GreenColor); /* Change the background color */
  color: #fff; /* Change the text color */

  justify-content: center; /* Justify the content horizontally */
  align-items: center; /* Center the content vertically */
  border: 1px solid var(--GreenColor);

}

.btn-primary:hover {
  background-color: var(--LightGreen); /* Change the hover background color */
  color: var(--GreenColor);
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modalll h4 {
  color: var(--GreenColor);
  border: none;
}
.modalll p {
  font-style: normal;
  color: var(--GreenColor);
}
input {
  margin: 10px;
  left: -10px;
  position: relative;
}
.show-password {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
.btn-secondary{
  height: 35px;
  position: relative;
  top: 11px;

}
</style>