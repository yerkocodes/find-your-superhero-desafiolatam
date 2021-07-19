$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let valueInput = $("#superHeroInput").val(); //Valor del input 

    $.ajax({
      type: "get",
      url: "https://superheroapi.com/api.php/2957577794560794/" + valueInput,
      datatype: "json",
      success: function(data){
	let heroImage = data.image.url;
	let heroName = data.name;
	let heroConnections = data.connections["group-affiliation"];
	let heroPublisher = data.biography.publisher;
	let heroOccupation = data.work.occupation;
	let heroAppearance = data.biography["first-appearance"];
	let heroHeight = data.appearance.height;
	let heroWeight = data.appearance.weight;
	let heroAliases = data.biography.aliases;

	$('#heroCard').html(`
		<div class="card mb-3">
		  <div class="row no-gutters">
		    <div class="col-md-4">
		      <img class="w-100" src="${heroImage}" alt="">
		    </div>
		    <div class="col-md-8">
		      <div class="card-body">
			<h3 class="card-title">${heroName}</h3>
			<p class="card-text">${heroConnections}</p>
			<ul class="list-group list-group-flush">
			  <li class="list-group-item">${heroPublisher}</li>
			  <li class="list-group-item">${heroOccupation}</li>
			  <li class="list-group-item">${heroAppearance}</li>
			  <li class="list-group-item">${heroHeight}</li>
			  <li class="list-group-item">${heroWeight}</li>
			  <li class="list-group-item">${heroAliases}</li>
			</ul>
		      </div>
		    </div>
		  </div>
		</div>
	  `)

      },
    })

  });
});
