<template>
  <div>
    <NavBar></NavBar>

    <div class="button-container">
      <button
        type="button"
        class="btn"
        :class="{
          'btn-success': showingExams,
          'btn-outline-success': !showingExams,
        }"
        @click="showExams"
      >
        Exams
      </button>
      <button
        type="button"
        class="btn"
        :class="{
          'btn-success': showingAddExamUI,
          'btn-outline-success': !showingAddExamUI,
        }"
        @click="showAddExamUI"
      >
        Add Exam
      </button>
    </div>
    <div v-if="showingExams">
      <div class="row row1">
        <div class="col-md-1">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle custom-dropdown-button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              subjects
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">programming1</a></li>
              <li><a class="dropdown-item" href="#">Programming2</a></li>
              <li><a class="dropdown-item" href="#">Programming3</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <button type="button" class="btn submit btn-success">submit</button>
        </div>
      </div>
      <div class="row row2">
        <div class="col-md-6 column1">
          <p>
            you can add an exam by adding a problem and set of optional
            questions
          </p>
          <p class="fontbold">1-Problem</p>
          <p>problem title :</p>
          <input
            type="text"
            class="form-control"
            placeholder="Enter the problem title"
          />
          <p>problem Description :</p>
          <textarea
            class="form-control textarea-problem-description"
            placeholder="Enter the problem description "
            rows="10"
            id="comment"
          ></textarea>
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle progdrop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              java
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">c++</a></li>
              <li><a class="dropdown-item" href="#">java</a></li>
            </ul>
          </div>
          <textarea
            class="form-control textarea-problem-solve"
            placeholder="Enter the problem code "
            rows="10"
            id="comment"
          ></textarea>

        </div>
      </div>
    </div>

    <div v-if="showingAddExamUI">
      <!-- Add exam UI -->
      <h2>Add Exam</h2>
      <form @submit.prevent="addExam">
        <label for="examName">Exam Name:</label>
        <input type="text" id="examName" v-model="newExamName" />
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";


export default {
  components: {
    NavBar,
  },

  data() {
    return {
      exams: [], // Array to store exams
      newExamName: "", // Variable to store new exam name
      showingExams: true, // Flag to control the visibility of exams UI
      showingAddExamUI: false, // Flag to control the visibility of add exam UI
      code: "", // This will hold the code entered in the textarea
      highlightedCode: "", // This will hold the highlighted code
    };
  },
  
  methods: {
    
    showExams() {
      // Show exams UI and hide add exam UI
      this.showingExams = true;
      this.showingAddExamUI = false;
    },
    showAddExamUI() {
      // Show add exam UI and hide exams UI
      this.showingExams = false;
      this.showingAddExamUI = true;
    },
    highlight() {
      hljs.highlightBlock(this.$refs.code);
    },
    addExam() {
      // Add new exam to the exams array
      if (this.newExamName.trim() !== "") {
        this.exams.push({ id: this.exams.length + 1, name: this.newExamName });
        // Clear the input field
        this.newExamName = "";
      }
    },
  
  },
};

</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0px;
}
.btn {
  margin: 10px 70px;
}
.textarea-problem-description {
  background-color: var(--WhiteColor);
  color: var(--GreenColor);
}
.textarea-problem-solve {
  background-color: var(--WhiteColor);
  
}
.progdrop {
  background-color: var(--darkwhite);
  border: 1px solid var(--GreenColor);
  color: var(--GreenColor);
}
p {
  color: var(--GreenColor);
}
.fontbold {
  font-weight: bold;
  font-size: 20px;
}
.column1 {
  padding: 20px;
  text-align: start;
}

.btn-success {
  background-color: var(--GreenColor);
  color: white;
}
.row1 {
  
  justify-content: space-between;
}
input {
  color: var(--GreenColor);
  background-color: var(--WhiteColor);
}

.btn-outline-success {
  background-color: white;
  color: var(--GreenColor);
  border: 1px solid var(--GreenColor);
}

/* Add custom styles for the dropdown button */
.custom-dropdown-button {
  background-color: var(--darkwhite); /* Set your custom color here */
  color: var(--GreenColor); /* Text color */
  border: solid 1px var(--GreenColor); /* Remove border */
}
</style>
