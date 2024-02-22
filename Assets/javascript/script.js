document.addEventListener("DOMContentLoaded", function() {
    
    var offcanvas = document.getElementById("offcanvasScrolling");
    var mainContent = document.getElementById("body");
    var offcanvasButton = document.querySelector('[data-bs-toggle="offcanvas"]');
    var offcanvasState = localStorage.getItem('offcanvasState');

    offcanvasButton.addEventListener('click', function () {
        if (offcanvas.classList.contains('show')) {
            offcanvas.classList.remove('show'); 
            mainContent.style.marginLeft = '0'; 
        } else {
            offcanvas.classList.add('show');
            mainContent.style.marginLeft = '400px';
        }
    });

    // if (offcanvasState === 'open') {
    //     offcanvas.classList.add('show');
    //     mainContent.style.marginLeft = '400px';
    // }

    // offcanvasButton.addEventListener('click', function () {
    //     if (offcanvas.classList.contains('show')) {
    //         offcanvas.classList.remove('show');
    //         mainContent.style.marginLeft = '0';
    //         localStorage.setItem('offcanvasState', 'closed'); 
    //     } else {
    //         offcanvas.classList.add('show');
    //         mainContent.style.marginLeft = '400px';
    //         localStorage.setItem('offcanvasState', 'open'); 
    //     }
    // });


    //dropdown
    var product1 = document.getElementById("product1");
    var product2 = document.getElementById("product2");
    var drop1 = document.getElementById("drop-1");
    var drop2 = document.getElementById("drop-2");


    product1.addEventListener('click',function(){
        if(drop1.style.display === 'block')
        {
            drop1.style.display = 'none';
        }
        else
        {
            drop2.style.display = 'none';
            drop1.style.display = 'block';
        }
    });

    product2.addEventListener('click',function(){
        if(drop2.style.display === 'block')
        {
            drop2.style.display = 'none';
        }
        else
        {
            drop1.style.display = 'none';
            drop2.style.display = 'block';
        }
    });

    
});