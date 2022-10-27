import { QuestionType } from '@ditdot-dev/vue-flow-form';
import { removeHtmlTags } from './string.utils';

function normalizeMultipleChoice(content) {
  return Array.isArray(content)
    ? content.map((item) => removeHtmlTags(item))
    : [removeHtmlTags(content)];
}

function normalizeUrl(content) {
  return !content.includes('://') ? `https://${content.trim()}` : content;
}

function normalizeNumber(content) {
  return isNaN(content) ? null : Number(content);
}

export function normalizeAnswer(content, questionType) {
  if (content && questionType === QuestionType.MultipleChoice) {
    return normalizeMultipleChoice(content);
  }
  if (content && questionType === QuestionType.Url) {
    return normalizeUrl(content);
  }
  if (
    content &&
    (questionType === QuestionType.OpinionScale ||
      questionType === QuestionType.IconRate)
  ) {
    return normalizeNumber(content);
  }

  return content;
}
