

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('header, main, footer'); // Select all elements you want to animate
    elements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.3}s`;
    });
});



// home section
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');


menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// portfolio section
function openPopup(project) {
    var title, description, client, technologies, link, github;

    switch(project) {
        case 'gupiteer':
            title = `GuPiTEER`;
            description = `GuPiTEER, a comprehensive solution, centralizes access to multiple GPTs. Users can select previous chats for context, enhancing relevance and continuity. The validation system ensures accuracy, streamlining AI interactions. Professionals, students, and workflow optimizers benefit from this efficient tool. API access empowers developers. In summary, GuPiTEER stands out as a valuable platform for harnessing AI power in various projects. 🚀`;
            client = `Hacklytics 2024 @ Georgia Institute of Technology`;
            technologies = `HTML, CSS, JavaScript, Flask, Python, React.js, APIs, LLMs`;
            link = "https://devfolio.co/projects/gupiteer-bcc3";
            github = "https://github.com/itswindee/gupiteer";
            break;
        case 'littleTreasures':
            title = `Little Treasures`;
            description = `In today's fast-paced world, it's easy to overlook the small moments that bring true happiness and fulfillment. Little Treasures is a mobile app designed to help users pause, reflect, and cherish these fleeting yet meaningful moments. Each day, users are prompted to identify and record their "little treasures" – moments of joy, gratitude, or connection – by writing a brief description or attaching a photo. This practice fosters a mindset shift towards embracing life's simple pleasures, cultivating greater gratitude, happiness, and mental well-being. Targeting busy individuals experiencing stress and anxiety, Little Treasures stands out in the growing mental wellness app market by emphasizing the celebration of small moments. Little Treasures serves as a gentle reminder to slow down, appreciate, and savor life's little joys.`;
            client = `Well-Being Hackathon 2.0 @ Kennesaw State University`;
            technologies = `HTML, CSS, JavaScript, Node.js, Express, MongoDB`;
            link = "https://project2.demo.link";
            github = "https://github.com/user/project2";
            break;
        // Add more cases for additional projects
        default:
            title = "Unknown Project";
            description = "No description available.";
            client = "Unknown Client";
            technologies = "Unknown Technologies";
            link = "#";
            github = "#";
    }

    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-client').textContent = client;
    document.getElementById('popup-technologies').textContent = technologies;
    document.getElementById('popup-link').href = link;
    document.getElementById('popup-github').href = github;

    document.getElementById('project-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('project-popup').style.display = 'none';
}

var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})


// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})



// reviews section
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})