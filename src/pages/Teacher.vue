<template>
  <div>
    <NavBar></NavBar>
    <button type="button" class="btn btn-primary btn-sm" @click="togolModal">Add Teacher</button>
<div v-if="showAddTeacher">
  <AddTeacher  @close="togolModal"></AddTeacher>
  </div>
    <table class="table">
  <thead class=" thead-dark">
    <tr>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">add to class</th>
      <th scope="col">delete from system</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>mohamad </td>
      <td>any@gmail.com</td>
      <td>0936854152</td>
      <td>
        <button type="button" class="btn btn-success">Add</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>

    </tr>
    <tr>
        <td>Ahmad</td>
      <td>any@gmail.com</td>
      <td>0963852741</td>
      <td>
        <button type="button" class="btn btn-success">Add</button>
      </td>

      <td>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  
  </tbody>
</table>
    <!-- here i add lists -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AddTeacher from "@/components/AddTeacher.vue";
export default {
  data(){
  return {
    showAddTeacher:false,
    
  }},
  components: {
    NavBar,AddTeacher
  },
  methods:{
  togolModal(){
    this.showAddTeacher=!this.showAddTeacher
  },}

};
</script>

<style scoped>

.table thead th{
  background-color: var(--GreenColor); /* Set the background color to red */
  color: white; /* Set the text color to white for better visibility */
}
.btn-group .btn {
  background: var(--LightGreen);
  border: none;
  color: var(--GreenColor);
}
.btn-primary {
  background-color: var(--GreenColor); /* Change the background color */
  color: #fff; /* Change the text color */
  display: flex; /* Use flexbox to center the content */
  justify-content: center; /* Justify the content horizontally */
  align-items: center; /* Center the content vertically */
  border: 1px solid var(--GreenColor);
  position: static;

  margin-left: 20px;
  margin-top: 20px;
  margin-bottom:10px;
}

.btn-primary:hover {
  background-color: var(--LightGreen); /* Change the hover background color */
  color: var(--GreenColor);
}
.input-group .form-control {
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
  color: var(--LightGreen);
}

.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  margin: 0px 100px;
}
p {
  color: var(--GreenColor);
  margin-bottom: 0;
}
.page-footer .btn {
  border: 1px solid var(--GreenColor);
  color: var(--GreenColor);
  background: var(--LightGreen);
}
</style>