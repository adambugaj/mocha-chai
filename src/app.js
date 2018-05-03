//let newOne = <div>Good developer</div>;

exports.sanitize = (word) => {
  let regex = word.replace(/-/g, ' ').toLocaleLowerCase();
  console.log(regex);
  return regex;
}



//ReactDOM.render(newOne, document.getElementById('app'));
