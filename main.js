$(function(){

 const info = {
  title:'how rare and beautiful it truly is that we exist',
  text:'Lorem ipsum dolor sit amet.',
  header:'/ocs/images/profile-header.png',
  icon:'/ocs/images/profile-icon.png'
 };

const characters = {
  vesna_ndari: {
   name: 'Vesna Ndari',
   universe: 'Cyberpunk 2077',
   tags: ['woman', 'alive', 'mixed', 'poc', 'asian', 'thai', 'czech', 'cis', 'bisexual', 'streetkid', 'brawler'],
   ac1: '#507d4f',
   ac2: '#3a6139',
   image:'/ocs/images/vesna-image.png',
   header:'/ocs/images/vesna-header.png',
   icon1:'/ocs/images/vesna-icon1.png',
   icon2:'/ocs/images/vesna-icon2.png',
   side:'/ocs/images/vesna-side.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
  vee_lancaster: {
   name: 'Vee Lancaster',
   universe: 'Cyberpunk 2077',
   tags: ['woman', 'alive', 'white', 'usamerican', 'cis', 'bisexual', 'corpo', 'netrunner'],
   ac1: '#4f6c7d',
   ac2: '#395260',
   image:'/ocs/images/vee-image.png',
   header:'/ocs/images/vee-header.png',
   icon1:'/ocs/images/vee-icon1.png',
   icon2:'/ocs/images/vee-icon2.png',
   side:'/ocs/images/vee-side.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
  viorel_dmitrescu: {
   name: 'Viorel Dmitresçu',
   universe: 'Cyberpunk 2077',
   tags: ['man', 'alive', 'white', 'romanian', 'trans', 'gay', 'corpo', 'netrunner'],
   ac1: '#7d4f6e',
   ac2: '#603954',
   image:'/ocs/images/vee-image.png',
   header:'/ocs/images/vee-header.png',
   icon1:'/ocs/images/vee-icon1.png',
   icon2:'/ocs/images/vee-icon2.png',
   side:'/ocs/images/vee-side.png',
   info:'Lorem ipsum dolor sit amet.',
   history:'Lorem ipsum dolor sit amet.',
   misc:'Lorem ipsum dolor sit amet.',
   extra:'Lorem ipsum dolor sit amet.'
  },
  jane_smith: {
   name: 'Jane Smith',
   universe: 'Baldur\'s Gate 3',
   tags: ['woman', 'alive', 'tiefling', 'cis', 'lesbian'],
   ac1: '#776394',
   ac2: '#604d7a',
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

 // populating main profile

 $('profile header').append('<img src="'+info.header+'"/>');
 $('profile side').append('<img src="'+info.icon+'"/><h1>'+info.title+'</h1><p>'+info.text+'</p><ul></ul>');

 // creating character list

 for (const oc in characters) {
  let univ = `${characters[oc].universe}`;
  let univClean = univ.toLowerCase().split(' ').join('').replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
   $('profile main').append(`<oc id="${oc}" data-universe="${univClean}" style="--ac1:${characters[oc].ac1};--ac2:${characters[oc].ac2};"><tags></tags><span><img src="${characters[oc].image}"/></span><h2>${characters[oc].name}</h2><h3>${characters[oc].universe}</h3></oc>`);
 }

 // creating universe filters

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

 // creating character profiles

 for (const oc in characters) {
  const data = characters[oc];

  const tags = Array.isArray(data.tags)
    ? data.tags
    : data.tags.split(',').map(t => t.trim());
  tags.sort((a, b) => a.localeCompare(b));

  const $char = $('#character-template')
    .clone()
    .removeAttr('id')
    .attr('data-character', oc)
    .show()
    .attr('style',  `--ac1:${characters[oc].ac1};--ac2:${characters[oc].ac2};`);

  $char.find('header').append(`<tags></tags><img src="${data.header}"><h2>${data.name}</h2><h3>${data.universe}</h3>`);
  $char.find('info').html(data.info);
  $char.find('history').html(data.history);
  $char.find('miscellaneous').html(data.misc);
  $char.find('extra').html(data.extra);

  $char.find('icons').append(`
    <span><img src="${data.icon1}"></span>
    <span><img src="${data.icon2}"></span>
  `);

  $char.find('side').append(`<img src="${data.side}">`);
  
  const $tags = $char.find('tags');

  tags.forEach(tag => {
    $tags.append(`<b data-tag="${tag}">${tag}</b>`);
  });

  $('body').append($char);

  const $oc = $(`oc#${oc}`);
  tags.forEach(tag => {
    $oc.find('tags').append(`<b data-tag="${tag}">${tag}</b>`);
  });
  
}

 // creating filter buttons

 const allTags = new Set();

 for (const oc in characters) {
   const tags = Array.isArray(characters[oc].tags)
     ? characters[oc].tags
     : characters[oc].tags.split(',').map(t => t.trim());
 
   tags.forEach(tag => allTags.add(tag));
 }

 [...allTags]
  .sort((a, b) => a.localeCompare(b))
  .forEach(tag => {
    $('tabs').append(`<b data-tag="${tag}">${tag}</b>`);
  });

// filtering system
 
const activeTags = new Set();
let activeUniverse = null;

 $('profile side').on('click', 'li[data-universe]', function () {
  const universe = $(this).data('universe');

  if (activeUniverse === universe) {
    activeUniverse = null;
    $(this).removeClass('active');
  } else {
    activeUniverse = universe;
    $('profile side li').removeClass('active');
    $(this).addClass('active');
  }

  filterGlobalTags();
  filterOCs();
});

$('tabs').on('click', 'b[data-tag]', function () {
  const tag = $(this).data('tag');

  $(this).toggleClass('active');

  if (activeTags.has(tag)) {
    activeTags.delete(tag);
  } else {
    activeTags.add(tag);
  }

  filterOCs();
});

function filterOCs() {
  const requiredTags = [...activeTags];

  $('profile main oc').each(function () {
    const $oc = $(this);

    const ocUniverse = $oc.data('universe');

    const ocTags = $oc.find('tags b')
      .map((_, el) => $(el).data('tag'))
      .get();

    const matchesUniverse =
      !activeUniverse || ocUniverse === activeUniverse;

    const matchesTags =
      requiredTags.every(tag => ocTags.includes(tag));

    const visible = matchesUniverse && matchesTags;

    $oc.toggle(visible);
  });

}

 // hide unused filters

function filterGlobalTags() {
  const relevantOCs = activeUniverse
    ? $(`profile main oc[data-universe="${activeUniverse}"]`)
    : $('profile main oc');

  $('tabs b[data-tag]').each(function () {
    const tag = $(this).data('tag');

    const tagExistsInUniverse = relevantOCs.toArray().some(oc =>
      $(oc).find(`tags b[data-tag="${tag}"]`).length
    );

    $(this).toggle(tagExistsInUniverse);

    // If the tag no longer exists in this universe, deactivate it
    if (!tagExistsInUniverse) {
      $(this).removeClass('active');
      activeTags.delete(tag);
    }
  });
}

$('oc').on('click', function() {
var character = $(this).attr('id');
$('character[data-character="'+character+'"]').addClass('active');
});

$('character close').on('click', function() {
$(this).parent('character').removeClass('active');
});

var pageLink = location.href;
var question = pageLink.substring(pageLink.indexOf("?")+1);
if ($('character[data-character="'+question+'"]').length) {
$('character[data-character="'+question+'"]').addClass('active');
}

});
