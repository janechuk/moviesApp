const $form = $('form')


// list of all of movies in memory for sorting 
let moviesList = [];

$form.on('submit', function(evt){
    evt.preventDefault()

    console.log("Holla holla")


    const $movieTitle = $('#movieTitle').val()
    const $rating = $('#rating').val()
    const $ul = $('ul')
    let currentId = 0;

    
   

    currentId++
    moviesList.push($movieTitle);
    
    $ul.append(`<li>${$movieTitle}  <button class="btn btn-danger btn-sm">Delete</button></li>`)
    $($form).trigger("reset");
})


// click on x to delete
$('ul').on('click', 'button', function(evt){
    $(this).parent().remove()
})


