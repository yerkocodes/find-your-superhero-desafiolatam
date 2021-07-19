$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let valueInput = $("#superHeroInput").val(); //Valor del input 

    $.ajax({
      type: "get",
      url: "https://superheroapi.com/api.php/2957577794560794/" + valueInput,
      datatype: "json",
      success: function(data){
	console.log(data)
	let heroImage = data.image.url;
	let heroName = data.name;
	let heroConnections = data.connections.group-affiliation;
	let heroPublisher = data.biography.publisher;
	let heroOccupation = data.work.occupation;
	let heroAppearance = data.biography.first-appearance;
	let heroHeight = data.appearance.height;
	let heroWeight = data.appearance.weight;
	let heroAliases = data.biography.aliases;
      },
    })

  });
});
