document.getElementById("button_submit").onclick = function() {
    const name = document.getElementById('visitor_name').value;
    const count = document.querySelectorAll('input[name="fav_movie"]:checked').length;

    alert(name+"님, 저와 "+count+"개의 취향이 같으시네요!");
}