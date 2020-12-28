const displayController = () => {
  // const content = document.getElementById('content');

  const displaySearch = () => {
    const content = document.getElementById('content');
    content.setAttribute('class', 'container');

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

  return {
    displaySearch,
  };
};

export default displayController;