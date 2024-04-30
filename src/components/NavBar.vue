<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- <router-link to="/" class="navbar-brand">Home</router-link> -->
      <div class="d-flex justify-content-center align-items-center">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          width="40"
          height="40"
          class="d-inline-block align-text-top ps-0 ms-0"
        />
        <h4 class="code d-inline pe-2">Code</h4>
        <h4 class="edu d-inline">Education</h4>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/teacher"
              class="nav-link"
              :class="{ active: $route.path === '/teacher' }"
              >Teacher</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/exams"
              class="nav-link"
              :class="{ active: $route.path === '/exams' }"
              >Exams</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/student"
              class="nav-link"
              :class="{ active: $route.path === '/student' }"
              >Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/classes"
              class="nav-link"
              :class="{ active: $route.path === '/classes' }"
              >Classes</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import codeEdu from "@/components/codeEdu.vue";
export default {
  components: {
    codeEdu,
  },
};
</script>

<style >
:root {
  --WhiteColor: #faf3dd;
  --darkwhite: #c8d5b9;
  --LightGreen: #8fc0a9;
  --GreenOpacity: #68b0ab;
  --GreenColor: #4a7c59;
}
.code {
  color: var(--GreenColor);
  position: relative;
  top: 5px;
}

.edu {
  color: var(--GreenOpacity);
  position: relative;
  top: 5px;
  padding-right: 40px;
}
.navbar {
  /* background-color: var(--WhiteColor); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  justify-content: center;
  text-align: center;
}

.nav-link {
  /* color: var(--GreenColor); */
  font-size: 1.25rem;
  text-align: center;
  color: var(--GreenColor);

  /* padding: 1rem; */
  margin-bottom: 2;
}

.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: #8fc0a9;
}

.navbar .profile {
  border-left: 1px solid var(--GreenColor);
}

.navbar .profile .svg {
  color: var(--GreenColor);
}

.navbar .navbar-toggler {
  color: white;
  font-size: 25px;
  border-color: white;
}

.navbar .navbar-toggler:focus,
.navbar .navbar-toggler:hover {
  color: var(--LightGreen);
  box-shadow: none;
}

/* .navbar .navbar-toggler[aria-expanded="true"] {
    border-color: var(--GreenColor);
} */
</style>