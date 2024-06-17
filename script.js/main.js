const  mobile_menu = document.querySelector('.nav_mobile_wrapper');
const  popBar = document.getElementById('popBar');
const  collapseBar = document.getElementById('collapseBar');

popBar.addEventListener('click', function(){
        if(mobile_menu.style.display === 'none'){
            mobile_menu.style.display = 'block';
            popBar.style.display = 'none';
            collapseBar.style.display = 'block';
        } else {
            mobile_menu.style.display = 'none';
            popBar.style.display = 'block';
            collapseBar.style.display = 'none';
        }
});

collapseBar.addEventListener('click',
    function(){
        if(mobile_menu.style.display === 'block'){
            mobile_menu.style.display = 'none';
            popBar.style.display = 'block';
            collapseBar.style.display = 'none';
        }
});

 