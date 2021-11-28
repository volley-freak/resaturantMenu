const items = document.querySelectorAll('.card');

document.querySelector('#breakfastBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'breakfast') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#lunchBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'lunch') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#shakesBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'shakes') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#dinnerBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'dinner') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#allBtn').addEventListener('click', function() {
    items.forEach(element => {
        element.style.display = 'grid';
    });
})