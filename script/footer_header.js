//Function to create navigation bar 

function createNavBar() {
    //importing navbar element from html
    var navBar = document.getElementById("navbar");
    navBar.className = "topnav"; 

    //creating div elements for navbar

    // var nav_content = document.createElement("div");
    // nav_content.id = "navContent";

    var nav_home = document.createElement("a");
    nav_home.id = "navhome";

    var nav_about = document.createElement("a");
    nav_about.id = "navabout";

    var nav_booking = document.createElement("a");
    nav_booking.id = "navbooking";

    var nav_contact = document.createElement("a");
    nav_contact.id = "navcontact";

    var nav_menu = document.createElement("a");
    nav_menu.id = "navmenu";

    //creating text nodes for navbar elements
    var home = document.createTextNode("HOME");
    nav_home.appendChild(home);
    nav_home.href = "homepage.html"

    var about = document.createTextNode("ABOUT");
    nav_about.appendChild(about);
    nav_about.href = "about_us.html";
 
    var booking = document.createTextNode("BOOKING");
    nav_booking.appendChild(booking);
    nav_booking.href = "booking.html";

    var contact = document.createTextNode("CONTACT");
    nav_contact.appendChild(contact);
    nav_contact.href = "contact.html";

    var menu = document.createTextNode("MENU");
    nav_menu.appendChild(menu);
    nav_menu.href = "menu.html";

    //for responsive design
    var nav_burger = document.createElement("img");
    nav_burger.id = "navBurger";
    nav_burger.src = "image/navBurger.png";
    nav_burger.onclick = function() {
        var x = document.getElementById("navbar");
        if (x.className == 'topnav') {
            x.className = 'responsive';
        } else {
            x.className = 'topnav';
        }
        console.log(x.className);
    };

    //navBar.appendChild(nav_logo);
    navBar.appendChild(nav_home);
    navBar.appendChild(nav_about);    
    navBar.appendChild(nav_menu); 
    navBar.appendChild(nav_contact);
    navBar.appendChild(nav_booking);
    navBar.appendChild(nav_burger);
    
    //navBar.appendChild(nav_content);
}


//Function to create footer elements
function createFooter() {
    //importing footer element from html
    var footer = document.getElementById("footer");

    //div holding all div elements in the footer
    var foot_content = document.createElement("div");
    foot_content.id = 'foot_content';

    var foot_icons = document.createElement("div");
    foot_icons.id = 'foot_icons';

    //left content
    var footDiv_left = document.createElement("a");
    footDiv_left.id = 'footDiv_left'; 

    //middle content
    var footDiv_middle = document.createElement("div");
    footDiv_middle.id = 'footDiv_middle';

    //right content
    var footDiv_right = document.createElement("div");
    footDiv_right.id = 'footDiv_right';

    //icons 
    var foot_face = document.createElement('a');
    foot_face.href = "https://www.facebook.com/superheroburger.tryggvasonsgt";
    foot_face.target = "_blank";
    foot_face.rel = "noopener noreferrer";

    var foot_inst = document.createElement('a');
    foot_inst.href = "https://www.instagram.com/superheroburger/?hl=nb";
    foot_inst.target = "_blank";
    foot_inst.rel = "noopener noreferrer";

    var foot_arrow = document.createElement('a');
    foot_arrow.href = "#top";

    var face_icon = document.createElement('img');
    face_icon.src = "image/facebook.png";

    var inst_icon = document.createElement('img');
    inst_icon.src = "image/instagram.png";

    var arrow_icon = document.createElement('img');
    arrow_icon.src = 'image/arrowup.png';
    
    //creating text nodes and appending childnodes for footer content
    var foot_left = document.createTextNode('contact@shb.com');
    footDiv_left.appendChild(foot_left);
    footDiv_left.href = "mailto:contact@shb.com";

    var foot_middle = document.createTextNode('Olav Trygvasons gate 10, 7012 Trondheim');
    footDiv_middle.appendChild(foot_middle);
    footDiv_right.innerHTML = '&copy'+'SHB'+''+'2020';

    foot_face.appendChild(face_icon);
    foot_inst.appendChild(inst_icon);
    foot_arrow.append(arrow_icon);

    foot_content.appendChild(footDiv_left);
    foot_content.appendChild(footDiv_middle);
    foot_content.appendChild(footDiv_right);
    foot_icons.appendChild(foot_face);
    foot_icons.appendChild(foot_inst);
    foot_icons.appendChild(foot_arrow);

    footer.appendChild(foot_content);
    footer.appendChild(foot_icons);

    console.log(foot_content);    
}

createFooter();
createNavBar();