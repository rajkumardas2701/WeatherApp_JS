const displayController = () => {
  const content = document.getElementById('content');
  content.setAttribute('class', 'container');

  const displaySearch = () => {
    const formInput = document.createElement('form');
    formInput.setAttribute('class', 'form-input');
    content.appendChild(formInput);

    const formLabel = document.createElement('span');
    formLabel.setAttribute('id', 'form-label');
    formLabel.innerHTML = 'City:';
    formInput.appendChild(formLabel);

    const formText = document.createElement('input');
    formText.setAttribute('id', 'form-text');
    formInput.appendChild(formText);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('id', 'form-submit');
    submit.innerHTML = 'Submit';
    formInput.appendChild(submit);
  };

  const displayResults = (data) => {
    const resultSection = document.createElement('h2');
    resultSection.setAttribute('class', 'result-section');
    resultSection.textContent = data.name;
    content.appendChild(resultSection);

    const left = document.createElement('div');
    left.setAttribute('class', 'left-side');
    resultSection.appendChild(left);

    const right = document.createElement('div');
    right.setAttribute('class', 'right-side');
    resultSection.appendChild(right);
  };

  return {
    displaySearch,
    displayResults,
  };
};

export default displayController;