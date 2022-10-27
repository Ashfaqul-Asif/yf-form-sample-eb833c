import {
  QuestionModel,
  QuestionType,
  ChoiceOption,
} from '@ditdot-dev/vue-flow-form';

export const fakeQuestions = [
  new QuestionModel({
    id: 'first_name',
    tagline: 'Hi! Welcome to our demo survey 😊',
    title: 'What is your first name?',
    type: QuestionType.Text,
    required: false,
    placeholder: 'Start typing here...',
  }),
  new QuestionModel({
    id: 'email',
    tagline: '',
    title:
      '<p>Nice to meet you <span data-type="substitution" class="substitution" data-id="first_name" contenteditable="false">What\'s your first name?</span>! What\'s your email?</p>',
    type: QuestionType.Email,
    required: true,
    placeholder: 'Start typing here...',
  }),
  new QuestionModel({
    id: 'phone',
    title: 'Doing great! 👍 Go ahead and try with a phone number.',
    type: QuestionType.Phone,
    required: true,
    mask: '(###) ###-####',
  }),
  new QuestionModel({
    id: 'movies',
    title: 'List your favorite movies. 🍿',
    type: QuestionType.LongText,
    required: true,
    placeholder: 'Start typing here...',
  }),
  new QuestionModel({
    id: 'icon_rate',
    tagline: "Thanks for that. Now, let's give it some ⭐ rating",
    title: 'How good was the last movie you watched?',
    type: QuestionType.IconRate,
    required: true,
    max: 5,
  }),
  new QuestionModel({
    id: 'opinion_scale',
    title: 'Choose a number to express your opinion 👇',
    subtitle: 'You can also use ⌨️ numbers to select an option',
    type: QuestionType.OpinionScale,
    required: true,
    max: 5,
    labelLeft: 'Dissapointing',
    labelRight: 'Exceptional',
  }),
  new QuestionModel({
    id: 'multiple_choice',
    tagline: 'FYI, You can always go back 👈, use the up arrow on the bottom.',
    title: 'Multiple choice question:',
    helpTextShow: false,
    type: QuestionType.MultipleChoice,
    multiple: false,
    allowOther: true,
    required: true,
    options: [
      new ChoiceOption({
        label: 'Answer 1',
      }),
      new ChoiceOption({
        label: 'Answer 2',
      }),
      new ChoiceOption({
        label: 'Answer 3',
      }),
    ],
  }),
  new QuestionModel({
    id: 'multiple_choices',
    title: 'Multiple choices question:',
    type: QuestionType.MultipleChoice,
    multiple: true,
    helpText: 'Select all that apply. 👇',
    required: true,
    options: [
      new ChoiceOption({
        label: 'Answer 1',
      }),
      new ChoiceOption({
        label: 'Answer 2',
      }),
      new ChoiceOption({
        label: 'Answer 3',
      }),
      new ChoiceOption({
        label: 'Answer 4',
      }),
    ],
  }),

  new QuestionModel({
    id: 'break_1',
    title: 'Awesome, thank you. 🙏',
    content:
      'You arrived at the section break of our little demo survey. To continue exploring, just press enter or use the continue button.',
    description: 'Note: We will take a look at our multiple path feature next.',
    type: QuestionType.SectionBreak,
  }),
  new QuestionModel({
    id: 'choose_path',
    tagline: 'Where would you like to go? 🤔',
    title: 'Choose your path:',
    type: QuestionType.Dropdown,
    multiple: false,
    placeholder: 'Select',
    inline: true,
    required: true,
    options: [
      new ChoiceOption({
        label: 'Path A',
      }),
      new ChoiceOption({
        label: 'Path B',
        value: 'path_b',
      }),
    ],
    jump: {
      path_b: 'path_b',
    },
  }),
  new QuestionModel({
    id: 'path_a',
    title: 'Excellent choice! 🥳',
    content:
      'Press enter or use the continue button for the final submit screen.',
    type: QuestionType.SectionBreak,
    jump: {
      _other: '_submit',
    },
  }),
  new QuestionModel({
    id: 'path_b',
    tagline: 'Path B',
    title: 'Hmm, are you sure?',
    helpText: 'Path A sounds like a winner! 😉',
    type: QuestionType.MultipleChoice,
    multiple: false,
    required: true,
    options: [
      new ChoiceOption({
        label: "Ok, let's go with A",
        value: 'path_a',
      }),
      new ChoiceOption({
        label: 'Yes, finish the survey',
      }),
    ],
    jump: {
      path_a: 'path_a',
    },
  }),
];
