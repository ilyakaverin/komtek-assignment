<script lang="ts">
import { calculate_age, correctBirthDate } from "@/service";
import Button from "@/components/Button.vue";
import TextInput from "@/components/TextInput.vue";
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
    return { store, current };
  },
  components: {
    TextInput,
    Button,
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
      calc_age() {
      return this.birthdate?.length === 10 ? calculate_age(correctBirthDate(this.birthdate)) : 0;
    },
  },
  methods: <any>{
    add(e: Event): void {
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
      validate(user).then((errors) => {
                console.log(errors)
        if (errors.length > 0) {
          this.errors = [];
          errors.map((error) => this.errors.push(error));
        } else {
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
        } else {
          this.store.updatePatient(updatedUser, this.id);
          this.$router.replace({ name: "home" });
          this.errors = [];
          this.current = [];
        }
      });
    },
    action(e: Event) {
      e.preventDefault();
      !this.current ? this.add(e) : this.update(e);
    },
  },
};
</script>

<template>
  <div class="container">
    <form>
      <TextInput
        v-model:surname="surname"
        inputName="surname"
        :placeholder="'Фамилия'"
        :errors="this.errors"
        type="text"
        :fieldProp="surname"
      />
      <TextInput
        v-model:name="name"
        inputName="name"
        :placeholder="'Имя'"
        :errors="this.errors"
        type="text"
        :fieldProp="name"
      />
      <TextInput
        v-model:secondName="secondName"
        inputName="secondName"
        :placeholder="'Отчество(не обязательно)'"
        :errors="this.errors"
        type="text"
        :fieldProp="secondName"
      />
      <TextInput
        v-model:birthdate="birthdate"
        inputName="birthdate"
        :placeholder="'Дата рождения'"
        :errors="this.errors"
        type="date"
        :fieldProp="birthdate"
      />
      <span>Пол</span>
      <select name="sex" id="gender" v-model="gender">
        <option value="Male">Мужчина</option>
        <option value="Female">Женщина</option>
      </select>
      <TextInput
        v-model:snils="snils"
        inputName="snils"
        :placeholder="'СНИЛС(Без пробелов и черточек)'"
        :errors="this.errors"
        type="text"
        :fieldProp="snils"
        maxLength="11"
      />
      <div class="input-group">
        <TextInput
          v-model:weight="weight"
          inputName="weight"
          :placeholder="'Вес ( кг )'"
          :errors="this.errors"
          :fieldProp="weight"
          type="number"
        />
        <TextInput
          v-model:height="height"
          inputName="height"
          :placeholder="'Рост ( см )'"
          :errors="this.errors"
          :fieldProp="height"
          type="number"
        />
        <span class="age">Возраст: {{ calc_age }}</span>
      </div>
      <Button
        @click="action"
        :name="!this.current ? 'Отправить' : 'Обновить'"
      />
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
select {
  padding: 10px;
  border: 2px solid black;
}
form .input-group {
  display: flex;
  justify-content: space-between;
  flex-direction: column
}
form .input-group input {
  width: 20%;
}
form .input-group span {
  flex-basis: 20%;
}

.container {
  max-width: 50%;
  margin: 0 auto;
}
</style>
