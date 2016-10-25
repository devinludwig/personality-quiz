$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=disposition]:checked").each(function(){
      var dispositionInput = $(this).val();
      $("#disposition-responses").append(dispositionInput + "<br>");
    });
    $("input:checkbox[name=reputation]:checked").each(function(){
      var reputationInput = $(this).val();
      $("#reputation-responses").append(reputationInput + "<br>");
    });
    $("input:checkbox[name=interests]:checked").each(function(){
      var interestsInput = $(this).val();
      $("#interests-responses").append(interestsInput + "<br>");
    });
    $("#disposition-responses").show();
    $("#reputation-responses").show();
    $("#interests-responses").show();
    $("form").hide();

  });
});
