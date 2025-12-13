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
   header:'https://placehold.co/1000x500/222/eee.png',
   icon1:'https://placehold.co/100/222/eee.png',
   icon2:'https://placehold.co/100/222/eee.png',
   side:'https://placehold.co/100/222/eee.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
  james_doe: {
   name: 'James Doe',
   universe: 'Cyberpunk 2077',
   image:'https://placehold.co/150x200/222/eee.png',
   header:'https://placehold.co/1000x500/222/eee.png',
   icon1:'https://placehold.co/100/222/eee.png',
   icon2:'https://placehold.co/100/222/eee.png',
   side:'https://placehold.co/100/222/eee.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
  jane_smith: {
   name: 'Jane Smith',
   universe: 'Baldur\'s Gate 3',
   image:'https://placehold.co/150x200/222/eee.png',
   header:'https://placehold.co/1000x500/222/eee.png',
   icon1:'https://placehold.co/100/222/eee.png',
   icon2:'https://placehold.co/100/222/eee.png',
   side:'https://placehold.co/100/222/eee.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
 };

 $('profile header').append('<img src="'+info.header+'"/>');
 $('profile side').append('<img src="'+info.icon+'"/><h1>'+info.title+'</h1><p>'+info.text+'</p><ul></ul>');

 for (const oc in characters) {
   $('profile main').append(`<oc id="${oc}"><img src="${characters[oc].image}"/><h2>${characters[oc].name}</h2><h3>${characters[oc].universe}</h3></oc>`);
 }

 for (const oc in characters) {
  let univ = `${characters[oc].universe}`;
  let univClean = univ.toLowerCase().split(' ').join('').replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
  if ($('profile side ul li[data-universe="'+univClean+'"]').length) {
    let count = $('profile side ul li[data-universe="'+univClean+'"]').data('count');
    let newCount = ++count;
    $('profile side ul li[data-universe="'+univClean+'"]').attr('data-count', newCount);
  } else {
    $('profile side ul').append('<li data-universe="'+univClean+'" data-count="1">'+univ+'</li>');
  }
 }

 for (const oc in characters) {
  const data = characters[oc];

  const $char = $('#character-template')
    .clone()
    .removeAttr('id')
    .attr('data-character', oc)
    .show();

  $char.find('header').append(`<img src="${data.header}"><h2>${data.name}</h2><h3>${data.universe}</h3>`);
  $char.find('info').html(data.info);
  $char.find('history').html(data.history);
  $char.find('miscellaneous').html(data.misc);
  $char.find('extra').html(data.extra);

  $char.find('icons').append(`
    <span><img src="${data.icon1}"></span>
    <span><img src="${data.icon2}"></span>
  `);

  $char.find('side').append(`<img src="${data.side}">`);

  $('body').append($char);
}
 
});
