<script setup lang="ts">
import { ref } from "vue";
import { io } from "socket.io-client";
import Swal from "sweetalert2";
import AWN from "awesome-notifications";

const notifier = new AWN();

const socket = io("http://162.214.164.60:3000");

const it = io("http://162.214.164.60:3000/it");

const dataFetched = ref("example");
const title = ref("");
const textarea = ref("");

/* sockets events */

/* functions */
function sendMessage() {
  console.log("sendMessage");
  it.emit("operation", {
    title: title.value,
    message: textarea.value,
    status: "true",
  });
}
</script>

<template>
  <main>
    <input type="text" v-model="title">
    <textarea v-model="textarea"></textarea>
    <button @click="sendMessage">Esto es un ejemplo de boton</button>
    <br />
    <p>{{ dataFetched }}</p>
  </main>
</template>
