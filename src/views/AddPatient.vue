<script lang="ts">
import { calculate_age } from "@/service";
import Button from "@/components/Button.vue";
import { Patient } from "@/classes";
import { useEntitiesStore } from "@/stores/patients";
import { nanoid } from "nanoid";
import { validate } from "class-validator";
import { useRoute } from "vue-router";

export default {
  name: "Edit",
  setup() {
    const store = useEntitiesStore();
    const route = useRoute();
    const current = store.patients.find((patient: Patient) => {
      if (patient.id === route.params.id) {
        return patient;
      }
      return null;
    });

    console.log(current, route.params.id, current);

    return { store, current };
  },
  data() {
    return {
      name: this.current?.name,
      surname: this.current?.surname,
      secondName: this.current?.secondName,
      birthdate: this.current?.birthdate,
      gender: "Male" || this.current.gender,
      snils: this.current?.snils,
      weight: this.current?.weight,
      height: this.current?.height,
      errors: [],
      id: this.$route.params.id,
    };
  },
  computed: <any>{
    calc_age(): number {
      return this.birthdate?.length > 0 ? calculate_age(this.birthdate) : 0;
    },
  },
  methods: <any>{
    log(e: Event): void {
      e.preventDefault();
      const user = new Patient(
        nanoid(),
        this.name,
        this.surname,
        this.secondName,
        this.birthdate,
        this.gender,
        this.snils,
        this.weight,
        this.height
      );
      console.log(user);
      validate(user).then((errors) => {
        console.log(user);
        if (errors.length > 0) {
          this.errors = [];
          errors.map((error) => this.errors.push(error.property));
          console.log(this.errors, "errorszz");
          console.log(errors);
        } else {
          console.log(user);
          this.store.addPatient(user);
          this.$router.replace({ name: "home" });
          this.errors = [];
          this.current = [];
        }
      });
    },
    update(e: Event) {
      e.preventDefault();
      const updatedUser = new Patient(
        this.id,
        this.name,
        this.surname,
        this.secondName,
        this.birthdate,
        this.gender,
        this.snils,
        this.weight,
        this.height
      );
      validate(updatedUser).then((errors) => {
        if (errors.length > 0) {
          this.errors = [];
          errors.map((error) => this.errors.push(error.property));
          console.log(this.errors, "errorszz");
          console.log(errors);
        } else {
          console.log(calculate_age(updatedUser.birthdate));
          this.store.updatePatient(updatedUser, this.id);
          this.$router.replace({ name: "home" });
          this.errors = [];
          this.current = [];
        }
      });
    },
    action(e: Event) {
      e.preventDefault();
      !this.current ? this.log(e) : this.update(e);
    },
  },
};
</script>

<template>
  <div class="container">
    <form>
      <input
        v-bind:class="[this.errors.includes('surname') ? 'danger' : null]"
        type="text"
        placeholder="Фамилия"
        v-model="surname"
        required
      />
      <span class="error" v-if="this.errors.includes('surname')">Ошибка</span>
      <input
        v-bind:class="[this.errors.includes('name') ? 'danger' : null]"
        type="text"
        placeholder="Имя"
        v-model="name"
      />
      <span class="error" v-if="this.errors.includes('name')">Ошибка</span>
      <input
        v-bind:class="[this.errors.includes('secondName') ? 'danger' : null]"
        type="text"
        placeholder="Отчество"
        v-model="secondName"
      />
      <span class="error" v-if="this.errors.includes('secondName')"
        >Ошибка</span
      >
      <input
        v-bind:class="[this.errors.includes('birthdate') ? 'danger' : null]"
        type="date"
        placeholder="Дата рождения"
        v-model="birthdate"
      />
      <span class="error" v-if="this.errors.includes('birthdate')">Ошибка</span>
      <select name="sex" id="gender" v-model="gender">
        <option value="Male">Мужчина</option>
        <option value="Female">Женщина</option>
      </select>
      <input
        v-bind:class="[this.errors.includes('snils') ? 'danger' : null]"
        type="text"
        placeholder="Снилс"
        v-model="snils"
      />
      <span class="error" v-if="this.errors.includes('snils')">Ошибка</span>
      <div class="input-group">
        <input
          v-bind:class="[this.errors.includes('weigth') ? 'danger' : null]"
          type="number"
          placeholder="Вес"
          v-model="weight"
        />
        <span class="error" v-if="this.errors.includes('weight')">Ошибка</span>
        <input
          v-bind:class="[this.errors.includes('height') ? 'danger' : null]"
          type="number"
          placeholder="Рост"
          v-model="height"
        />
        <span class="error" v-if="this.errors.includes('height')">Ошибка</span>
        <span class="age">Возраст: {{ calc_age }}</span>
      </div>
      <button @click="action">
        {{ !this.current ? "Отправить" : "Обновить" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}
form input,
select {
  padding: 10px;
}
form .input-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .input-group input {
  width: 20%;
}
form .input-group span {
  flex-basis: 20%;
}
.error {
  color: red;
}
.danger {
  border: 1px solid red;
}
button {
  border: none;
  background: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
