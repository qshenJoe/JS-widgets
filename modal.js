const infoStore = [
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  },
  {
    modalId: '',
    btnId: '',
    className: '',
    content: {}
  }
];

infoStore.forEach(item => {
  const { modalId, btnId, className, content } = item;
  var modal = document.getElementById(modalId);
  var btn = document.getElementById(btnId);
  var close = document.getElementsByClassName(className);
  btn.onclick = () => {
    modal.style.display = 'block';
  };
  close.onclick = () => {
    modal.style.display = 'none';
  };
  window.onclick = event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});
