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
   universe: 'Cyberpunk 2077'
  },
  jane_smith: {
   name: 'Jane Smith',
   universe: 'Baldur\'s Gate 3'
  },
 };

 $('profile header').append('<img src="'+info.header+'"/>');
 $('profile side').append('<img src="'+info.icon+'"/><h1>'+info.title+'</h1><p>'+info.text+'</p><ul></ul>');
 
});
