$(function(){

 const info = {
  title:'how rare and beautiful it truly is that we exist',
  text:'Lorem ipsum dolor sit amet.',
  header:'https://placehold.co/1920x300/222/eee.png',
  icon:'https://placehold.co/100/222/eee.png'
 };

const characters = {
  john_doe: {
   name: 'John Doe',
   universe: 'Cyberpunk 2077',
   image:'https://placehold.co/150x200/222/eee.png',
  },
  jane_smith: {
   name: 'Jane Smith',
   universe: 'Baldur\'s Gate 3',
   image:'https://placehold.co/150x200/222/eee.png',
  },
 };

 $('profile header').append('<img src="'+info.header+'"/>');
 $('profile side').append('<img src="'+info.icon+'"/><h1>'+info.title+'</h1><p>'+info.text+'</p><ul></ul>');

 for (const oc in characters) {
   $('profile main').append(`<oc id="${oc}"><img src="${characters[oc].image}"/><h2>${characters[oc].name}</h2><h3>${characters[oc].universe}</h3></oc>`);
 }
 
});
