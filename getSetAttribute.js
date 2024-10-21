console.log(document.querySelector('[kya="age"]'))  //<p kya="age">Age: 22</p>

document.querySelector('[kya = "age"]').attributes.kya  //kya="age"

document.querySelector('[kya="age"]').attributes.kya.value  //age

document.querySelector('strong').getAttribute('name')   //suraj

document.querySelector('strong').getAttribute('kya')  //name

document.querySelector('.profile').getAttribute('class') //'profile basic_intro'

document.querySelector('.profile').setAttribute("title" , "intro-title")  // it will add the attribute on profile class with key and value

document.querySelector('.profile').setAttribute("class" , "profile basic_intro")  // it will replace previous class with new class value

document.querySelector('.profile').getAttribute('class')  //'profile basic_intro'

document.querySelector('h1').id          //we get the id of the h1 tag