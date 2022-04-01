
function ajouter()
{
  if(!! document.getElementById("ajouterp"))
  document.getElementById("ajouterp").remove();

    let div = document.getElementById("test");
//ajout du label  
    let label_prenom=document.createElement("label");
    label_prenom.setAttribute("id","label");
    label_prenom.setAttribute("class","form-label");
    div.appendChild(label_prenom);
 document.getElementById('label').innerHTML =' Prénom:'; 

//ajout du champ 
 let prenom=document.createElement("input");
    prenom.setAttribute("type","text");
    prenom.setAttribute("id","prenom");
    prenom.setAttribute("class","form-control");
    div.appendChild(prenom);


    let r=document.createElement("input");
    r.setAttribute("type","submit");
    r.setAttribute("class","btn");
    r.setAttribute("id","annulerp");
    r.setAttribute("onclick","remove()");
    r.setAttribute("value","annuler prenom");
    div.appendChild(r);
//changemant valeur et comportement du bouton ajouter 
if(!(!! document.getElementById("date"))&&!(!!document.getElementById("ajouterd")))
 document.getElementById('ajout').innerHTML ='<input type="submit" onclick="ajouter1()" class="btn" value="Ajouter date de naissance" id="btn">';
}

function ajouter1()
{
  if(!! document.getElementById("ajouterd"))
  document.getElementById("ajouterd").remove();
  let div = document.getElementById("test1");

//ajout du label  
    let label_date=document.createElement("label");
    label_date.setAttribute("id","date");
    label_date.setAttribute("class","form-label");
    div.appendChild(label_date);
 document.getElementById('date').innerHTML =' Date naissance :'; 
//ajout du champ 
 let date=document.createElement("input");
    date.setAttribute("type","date");
    date.setAttribute("class","form-control");
    date.setAttribute("id","ladate");
    div.appendChild(date);


    let r=document.createElement("input");
    r.setAttribute("type","submit");
    r.setAttribute("class","btn");
    r.setAttribute("id","annulerd");
    r.setAttribute("onclick","remove1()");
    r.setAttribute("value","annuler date");
    div.appendChild(r);
//supprression bouton d'ajout DOM 
document.getElementById('ajout').innerHTML ='';


}
function remove(){
  document.getElementById("prenom").remove();
  document.getElementById("label").remove();
  document.getElementById("annulerp").remove();


  let div = document.getElementById("test");
  let r=document.createElement("input");
  r.setAttribute("type","submit");
  r.setAttribute("class","btn");
  r.setAttribute("id","ajouterp");
  r.setAttribute("onclick","ajouter()");
  r.setAttribute("value","ajouter votre prenom");
  div.appendChild(r);
}
function remove1(){
  document.getElementById("ladate").remove();
  document.getElementById("date").remove();
  document.getElementById("annulerd").remove();

  let div = document.getElementById("test1");
  let r=document.createElement("input");
  r.setAttribute("type","submit");
  r.setAttribute("class","btn");
  r.setAttribute("id","ajouterd");
  r.setAttribute("onclick","ajouter1()");
  r.setAttribute("value","ajouter date de naissance");
  div.appendChild(r);
}