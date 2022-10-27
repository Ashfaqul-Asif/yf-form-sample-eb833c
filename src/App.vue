<script setup>
import { reactive } from 'vue';
import { FlowForm } from '@ditdot-dev/vue-flow-form';
import { normalizeAnswer } from './lib/utils/form.utils';
import { fakeQuestions } from './lib/fake-questions';
import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
import '@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css';

// data
const questions = reactive(fakeQuestions);

// methods
function onAnswer(question) {
  const content = normalizeAnswer(question.answer, question.type);
  console.log('onAnswer', content);
}

function onView(question) {
  console.log('onView', question);
}

function onSubmit(questionList) {
  console.log('onSubmit', questionList);
}
</script>

<template>
  <FlowForm
    v-if="questions && questions.length > 0"
    ref="flowform"
    :key="questions.length"
    :questions="questions"
    :standalone="true"
    @submit="onSubmit"
    @answer="onAnswer"
  />
</template>
