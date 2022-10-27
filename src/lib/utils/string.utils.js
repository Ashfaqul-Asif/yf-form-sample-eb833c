export function removeHtmlTags(str) {
  if (str === null || str === '') {
    return '';
  }

  str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, '');
}

export function htmlEncode(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}

export function htmlDecode(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}
