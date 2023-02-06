function tables_wrapper() {
  if (document.querySelector('.reports-item') === null) {
    return;
  }
  else {
    let page_tables = document.querySelectorAll('table');
    console.log(page_tables);

    page_tables.forEach((item) => {
      let wrapper = document.createElement('div');
      wrapper.classList.add('reports-item__table-container');

      item.parentNode.insertBefore(wrapper, item);
      wrapper.appendChild(item);
    })
  }
}

tables_wrapper();